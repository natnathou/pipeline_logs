'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">log_pipeline documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppConfigModule.html" data-type="entity-link" >AppConfigModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppConfigModule-1a116b3304309acb7df4b9df5b09d3bddd5eff7b8dec85759812fb9c832ce6a23bc5e65ada0d0cf541d0e8623212b9ff9ed67062c1fb88bbda36470fb2afef8b"' : 'data-target="#xs-injectables-links-module-AppConfigModule-1a116b3304309acb7df4b9df5b09d3bddd5eff7b8dec85759812fb9c832ce6a23bc5e65ada0d0cf541d0e8623212b9ff9ed67062c1fb88bbda36470fb2afef8b"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppConfigModule-1a116b3304309acb7df4b9df5b09d3bddd5eff7b8dec85759812fb9c832ce6a23bc5e65ada0d0cf541d0e8623212b9ff9ed67062c1fb88bbda36470fb2afef8b"' :
                                        'id="xs-injectables-links-module-AppConfigModule-1a116b3304309acb7df4b9df5b09d3bddd5eff7b8dec85759812fb9c832ce6a23bc5e65ada0d0cf541d0e8623212b9ff9ed67062c1fb88bbda36470fb2afef8b"' }>
                                        <li class="link">
                                            <a href="injectables/AppConfigService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppConfigService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AppModule-3a1754780f8adeef6ee2b262eb81e1e1e35b9a63b8ef639a86ea8aba79d90cef5b2a5d8cd925de2396a6bdf916466f679c49e6f1f93e200c968adb9a7c96af4e"' : 'data-target="#xs-controllers-links-module-AppModule-3a1754780f8adeef6ee2b262eb81e1e1e35b9a63b8ef639a86ea8aba79d90cef5b2a5d8cd925de2396a6bdf916466f679c49e6f1f93e200c968adb9a7c96af4e"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-3a1754780f8adeef6ee2b262eb81e1e1e35b9a63b8ef639a86ea8aba79d90cef5b2a5d8cd925de2396a6bdf916466f679c49e6f1f93e200c968adb9a7c96af4e"' :
                                            'id="xs-controllers-links-module-AppModule-3a1754780f8adeef6ee2b262eb81e1e1e35b9a63b8ef639a86ea8aba79d90cef5b2a5d8cd925de2396a6bdf916466f679c49e6f1f93e200c968adb9a7c96af4e"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-3a1754780f8adeef6ee2b262eb81e1e1e35b9a63b8ef639a86ea8aba79d90cef5b2a5d8cd925de2396a6bdf916466f679c49e6f1f93e200c968adb9a7c96af4e"' : 'data-target="#xs-injectables-links-module-AppModule-3a1754780f8adeef6ee2b262eb81e1e1e35b9a63b8ef639a86ea8aba79d90cef5b2a5d8cd925de2396a6bdf916466f679c49e6f1f93e200c968adb9a7c96af4e"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-3a1754780f8adeef6ee2b262eb81e1e1e35b9a63b8ef639a86ea8aba79d90cef5b2a5d8cd925de2396a6bdf916466f679c49e6f1f93e200c968adb9a7c96af4e"' :
                                        'id="xs-injectables-links-module-AppModule-3a1754780f8adeef6ee2b262eb81e1e1e35b9a63b8ef639a86ea8aba79d90cef5b2a5d8cd925de2396a6bdf916466f679c49e6f1f93e200c968adb9a7c96af4e"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/DbModule.html" data-type="entity-link" >DbModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/KafkaClientModule.html" data-type="entity-link" >KafkaClientModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/KafkaConsumerModule.html" data-type="entity-link" >KafkaConsumerModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-KafkaConsumerModule-6f74e43da40e79ce2aaabb01ba036f4912add6a34eab59caab82a07070dd8f8300f63f992c8ec0f2ac3b3f80f1ef5992b9f8c3496883bce287dde4370953825e"' : 'data-target="#xs-injectables-links-module-KafkaConsumerModule-6f74e43da40e79ce2aaabb01ba036f4912add6a34eab59caab82a07070dd8f8300f63f992c8ec0f2ac3b3f80f1ef5992b9f8c3496883bce287dde4370953825e"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-KafkaConsumerModule-6f74e43da40e79ce2aaabb01ba036f4912add6a34eab59caab82a07070dd8f8300f63f992c8ec0f2ac3b3f80f1ef5992b9f8c3496883bce287dde4370953825e"' :
                                        'id="xs-injectables-links-module-KafkaConsumerModule-6f74e43da40e79ce2aaabb01ba036f4912add6a34eab59caab82a07070dd8f8300f63f992c8ec0f2ac3b3f80f1ef5992b9f8c3496883bce287dde4370953825e"' }>
                                        <li class="link">
                                            <a href="injectables/KafkaConsumerService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >KafkaConsumerService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/KafkaProducerModule.html" data-type="entity-link" >KafkaProducerModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-KafkaProducerModule-cf95dd59c496495ac4a312ab21bbb26a5f873d390a1b5d6f789573c1b6555ce711f3ec44fd68d1efdcaa15da78c97f44db663feade092bcb36cc7383e8b63c46"' : 'data-target="#xs-controllers-links-module-KafkaProducerModule-cf95dd59c496495ac4a312ab21bbb26a5f873d390a1b5d6f789573c1b6555ce711f3ec44fd68d1efdcaa15da78c97f44db663feade092bcb36cc7383e8b63c46"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-KafkaProducerModule-cf95dd59c496495ac4a312ab21bbb26a5f873d390a1b5d6f789573c1b6555ce711f3ec44fd68d1efdcaa15da78c97f44db663feade092bcb36cc7383e8b63c46"' :
                                            'id="xs-controllers-links-module-KafkaProducerModule-cf95dd59c496495ac4a312ab21bbb26a5f873d390a1b5d6f789573c1b6555ce711f3ec44fd68d1efdcaa15da78c97f44db663feade092bcb36cc7383e8b63c46"' }>
                                            <li class="link">
                                                <a href="controllers/KafkaProducerController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >KafkaProducerController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-KafkaProducerModule-cf95dd59c496495ac4a312ab21bbb26a5f873d390a1b5d6f789573c1b6555ce711f3ec44fd68d1efdcaa15da78c97f44db663feade092bcb36cc7383e8b63c46"' : 'data-target="#xs-injectables-links-module-KafkaProducerModule-cf95dd59c496495ac4a312ab21bbb26a5f873d390a1b5d6f789573c1b6555ce711f3ec44fd68d1efdcaa15da78c97f44db663feade092bcb36cc7383e8b63c46"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-KafkaProducerModule-cf95dd59c496495ac4a312ab21bbb26a5f873d390a1b5d6f789573c1b6555ce711f3ec44fd68d1efdcaa15da78c97f44db663feade092bcb36cc7383e8b63c46"' :
                                        'id="xs-injectables-links-module-KafkaProducerModule-cf95dd59c496495ac4a312ab21bbb26a5f873d390a1b5d6f789573c1b6555ce711f3ec44fd68d1efdcaa15da78c97f44db663feade092bcb36cc7383e8b63c46"' }>
                                        <li class="link">
                                            <a href="injectables/KafkaProducerService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >KafkaProducerService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/LogsModule.html" data-type="entity-link" >LogsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-LogsModule-b1be81042f2b83568e325c4741a570669300a424d773c6f8811921ba13f7c7ad674598144844fbf1b199ed9beff22830a41f8ebf33438b0d7c610b949378078f"' : 'data-target="#xs-controllers-links-module-LogsModule-b1be81042f2b83568e325c4741a570669300a424d773c6f8811921ba13f7c7ad674598144844fbf1b199ed9beff22830a41f8ebf33438b0d7c610b949378078f"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-LogsModule-b1be81042f2b83568e325c4741a570669300a424d773c6f8811921ba13f7c7ad674598144844fbf1b199ed9beff22830a41f8ebf33438b0d7c610b949378078f"' :
                                            'id="xs-controllers-links-module-LogsModule-b1be81042f2b83568e325c4741a570669300a424d773c6f8811921ba13f7c7ad674598144844fbf1b199ed9beff22830a41f8ebf33438b0d7c610b949378078f"' }>
                                            <li class="link">
                                                <a href="controllers/LogsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LogsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-LogsModule-b1be81042f2b83568e325c4741a570669300a424d773c6f8811921ba13f7c7ad674598144844fbf1b199ed9beff22830a41f8ebf33438b0d7c610b949378078f"' : 'data-target="#xs-injectables-links-module-LogsModule-b1be81042f2b83568e325c4741a570669300a424d773c6f8811921ba13f7c7ad674598144844fbf1b199ed9beff22830a41f8ebf33438b0d7c610b949378078f"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-LogsModule-b1be81042f2b83568e325c4741a570669300a424d773c6f8811921ba13f7c7ad674598144844fbf1b199ed9beff22830a41f8ebf33438b0d7c610b949378078f"' :
                                        'id="xs-injectables-links-module-LogsModule-b1be81042f2b83568e325c4741a570669300a424d773c6f8811921ba13f7c7ad674598144844fbf1b199ed9beff22830a41f8ebf33438b0d7c610b949378078f"' }>
                                        <li class="link">
                                            <a href="injectables/LogProvider.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LogProvider</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/LogsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LogsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#controllers-links"' :
                                'data-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/KafkaProducerController.html" data-type="entity-link" >KafkaProducerController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/LogsController.html" data-type="entity-link" >LogsController</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/HttpExceptionFilter.html" data-type="entity-link" >HttpExceptionFilter</a>
                            </li>
                            <li class="link">
                                <a href="classes/LogDto.html" data-type="entity-link" >LogDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/SendLogRequestDto.html" data-type="entity-link" >SendLogRequestDto</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AppConfigService.html" data-type="entity-link" >AppConfigService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DbService.html" data-type="entity-link" >DbService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/KafkaClientService.html" data-type="entity-link" >KafkaClientService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/KafkaConsumerService.html" data-type="entity-link" >KafkaConsumerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/KafkaProducerService.html" data-type="entity-link" >KafkaProducerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LogProvider.html" data-type="entity-link" >LogProvider</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LogsService.html" data-type="entity-link" >LogsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TimeExecutionInterceptor.html" data-type="entity-link" >TimeExecutionInterceptor</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TimeoutInterceptor.html" data-type="entity-link" >TimeoutInterceptor</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/DbServiceInterface.html" data-type="entity-link" >DbServiceInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Entity.html" data-type="entity-link" >Entity</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Hit.html" data-type="entity-link" >Hit</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Hits.html" data-type="entity-link" >Hits</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/LogBody.html" data-type="entity-link" >LogBody</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/LogSearchResult.html" data-type="entity-link" >LogSearchResult</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/RootObjectSearchResult.html" data-type="entity-link" >RootObjectSearchResult</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SearchReturn.html" data-type="entity-link" >SearchReturn</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Shards.html" data-type="entity-link" >Shards</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Source.html" data-type="entity-link" >Source</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Total.html" data-type="entity-link" >Total</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});