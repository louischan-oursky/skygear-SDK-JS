'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _cookieStorage = require('cookie-storage');

var _util = require('./util');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
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
var cookieKeyWhiteList = ['skygear-deviceid', 'skygear-user', 'skygear-accesstoken'];
var store;

var SyncStorageDriver = function () {
  function SyncStorageDriver(syncImpl) {
    _classCallCheck(this, SyncStorageDriver);

    this._syncImpl = syncImpl;
  }

  _createClass(SyncStorageDriver, [{
    key: 'clear',
    value: function clear(callback) {
      return new Promise(function (resolve) {
        this._syncImpl.clear();
        if (callback) {
          callback(null);
        }
        resolve();
      }.bind(this));
    }
  }, {
    key: 'getItem',
    value: function getItem(key, callback) {
      return new Promise(function (resolve) {
        var value = this._syncImpl.getItem(key);
        if (callback) {
          callback(null, value);
        }
        resolve(value);
      }.bind(this));
    }
  }, {
    key: 'setItem',
    value: function setItem(key, value, callback) {
      return new Promise(function (resolve, reject) {
        try {
          this._syncImpl.setItem(key, value);
          if (callback) {
            callback(null);
          }
          resolve();
        } catch (e) {
          if (callback) {
            callback(e);
          }
          reject(e);
        }
      }.bind(this));
    }
  }, {
    key: 'removeItem',
    value: function removeItem(key, callback) {
      return new Promise(function (resolve) {
        this._syncImpl.removeItem(key);
        if (callback) {
          callback(null);
        }
        resolve();
      }.bind(this));
    }
  }, {
    key: 'key',
    value: function key(n, callback) {
      return new Promise(function (resolve) {
        var result = this._syncImpl.key(n);
        if (callback) {
          callback(null, result);
        }
        resolve(result);
      }.bind(this));
    }
  }, {
    key: 'keys',
    value: function keys(callback) {
      return new Promise(function (resolve) {
        var length = this._syncImpl.length;
        var output = [];
        for (var i = 0; i < length; ++i) {
          output.push(this._syncImpl.key(i));
        }
        if (callback) {
          callback(null, output);
        }
        resolve(output);
      }.bind(this));
    }
  }, {
    key: 'length',
    value: function length(callback) {
      return new Promise(function (resolve) {
        var length = this._syncImpl.length;
        if (callback) {
          callback(null, length);
        }
        resolve(length);
      }.bind(this));
    }
  }]);

  return SyncStorageDriver;
}();

var ReactNativeAsyncStorageDriver = function () {
  function ReactNativeAsyncStorageDriver(rnImpl) {
    _classCallCheck(this, ReactNativeAsyncStorageDriver);

    this._rnImpl = rnImpl;
  }

  _createClass(ReactNativeAsyncStorageDriver, [{
    key: 'clear',
    value: function clear(callback) {
      return this._rnImpl.clear(callback);
    }
  }, {
    key: 'getItem',
    value: function getItem(key, callback) {
      return this._rnImpl.getItem(key, callback);
    }
  }, {
    key: 'setItem',
    value: function setItem(key, value, callback) {
      return this._rnImpl.setItem(key, value, callback);
    }
  }, {
    key: 'removeItem',
    value: function removeItem(key, callback) {
      return this._rnImpl.removeItem(key, callback);
    }
  }, {
    key: 'key',
    value: function key(n, callback) {
      return this._rnImpl.getAllKeys().then(function (allKeys) {
        var result = null;
        if (n >= 0 && n < allKeys.length) {
          result = allKeys[n];
        }
        if (callback) {
          callback(null, result);
        }
        return result;
      });
    }
  }, {
    key: 'keys',
    value: function keys(callback) {
      return this._rnImpl.getAllKeys(callback);
    }
  }, {
    key: 'length',
    value: function length(callback) {
      return this._rnImpl.getAllKeys().then(function (allKeys) {
        if (callback) {
          callback(null, allKeys.length);
        }
        return allKeys.length;
      });
    }
  }]);

  return ReactNativeAsyncStorageDriver;
}();

var Store = function () {
  function Store(driver, keyWhiteList) {
    _classCallCheck(this, Store);

    this._driver = driver;
    this.keyWhiteList = keyWhiteList;
  }

  _createClass(Store, [{
    key: 'clear',
    value: function clear(callback) {
      return this._driver.clear(callback);
    }
  }, {
    key: 'getItem',
    value: function getItem(key, callback) {
      return this._driver.getItem(key, callback);
    }
  }, {
    key: 'setItem',
    value: function setItem(key, value, callback) {
      if (this.keyWhiteList && this.keyWhiteList.indexOf(key) < 0) {
        return Promise.reject(new Error('Saving key is not permitted'));
      }
      return this._driver.setItem(key, value, callback);
    }
  }, {
    key: 'removeItem',
    value: function removeItem(key, callback) {
      return this._driver.removeItem(key, callback);
    }
  }, {
    key: 'key',
    value: function key(n, callback) {
      return this._driver.key(n, callback);
    }
  }, {
    key: 'keys',
    value: function keys(callback) {
      return this._driver.keys(callback);
    }
  }, {
    key: 'length',
    value: function length(callback) {
      return this._driver.length(callback);
    }
  }]);

  return Store;
}();

/* global window: false */


if (typeof window !== 'undefined') {
  // env: browser-like
  var rn = require('react-native');
  if (rn && rn.AsyncStorage) {
    // env: ReactNative
    store = new Store(new ReactNativeAsyncStorageDriver(rn.AsyncStorage));
  } else if ((0, _util.isLocalStorageValid)()) {
    // env: Modern browsers
    store = new Store(new SyncStorageDriver(window.localStorage));
  } else {
    // env: Legacy browsers
    var cookieImpl = new _cookieStorage.CookieStorage();
    store = new Store(new SyncStorageDriver(cookieImpl, cookieKeyWhiteList));
  }
} else {
  // env: node
  var memoryImpl = require('localstorage-memory');
  store = new Store(new SyncStorageDriver(memoryImpl));
}

exports.default = store;
module.exports = exports['default'];