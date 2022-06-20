"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = void 0;
const oidc_middleware_1 = require("@okta/oidc-middleware");
const express_session_1 = __importDefault(require("express-session"));
const register = (app) => {
    const oidc = new oidc_middleware_1.ExpressOIDC({
        client_id: process.env.OKTA_CLIENT_ID,
        client_secret: process.env.OKTA_CLIENT_SECRET,
        issuer: `${process.env.OKTA_ORG_URL}/oauth2/default`,
        redirect_uri: `${process.env.HOST_URL}/authorization-code/callback`,
        appBaseUrl: `${process.env.HOST_URL}`,
        scope: "openid profile"
    });
    app.use((0, express_session_1.default)({
        resave: true,
        saveUninitialized: false,
        secret: process.env.SESSION_SECRET
    }));
    app.use(oidc.router);
    app.locals.oidc = oidc;
};
exports.register = register;
//# sourceMappingURL=sessionAuth.js.map