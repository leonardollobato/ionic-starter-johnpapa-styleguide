
(function(){
   'use strict';

   angular.module('starter')
        .controller('ChatDetailController', ChatDetailController);

   ChatDetailController.$inject = ['$stateParams', 'Chats'];

   function ChatDetailController($stateParams, Chats){
        var vm = this;
        vm.chat = Chats.get($stateParams.chatId);
   }
})();
