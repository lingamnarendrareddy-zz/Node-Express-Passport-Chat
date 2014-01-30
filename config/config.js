

var path = require('path')
  , rootPath = path.normalize(__dirname + '/..')
  , templatePath = path.normalize(__dirname + '/../app/mailer/templates')
  , notifier = {
      service: 'postmark',
      APN: false,
      email: false, // true
      actions: ['comment'],
      tplPath: templatePath,
      key: 'POSTMARK_KEY',
      parseAppId: 'PARSE_APP_ID',
      parseApiKey: 'PARSE_MASTER_KEY'
    }

module.exports = {
  development: {
    db: 'mongodb://localhost/noobjs_dev',
    root: rootPath,
    notifier: notifier,
    app: {
      name: 'Nodejs Express Mongoose Demo'
    },
    facebook: {
      clientID: "1400762646843468",
      clientSecret: "5b3c56da809c1b2aa9d17a10842737b7",
      callbackURL: "http://lnr.thematisse.org:8080/auth/facebook/callback"
    },
    twitter: {
      clientID: "Gyb8HH4g1FD7UiJdxLAQ",
      clientSecret: "DeOLRXNk4s8pjmGqzKxH0ViIap4XybPv8Ussgbkj8Gg",
      callbackURL: "http://lnr.thematisse.org:8080/auth/twitter/callback"
    },
    github: {
      clientID: '0172bd042621942a8c83',
      clientSecret: 'd9a7c2bbe911f8aad832adc0f971331340399763',
      callbackURL: 'http://lnr.thematisse.org:8080/auth/github/callback'
    },
    google: {
      clientID: "745646532499.apps.googleusercontent.com",
      clientSecret: "irewoH5mvthf5d2pA-Kt8JqY",
      callbackURL: "http://lnr.thematisse.org:8080/auth/google/callback"
    },
    linkedin: {
      clientID: "751dc8fzqjgik6",
      clientSecret: "LGN3sF8WZMGFCN2O",
      callbackURL: "http://lnr.thematisse.org:8080/auth/linkedin/callback"
    }
  },
  test: {
    db: 'mongodb://localhost/noobjs_test',
    root: rootPath,
    notifier: notifier,
    app: {
      name: 'Nodejs Express Mongoose Demo'
    },
    facebook: {
      clientID: "APP_ID",
      clientSecret: "APP_SECRET",
      callbackURL: "http://lnr.thematisse.org:8080/auth/facebook/callback"
    },
    twitter: {
      clientID: "CONSUMER_KEY",
      clientSecret: "CONSUMER_SECRET",
      callbackURL: "http://lnr.thematisse.org:8080/auth/twitter/callback"
    },
    github: {
      clientID: 'APP_ID',
      clientSecret: 'APP_SECRET',
      callbackURL: 'http://lnr.thematisse.org:8080/auth/github/callback'
    },
    google: {
      clientID: "APP_ID",
      clientSecret: "APP_SECRET",
      callbackURL: "http://lnr.thematisse.org:8080/auth/google/callback"
    },
    linkedin: {
      clientID: "CONSUMER_KEY",
      clientSecret: "CONSUMER_SECRET",
      callbackURL: "http://lnr.thematisse.org:8080/auth/linkedin/callback"
    }
  },
  production: {}
}
