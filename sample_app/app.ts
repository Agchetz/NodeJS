import Hapi from '@hapi/hapi';
import JwtAuth from 'hapi-auth-jwt2';
import { verify_token } from './services/jwt';
import { myPlugin } from './routes/routes';

require("dotenv").config({ path: ".env" });

const init = async () => {
    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    });

    //mongoos, jwt, hapi plugin
    var mongoose = require('mongoose');
    mongoose.set("strictQuery", true);
    mongoose.connect("mongodb://localhost/restDemo");
    await server.register(JwtAuth);

    await server.register({
        plugin: myPlugin,
        routes: {
            prefix: '/api'
        }
    })
    await server.start();
    console.log("server started by Chethan at", server.info.uri);
    server.auth.strategy('JWT', 'jwt', {
        key: process.env.SECRET_KEY,
        validate: verify_token
    });
    server.auth.default('JWT');
}

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});


init();