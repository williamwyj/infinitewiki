import * as express from 'express';

export const register = (app: express.Application) => {
  const oidc = app.locals.oidc;

  app.get('/', (req: any, res) => {
    const user = req.userContext ? req.userContext.userinfo : null;
    let displayString: string;
    if (user) {
      displayString = `Hello! User logged in? ${req.isAuthenticated()}, user is ${user.name}`
    } else {
      displayString = `Hello! User logged in? ${req.isAuthenticated()}`
    }
    res.send(displayString);

  })

  app.get('/login', oidc.ensureAuthenticated(), (req, res) => {
    res.redirect('/content');
  })

  app.get('/logout', (req: any, res) => {
    req.logout();
    res.redirect('/');
  });

  app.get("/content", oidc.ensureAuthenticated(), (req: any, res) => {
    const user = req.userContext ? req.userContext.userinfo : null;
    let displayString: string;
    if (user) {
      displayString = `Content! User logged in? ${req.isAuthenticated()}, user is ${user.name}`
    } else {
      displayString = `Content! User logged in? ${req.isAuthenticated()}`
    }
    res.send(displayString);
  })
}