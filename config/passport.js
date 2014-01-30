var LocalStrategy = require('passport-local').Strategy
    , TwitterStrategy = require('passport-twitter').Strategy
    , FacebookStrategy = require('passport-facebook').Strategy
    , GitHubStrategy = require('passport-github').Strategy
    , GoogleStrategy = require('passport-google-oauth').OAuth2Strategy
    , LinkedinStrategy = require('passport-linkedin').Strategy
    , user = ''


module.exports = function (passport, config) {
    // require('./initializer')

    // serialize sessions
    passport.serializeUser(function (user, done) {
        done(null, user);
    });

    passport.deserializeUser(function (obj, done) {
        done(null, obj);
    });

    // use local strategy
    passport.use(new LocalStrategy({
            usernameField: 'email',
            passwordField: 'password'
        },
        function (email, password, done) {
            User.findOne({ email: email }, function (err, user) {
                if (err) {
                    return done(err)
                }
                if (!user) {
                    return done(null, false, { message: 'Unknown user' })
                }
                if (!user.authenticate(password)) {
                    return done(null, false, { message: 'Invalid password' })
                }
                return done(null, user)
            })
        }
    ))

    // use twitter strategy
    passport.use(new TwitterStrategy({
            consumerKey: config.twitter.clientID,
            consumerSecret: config.twitter.clientSecret,
            callbackURL: config.twitter.callbackURL
        },
        function (token, tokenSecret, profile, done) {
            return done(null, profile)
        }
    ))

    // use facebook strategy
    passport.use(new FacebookStrategy({
            clientID: config.facebook.clientID,
            clientSecret: config.facebook.clientSecret,
            callbackURL: config.facebook.callbackURL
        },
        function (accessToken, refreshToken, profile, done) {
            return done(null, profile);
        }
    ))

    // use github strategy
    passport.use(new GitHubStrategy({
            clientID: config.github.clientID,
            clientSecret: config.github.clientSecret,
            callbackURL: config.github.callbackURL
        },
        function (accessToken, refreshToken, profile, done) {
            return done(null, profile);
        }
    ))

    // use google strategy
    passport.use(new GoogleStrategy({
            clientID: config.google.clientID,
            clientSecret: config.google.clientSecret,

            callbackURL: config.google.callbackURL
        },
        function (accessToken, refreshToken, profile, done) {
            return done(null, profile);
        }
    ));

    // use linkedin strategy
    passport.use(new LinkedinStrategy({
            consumerKey: config.linkedin.clientID,
            consumerSecret: config.linkedin.clientSecret,
            callbackURL: config.linkedin.callbackURL,
            profileFields: ['id', 'first-name', 'last-name', 'email-address']
        },
        function (accessToken, refreshToken, profile, done) {
            return done(null, profile);
        }
    ));
}
