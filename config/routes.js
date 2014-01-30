/*!
 * Module dependencies.
 */

module.exports = function (app, passport) {

  app.get('/auth/facebook',
    passport.authenticate('facebook', {
      scope: [ 'email', 'user_about_me'],
      failureRedirect: '/login'
    }),  function (req, res) {         res.redirect('/');     })

  app.get('/auth/facebook/callback',
    passport.authenticate('facebook', {
      failureRedirect: '/login'
    }),  function (req, res) {         res.redirect('/');     })

  app.get('/auth/github',
    passport.authenticate('github', {
      failureRedirect: '/login'
    }),  function (req, res) {         res.redirect('/');     })

  app.get('/auth/github/callback',
    passport.authenticate('github', {
      failureRedirect: '/login'
    }),  function (req, res) {         res.redirect('/');     })

  app.get('/auth/twitter',
    passport.authenticate('twitter', {
      failureRedirect: '/login'
    }),  function (req, res) {         res.redirect('/');     })

  app.get('/auth/twitter/callback',
    passport.authenticate('twitter', {
      failureRedirect: '/login'
    }),  function (req, res) {         res.redirect('/');     })

  app.get('/auth/google',
    passport.authenticate('google', {
      failureRedirect: '/login',
      scope: [
        'https://www.googleapis.com/auth/userinfo.profile',
        'https://www.googleapis.com/auth/userinfo.email'
      ]
    }),  function (req, res) {         res.redirect('/');     })

  app.get('/auth/google/callback',
    passport.authenticate('google', {
      failureRedirect: '/login'
    }),  function (req, res) {         res.redirect('/');     })

  app.get('/auth/linkedin',
    passport.authenticate('linkedin', {
      failureRedirect: '/login',
      scope: [
        'r_emailaddress'
      ]
    }),  function (req, res) {         res.redirect('/');     })

  app.get('/auth/linkedin/callback',
    passport.authenticate('linkedin', {
      failureRedirect: '/login'
    }),  function (req, res) {         res.redirect('/');     })

    app.get('/logout', function (req, res) {
        req.logout();
        res.redirect('/');
    });

    app.get('/', function (req, res) {
        res.render('index', { user: req.user });
    });

    app.get('/index', ensureAuthenticated, function (req, res) {
        res.sendfile('./views/index.html', { user: req.user });
    });

    app.get('/chat', ensureAuthenticated, function (req, res) {
        res.sendfile('./views/ChatApp.html', { user: req.user });
    });

    app.get('/account', ensureAuthenticated, function (req, res) {
        res.render('account', { user: req.user });
    });

    app.get('/login', function (req, res) {
        res.sendfile('./views/login.html', { user: req.user });
    });


// Simple route middleware to ensure user is authenticated.
//   Use this route middleware on any resource that needs to be protected.  If
//   the request is authenticated (typically via a persistent login session),
//   the request will proceed.  Otherwise, the user will be redirected to the
//   login page.
    function ensureAuthenticated(req, res, next) {
        if (req.isAuthenticated()) {
            user = req.user;
            return next();
        }
        res.redirect('/login')
    }

}
