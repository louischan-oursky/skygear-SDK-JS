'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pool = undefined;

var _settings = require('./settings');

var _url = require('url');

var _pg = require('pg');

var _pg2 = _interopRequireDefault(_pg);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function databaseConfigFromURL(databaseURL) {
  var params = (0, _url.parse)(databaseURL, true);
  var auth = params.auth.split(':');

  var config = {
    user: auth[0],
    password: auth[1],
    host: params.hostname,
    port: params.port,
    database: params.pathname.split('/')[1],
    ssl: params.query.sslmode !== 'disable' || false
  };
  return config;
} /**
   * Copyright 2015 Oursky Ltd.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *     http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */


var config = databaseConfigFromURL(_settings.settings.databaseURL);

/**
 * Database connection pool of the Skygear PostgreSQL database. The
 * database connection is automatically configured by environment variable
 * and is ready to make connection by calling the `connect` function. See
 * node-postgres documentation for usage.
 *
 * @see https://github.com/brianc/node-postgres/wiki
 */
var pool = exports.pool = new _pg2.default.Pool(config);