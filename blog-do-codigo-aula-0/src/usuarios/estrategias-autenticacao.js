const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const BearerStrategy = require('passport-http-bearer').Strategy;
const jwt = require('jsonwebtoken');

const Usuario = require('./usuarios-modelo')
const { InvalidArgumentError } = require('../erros')
const balcklist = require('../../redis/manipula-balcklist')

function verificaUsuario(usuario) {
    if (!usuario) {
        throw new InvalidArgumentError('Não existe usuário com esse email');
    }
}

async function verificaTokenNaBlacklist(token) {
    const tokenNaBlacklist = await balcklist.contemToken(token);
    if (tokenNaBlacklist) {
        throw new jwt.JsonWebTokenError('Token invalido por logout.');
    }
}

async function verificaSenha(senha, senhaHash) {
    const senhaValida = await bcrypt.compare(senha, senhaHash);
    if (!senhaValida) {
        throw new InvalidArgumentError('E-mail ou senha invalidos')
    }
}

passport.use(
    new LocalStrategy({
        usernameField: 'email',
        passwordField: 'senha',
        session: false
    }, async (email, senha, done) => {
        try {
            const usuario = await Usuario.buscaPorEmail(email);
            verificaUsuario(usuario);
            await verificaSenha(senha, usuario.senhaHash);

            done(null, usuario);
        } catch (error) {
            done(error);
        }
    })
)

passport.use(
    new BearerStrategy(
        async (token, done) => {
            try {
                await verificaTokenNaBlacklist(token);
                const payload = jwt.verify(token, process.env.CHAVE_JWT);
                const usuario = await Usuario.buscaPorId(payload.id);
                done(null, usuario, { token: token })
            } catch (error) {
                done(error)
            }
        }
    )
)
