(function(){
    'use strict';

    angular.module('app')
        .config(routerConfig);

    routerConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

    function routerConfig($stateProvider, $urlRouterProvider) {

             $stateProvider

            .state('tab', {
                url: '/tab',
                abstract: true,
                templateUrl: 'templates/tabs.html'
              })

              .state('tab.dash', {
                url: '/dash',
                views: {
                  'tab-dash': {
                    templateUrl: 'templates/tab-dash.html',
                    controller: 'DashController'
                  }
                }
              })

              .state('tab.chats', {
                  url: '/chats',
                  views: {
                    'tab-chats': {
                      templateUrl: 'templates/tab-chats.html',
                      controller: 'ChatController',
                      controllerAs: 'vm'
                    }
                  }
                })
                .state('tab.chat-detail', {
                  url: '/chats/:chatId',
                  views: {
                    'tab-chats': {
                      templateUrl: 'templates/chat-detail.html',
                      controller: 'ChatDetailController',
                      controllerAs: 'vm'
                    }
                  }
                })

              .state('tab.account', {
                url: '/account',
                views: {
                  'tab-account': {
                    templateUrl: 'templates/tab-account.html',
                    controller: 'AccountController',
                    controllerAs: 'vm'
                  }
                }
              });

              // if none of the above states are matched, use this as the fallback
              $urlRouterProvider.otherwise('/tab/dash');

        }

})();
