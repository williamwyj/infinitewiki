"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = void 0;
const register = (app) => {
    const oidc = app.locals.oidc;
    app.get('/', (req, res) => {
        res.send('Hello!');
    });
    app.get('/login', oidc.ensureAuthenticated(), (req, res) => {
        res.redirect('/content');
    });
    app.get('/logout', (req, res) => {
        req.logout();
        res.redirect('/');
    });
    app.get("/content", oidc.ensureAuthenticated(), (req, res) => {
        res.send('Content!');
    });
};
exports.register = register;
//# sourceMappingURL=index.js.map