'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

customElements.define('compodoc-menu', /*#__PURE__*/function (_HTMLElement) {
  _inherits(_class, _HTMLElement);

  var _super = _createSuper(_class);

  function _class() {
    var _this;

    _classCallCheck(this, _class);

    _this = _super.call(this);
    _this.isNormalMode = _this.getAttribute('mode') === 'normal';
    return _this;
  }

  _createClass(_class, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.render(this.isNormalMode);
    }
  }, {
    key: "render",
    value: function render(isNormalMode) {
      var tp = lithtml.html("\n        <nav>\n            <ul class=\"list\">\n                <li class=\"title\">\n                    <a href=\"index.html\" data-type=\"index-link\">log_pipeline documentation</a>\n                </li>\n\n                <li class=\"divider\"></li>\n                ".concat(isNormalMode ? "<div id=\"book-search-input\" role=\"search\"><input type=\"text\" placeholder=\"Type to search\"></div>" : '', "\n                <li class=\"chapter\">\n                    <a data-type=\"chapter-link\" href=\"index.html\"><span class=\"icon ion-ios-home\"></span>Getting started</a>\n                    <ul class=\"links\">\n                        <li class=\"link\">\n                            <a href=\"overview.html\" data-type=\"chapter-link\">\n                                <span class=\"icon ion-ios-keypad\"></span>Overview\n                            </a>\n                        </li>\n                        <li class=\"link\">\n                            <a href=\"index.html\" data-type=\"chapter-link\">\n                                <span class=\"icon ion-ios-paper\"></span>README\n                            </a>\n                        </li>\n                                <li class=\"link\">\n                                    <a href=\"dependencies.html\" data-type=\"chapter-link\">\n                                        <span class=\"icon ion-ios-list\"></span>Dependencies\n                                    </a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"properties.html\" data-type=\"chapter-link\">\n                                        <span class=\"icon ion-ios-apps\"></span>Properties\n                                    </a>\n                                </li>\n                    </ul>\n                </li>\n                    <li class=\"chapter modules\">\n                        <a data-type=\"chapter-link\" href=\"modules.html\">\n                            <div class=\"menu-toggler linked\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#modules-links"' : 'data-target="#xs-modules-links"', ">\n                                <span class=\"icon ion-ios-archive\"></span>\n                                <span class=\"link-name\">Modules</span>\n                                <span class=\"icon ion-ios-arrow-down\"></span>\n                            </div>\n                        </a>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"', ">\n                            <li class=\"link\">\n                                <a href=\"modules/AppConfigModule.html\" data-type=\"entity-link\" >AppConfigModule</a>\n                                <li class=\"chapter inner\">\n                                    <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#injectables-links-module-AppConfigModule-1a116b3304309acb7df4b9df5b09d3bddd5eff7b8dec85759812fb9c832ce6a23bc5e65ada0d0cf541d0e8623212b9ff9ed67062c1fb88bbda36470fb2afef8b"' : 'data-target="#xs-injectables-links-module-AppConfigModule-1a116b3304309acb7df4b9df5b09d3bddd5eff7b8dec85759812fb9c832ce6a23bc5e65ada0d0cf541d0e8623212b9ff9ed67062c1fb88bbda36470fb2afef8b"', ">\n                                        <span class=\"icon ion-md-arrow-round-down\"></span>\n                                        <span>Injectables</span>\n                                        <span class=\"icon ion-ios-arrow-down\"></span>\n                                    </div>\n                                    <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="injectables-links-module-AppConfigModule-1a116b3304309acb7df4b9df5b09d3bddd5eff7b8dec85759812fb9c832ce6a23bc5e65ada0d0cf541d0e8623212b9ff9ed67062c1fb88bbda36470fb2afef8b"' : 'id="xs-injectables-links-module-AppConfigModule-1a116b3304309acb7df4b9df5b09d3bddd5eff7b8dec85759812fb9c832ce6a23bc5e65ada0d0cf541d0e8623212b9ff9ed67062c1fb88bbda36470fb2afef8b"', ">\n                                        <li class=\"link\">\n                                            <a href=\"injectables/AppConfigService.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >AppConfigService</a>\n                                        </li>\n                                    </ul>\n                                </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/AppModule.html\" data-type=\"entity-link\" >AppModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#controllers-links-module-AppModule-3a1754780f8adeef6ee2b262eb81e1e1e35b9a63b8ef639a86ea8aba79d90cef5b2a5d8cd925de2396a6bdf916466f679c49e6f1f93e200c968adb9a7c96af4e"' : 'data-target="#xs-controllers-links-module-AppModule-3a1754780f8adeef6ee2b262eb81e1e1e35b9a63b8ef639a86ea8aba79d90cef5b2a5d8cd925de2396a6bdf916466f679c49e6f1f93e200c968adb9a7c96af4e"', ">\n                                            <span class=\"icon ion-md-swap\"></span>\n                                            <span>Controllers</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="controllers-links-module-AppModule-3a1754780f8adeef6ee2b262eb81e1e1e35b9a63b8ef639a86ea8aba79d90cef5b2a5d8cd925de2396a6bdf916466f679c49e6f1f93e200c968adb9a7c96af4e"' : 'id="xs-controllers-links-module-AppModule-3a1754780f8adeef6ee2b262eb81e1e1e35b9a63b8ef639a86ea8aba79d90cef5b2a5d8cd925de2396a6bdf916466f679c49e6f1f93e200c968adb9a7c96af4e"', ">\n                                            <li class=\"link\">\n                                                <a href=\"controllers/AppController.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >AppController</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                                <li class=\"chapter inner\">\n                                    <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#injectables-links-module-AppModule-3a1754780f8adeef6ee2b262eb81e1e1e35b9a63b8ef639a86ea8aba79d90cef5b2a5d8cd925de2396a6bdf916466f679c49e6f1f93e200c968adb9a7c96af4e"' : 'data-target="#xs-injectables-links-module-AppModule-3a1754780f8adeef6ee2b262eb81e1e1e35b9a63b8ef639a86ea8aba79d90cef5b2a5d8cd925de2396a6bdf916466f679c49e6f1f93e200c968adb9a7c96af4e"', ">\n                                        <span class=\"icon ion-md-arrow-round-down\"></span>\n                                        <span>Injectables</span>\n                                        <span class=\"icon ion-ios-arrow-down\"></span>\n                                    </div>\n                                    <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="injectables-links-module-AppModule-3a1754780f8adeef6ee2b262eb81e1e1e35b9a63b8ef639a86ea8aba79d90cef5b2a5d8cd925de2396a6bdf916466f679c49e6f1f93e200c968adb9a7c96af4e"' : 'id="xs-injectables-links-module-AppModule-3a1754780f8adeef6ee2b262eb81e1e1e35b9a63b8ef639a86ea8aba79d90cef5b2a5d8cd925de2396a6bdf916466f679c49e6f1f93e200c968adb9a7c96af4e"', ">\n                                        <li class=\"link\">\n                                            <a href=\"injectables/AppService.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >AppService</a>\n                                        </li>\n                                    </ul>\n                                </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/DbModule.html\" data-type=\"entity-link\" >DbModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/KafkaClientModule.html\" data-type=\"entity-link\" >KafkaClientModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/KafkaConsumerModule.html\" data-type=\"entity-link\" >KafkaConsumerModule</a>\n                                <li class=\"chapter inner\">\n                                    <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#injectables-links-module-KafkaConsumerModule-6f74e43da40e79ce2aaabb01ba036f4912add6a34eab59caab82a07070dd8f8300f63f992c8ec0f2ac3b3f80f1ef5992b9f8c3496883bce287dde4370953825e"' : 'data-target="#xs-injectables-links-module-KafkaConsumerModule-6f74e43da40e79ce2aaabb01ba036f4912add6a34eab59caab82a07070dd8f8300f63f992c8ec0f2ac3b3f80f1ef5992b9f8c3496883bce287dde4370953825e"', ">\n                                        <span class=\"icon ion-md-arrow-round-down\"></span>\n                                        <span>Injectables</span>\n                                        <span class=\"icon ion-ios-arrow-down\"></span>\n                                    </div>\n                                    <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="injectables-links-module-KafkaConsumerModule-6f74e43da40e79ce2aaabb01ba036f4912add6a34eab59caab82a07070dd8f8300f63f992c8ec0f2ac3b3f80f1ef5992b9f8c3496883bce287dde4370953825e"' : 'id="xs-injectables-links-module-KafkaConsumerModule-6f74e43da40e79ce2aaabb01ba036f4912add6a34eab59caab82a07070dd8f8300f63f992c8ec0f2ac3b3f80f1ef5992b9f8c3496883bce287dde4370953825e"', ">\n                                        <li class=\"link\">\n                                            <a href=\"injectables/KafkaConsumerService.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >KafkaConsumerService</a>\n                                        </li>\n                                    </ul>\n                                </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/KafkaProducerModule.html\" data-type=\"entity-link\" >KafkaProducerModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#controllers-links-module-KafkaProducerModule-cf95dd59c496495ac4a312ab21bbb26a5f873d390a1b5d6f789573c1b6555ce711f3ec44fd68d1efdcaa15da78c97f44db663feade092bcb36cc7383e8b63c46"' : 'data-target="#xs-controllers-links-module-KafkaProducerModule-cf95dd59c496495ac4a312ab21bbb26a5f873d390a1b5d6f789573c1b6555ce711f3ec44fd68d1efdcaa15da78c97f44db663feade092bcb36cc7383e8b63c46"', ">\n                                            <span class=\"icon ion-md-swap\"></span>\n                                            <span>Controllers</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="controllers-links-module-KafkaProducerModule-cf95dd59c496495ac4a312ab21bbb26a5f873d390a1b5d6f789573c1b6555ce711f3ec44fd68d1efdcaa15da78c97f44db663feade092bcb36cc7383e8b63c46"' : 'id="xs-controllers-links-module-KafkaProducerModule-cf95dd59c496495ac4a312ab21bbb26a5f873d390a1b5d6f789573c1b6555ce711f3ec44fd68d1efdcaa15da78c97f44db663feade092bcb36cc7383e8b63c46"', ">\n                                            <li class=\"link\">\n                                                <a href=\"controllers/KafkaProducerController.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >KafkaProducerController</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                                <li class=\"chapter inner\">\n                                    <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#injectables-links-module-KafkaProducerModule-cf95dd59c496495ac4a312ab21bbb26a5f873d390a1b5d6f789573c1b6555ce711f3ec44fd68d1efdcaa15da78c97f44db663feade092bcb36cc7383e8b63c46"' : 'data-target="#xs-injectables-links-module-KafkaProducerModule-cf95dd59c496495ac4a312ab21bbb26a5f873d390a1b5d6f789573c1b6555ce711f3ec44fd68d1efdcaa15da78c97f44db663feade092bcb36cc7383e8b63c46"', ">\n                                        <span class=\"icon ion-md-arrow-round-down\"></span>\n                                        <span>Injectables</span>\n                                        <span class=\"icon ion-ios-arrow-down\"></span>\n                                    </div>\n                                    <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="injectables-links-module-KafkaProducerModule-cf95dd59c496495ac4a312ab21bbb26a5f873d390a1b5d6f789573c1b6555ce711f3ec44fd68d1efdcaa15da78c97f44db663feade092bcb36cc7383e8b63c46"' : 'id="xs-injectables-links-module-KafkaProducerModule-cf95dd59c496495ac4a312ab21bbb26a5f873d390a1b5d6f789573c1b6555ce711f3ec44fd68d1efdcaa15da78c97f44db663feade092bcb36cc7383e8b63c46"', ">\n                                        <li class=\"link\">\n                                            <a href=\"injectables/KafkaProducerService.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >KafkaProducerService</a>\n                                        </li>\n                                    </ul>\n                                </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/LogsModule.html\" data-type=\"entity-link\" >LogsModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#controllers-links-module-LogsModule-b1be81042f2b83568e325c4741a570669300a424d773c6f8811921ba13f7c7ad674598144844fbf1b199ed9beff22830a41f8ebf33438b0d7c610b949378078f"' : 'data-target="#xs-controllers-links-module-LogsModule-b1be81042f2b83568e325c4741a570669300a424d773c6f8811921ba13f7c7ad674598144844fbf1b199ed9beff22830a41f8ebf33438b0d7c610b949378078f"', ">\n                                            <span class=\"icon ion-md-swap\"></span>\n                                            <span>Controllers</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="controllers-links-module-LogsModule-b1be81042f2b83568e325c4741a570669300a424d773c6f8811921ba13f7c7ad674598144844fbf1b199ed9beff22830a41f8ebf33438b0d7c610b949378078f"' : 'id="xs-controllers-links-module-LogsModule-b1be81042f2b83568e325c4741a570669300a424d773c6f8811921ba13f7c7ad674598144844fbf1b199ed9beff22830a41f8ebf33438b0d7c610b949378078f"', ">\n                                            <li class=\"link\">\n                                                <a href=\"controllers/LogsController.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >LogsController</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                                <li class=\"chapter inner\">\n                                    <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#injectables-links-module-LogsModule-b1be81042f2b83568e325c4741a570669300a424d773c6f8811921ba13f7c7ad674598144844fbf1b199ed9beff22830a41f8ebf33438b0d7c610b949378078f"' : 'data-target="#xs-injectables-links-module-LogsModule-b1be81042f2b83568e325c4741a570669300a424d773c6f8811921ba13f7c7ad674598144844fbf1b199ed9beff22830a41f8ebf33438b0d7c610b949378078f"', ">\n                                        <span class=\"icon ion-md-arrow-round-down\"></span>\n                                        <span>Injectables</span>\n                                        <span class=\"icon ion-ios-arrow-down\"></span>\n                                    </div>\n                                    <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="injectables-links-module-LogsModule-b1be81042f2b83568e325c4741a570669300a424d773c6f8811921ba13f7c7ad674598144844fbf1b199ed9beff22830a41f8ebf33438b0d7c610b949378078f"' : 'id="xs-injectables-links-module-LogsModule-b1be81042f2b83568e325c4741a570669300a424d773c6f8811921ba13f7c7ad674598144844fbf1b199ed9beff22830a41f8ebf33438b0d7c610b949378078f"', ">\n                                        <li class=\"link\">\n                                            <a href=\"injectables/LogProvider.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >LogProvider</a>\n                                        </li>\n                                        <li class=\"link\">\n                                            <a href=\"injectables/LogsService.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >LogsService</a>\n                                        </li>\n                                    </ul>\n                                </li>\n                            </li>\n                </ul>\n                </li>\n                        <li class=\"chapter\">\n                            <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#controllers-links"' : 'data-target="#xs-controllers-links"', ">\n                                <span class=\"icon ion-md-swap\"></span>\n                                <span>Controllers</span>\n                                <span class=\"icon ion-ios-arrow-down\"></span>\n                            </div>\n                            <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"', ">\n                                <li class=\"link\">\n                                    <a href=\"controllers/AppController.html\" data-type=\"entity-link\" >AppController</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"controllers/KafkaProducerController.html\" data-type=\"entity-link\" >KafkaProducerController</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"controllers/LogsController.html\" data-type=\"entity-link\" >LogsController</a>\n                                </li>\n                            </ul>\n                        </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#classes-links"' : 'data-target="#xs-classes-links"', ">\n                            <span class=\"icon ion-ios-paper\"></span>\n                            <span>Classes</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"', ">\n                            <li class=\"link\">\n                                <a href=\"classes/HttpExceptionFilter.html\" data-type=\"entity-link\" >HttpExceptionFilter</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/LogDto.html\" data-type=\"entity-link\" >LogDto</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/SendLogRequestDto.html\" data-type=\"entity-link\" >SendLogRequestDto</a>\n                            </li>\n                        </ul>\n                    </li>\n                        <li class=\"chapter\">\n                            <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#injectables-links"' : 'data-target="#xs-injectables-links"', ">\n                                <span class=\"icon ion-md-arrow-round-down\"></span>\n                                <span>Injectables</span>\n                                <span class=\"icon ion-ios-arrow-down\"></span>\n                            </div>\n                            <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"', ">\n                                <li class=\"link\">\n                                    <a href=\"injectables/AppConfigService.html\" data-type=\"entity-link\" >AppConfigService</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/AppService.html\" data-type=\"entity-link\" >AppService</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/DbService.html\" data-type=\"entity-link\" >DbService</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/KafkaClientService.html\" data-type=\"entity-link\" >KafkaClientService</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/KafkaConsumerService.html\" data-type=\"entity-link\" >KafkaConsumerService</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/KafkaProducerService.html\" data-type=\"entity-link\" >KafkaProducerService</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/LogProvider.html\" data-type=\"entity-link\" >LogProvider</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/LogsService.html\" data-type=\"entity-link\" >LogsService</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/TimeExecutionInterceptor.html\" data-type=\"entity-link\" >TimeExecutionInterceptor</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/TimeoutInterceptor.html\" data-type=\"entity-link\" >TimeoutInterceptor</a>\n                                </li>\n                            </ul>\n                        </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#interfaces-links"' : 'data-target="#xs-interfaces-links"', ">\n                            <span class=\"icon ion-md-information-circle-outline\"></span>\n                            <span>Interfaces</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"', ">\n                            <li class=\"link\">\n                                <a href=\"interfaces/DbServiceInterface.html\" data-type=\"entity-link\" >DbServiceInterface</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/Entity.html\" data-type=\"entity-link\" >Entity</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/Hit.html\" data-type=\"entity-link\" >Hit</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/Hits.html\" data-type=\"entity-link\" >Hits</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/LogBody.html\" data-type=\"entity-link\" >LogBody</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/LogSearchResult.html\" data-type=\"entity-link\" >LogSearchResult</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/RootObjectSearchResult.html\" data-type=\"entity-link\" >RootObjectSearchResult</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/SearchReturn.html\" data-type=\"entity-link\" >SearchReturn</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/Shards.html\" data-type=\"entity-link\" >Shards</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/Source.html\" data-type=\"entity-link\" >Source</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/Total.html\" data-type=\"entity-link\" >Total</a>\n                            </li>\n                        </ul>\n                    </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#miscellaneous-links"' : 'data-target="#xs-miscellaneous-links"', ">\n                            <span class=\"icon ion-ios-cube\"></span>\n                            <span>Miscellaneous</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"', ">\n                            <li class=\"link\">\n                                <a href=\"miscellaneous/enumerations.html\" data-type=\"entity-link\">Enums</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"miscellaneous/functions.html\" data-type=\"entity-link\">Functions</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"miscellaneous/variables.html\" data-type=\"entity-link\">Variables</a>\n                            </li>\n                        </ul>\n                    </li>\n                    <li class=\"chapter\">\n                        <a data-type=\"chapter-link\" href=\"coverage.html\"><span class=\"icon ion-ios-stats\"></span>Documentation coverage</a>\n                    </li>\n                    <li class=\"divider\"></li>\n                    <li class=\"copyright\">\n                        Documentation generated using <a href=\"https://compodoc.app/\" target=\"_blank\">\n                            <img data-src=\"images/compodoc-vectorise.png\" class=\"img-responsive\" data-type=\"compodoc-logo\">\n                        </a>\n                    </li>\n            </ul>\n        </nav>\n        "));
      this.innerHTML = tp.strings;
    }
  }]);

  return _class;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement)));