/**
 * Copyright 2018 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// If the loader is already loaded, just stop.
if (!self.define) {
  const singleRequire = name => {
    if (name !== 'require') {
      name = name + '.js';
    }
    let promise = Promise.resolve();
    if (!registry[name]) {
      
        promise = new Promise(async resolve => {
          if ("document" in self) {
            const script = document.createElement("script");
            script.src = name;
            document.head.appendChild(script);
            script.onload = resolve;
          } else {
            importScripts(name);
            resolve();
          }
        });
      
    }
    return promise.then(() => {
      if (!registry[name]) {
        throw new Error(`Module ${name} didn’t register its module`);
      }
      return registry[name];
    });
  };

  const require = (names, resolve) => {
    Promise.all(names.map(singleRequire))
      .then(modules => resolve(modules.length === 1 ? modules[0] : modules));
  };
  
  const registry = {
    require: Promise.resolve(require)
  };

  self.define = (moduleName, depsNames, factory) => {
    if (registry[moduleName]) {
      // Module is already loading or loaded.
      return;
    }
    registry[moduleName] = Promise.resolve().then(() => {
      let exports = {};
      const module = {
        uri: location.origin + moduleName.slice(1)
      };
      return Promise.all(
        depsNames.map(depName => {
          switch(depName) {
            case "exports":
              return exports;
            case "module":
              return module;
            default:
              return singleRequire(depName);
          }
        })
      ).then(deps => {
        const facValue = factory(...deps);
        if(!exports.default) {
          exports.default = facValue;
        }
        return exports;
      });
    });
  };
}
define("./service-worker.js",['./workbox-c49a797c'], function (workbox) { 'use strict';

  /**
  * Welcome to your Workbox-powered service worker!
  *
  * You'll need to register this file in your web app.
  * See https://goo.gl/nhQhGp
  *
  * The rest of the code is auto-generated. Please don't update this file
  * directly; instead, make changes to your Workbox build configuration
  * and re-run your build process.
  * See https://goo.gl/2aRDsh
  */

  self.skipWaiting();
  workbox.clientsClaim();
  /**
   * The precacheAndRoute() method efficiently caches and responds to
   * requests for URLs in the manifest.
   * See https://goo.gl/S9QRab
   */

  workbox.precacheAndRoute([{
    "url": "src_pages_CategoryDetailPage_jsx.js",
    "revision": "999cdff1d64b42a134fad1c07f76c492"
  }, {
    "url": "src_pages_CategoryListPage_jsx.js",
    "revision": "8ed0850a6f53467cad54b7c9b45448d8"
  }, {
    "url": "src_pages_DashboardPage_jsx.js",
    "revision": "0808fa469216be7dbb6e09b8af930439"
  }, {
    "url": "src_pages_FormCategoryPage_jsx.js",
    "revision": "9cae60117fb4fcc67cd18a4339b0cf33"
  }, {
    "url": "src_pages_FormProductPage_jsx.js",
    "revision": "56b30c3830897323218bba13ef7b7a14"
  }, {
    "url": "src_pages_LoginPage_jsx.js",
    "revision": "2331079603d0a8ab55d2fc7d34602f42"
  }, {
    "url": "src_pages_ProductDetailPage_jsx.js",
    "revision": "c37d7d2c359d12ca988c8f5bf1225966"
  }, {
    "url": "src_pages_ProductListPage_jsx.js",
    "revision": "8a747db7531003eecc8e4c4a582488a3"
  }, {
    "url": "src_pages_ProfilePage_jsx.js",
    "revision": "9cd20373f683ce552e1a3ab97090ac93"
  }, {
    "url": "vendors-node_modules_antd_es_descriptions_index_js-node_modules_dayjs_dayjs_min_js.js",
    "revision": "255b46995d0918b27ba66cdf91691b61"
  }, {
    "url": "vendors-node_modules_antd_es_form_index_js-node_modules_antd_es_input_index_js.js",
    "revision": "4f3bcbbcc09e7f464a378e55a782fcf8"
  }, {
    "url": "vendors-node_modules_antd_es_image_index_js.js",
    "revision": "9cbd81e13c7dfe46efc11ce86f354624"
  }, {
    "url": "vendors-node_modules_antd_es_skeleton_index_js.js",
    "revision": "2566f691b5c5f960cf318f1c6b8290c6"
  }, {
    "url": "vendors-node_modules_antd_es_statistic_index_js.js",
    "revision": "515e0fc5907dab07a0b47d534b0a4e69"
  }, {
    "url": "vendors-node_modules_nanoid_index_dev_js-node_modules_qs_lib_index_js.js",
    "revision": "566a0487649b0891d87b72b84cd5793f"
  }, {
    "url": "vendors-node_modules_react-helmet_es_Helmet_js.js",
    "revision": "10fcc191635887ff07a9d5de5f47320d"
  }], {});

});
