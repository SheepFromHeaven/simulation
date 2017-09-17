const Config = require('webpack-config').Config;
const environment = require('webpack-config').environment;

environment.setAll({
    env: () => process.env.NODE_ENV || 'development'
});

module.exports = new Config().extend('config/webpack.[env].config.js');

