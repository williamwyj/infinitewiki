"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = void 0;
const register = (app) => {
    const oidc = app.locals.oidc;
    app.get('/', (req, res) => {
        const user = req.userContext ? req.userContext.userinfo : null;
        let displayString;
        if (user) {
            displayString = `Hello! User logged in? ${req.isAuthenticated()}, user is ${user.name}`;
        }
        else {
            displayString = `Hello! User logged in? ${req.isAuthenticated()}`;
        }
        res.send(displayString);
    });
    app.get('/login', oidc.ensureAuthenticated(), (req, res) => {
        res.redirect('/content');
    });
    app.get('/logout', (req, res) => {
        req.logout();
        res.redirect('/');
    });
    app.get("/content", oidc.ensureAuthenticated(), (req, res) => {
        const user = req.userContext ? req.userContext.userinfo : null;
        let displayString;
        if (user) {
            displayString = `Content! User logged in? ${req.isAuthenticated()}, user is ${user.name}`;
        }
        else {
            displayString = `Content! User logged in? ${req.isAuthenticated()}`;
        }
        res.send(displayString);
    });
};
exports.register = register;
//# sourceMappingURL=index.js.map