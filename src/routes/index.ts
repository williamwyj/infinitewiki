import * as express from 'express';

export const register = (app: express.Application) => {
  const oidc = app.locals.oidc;

  app.get('/', (req: any, res) => {
    res.send('Hello!');
  })

  app.get('/login', oidc.ensureAuthenticated(), (req, res) => {
    res.redirect('/content');
  })

  app.get('/logout', (req: any, res) => {
    req.logout();
    res.redirect('/');
  });

  app.get("/content", oidc.ensureAuthenticated(), (req: any, res) => {
    res.send('Content!')
  })
}