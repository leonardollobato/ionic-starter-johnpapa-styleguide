(function(){
    'use strict';

    angular.module('starter')
        .controller('ChatController', ChatController);

    ChatController.$inject = ['Chats'];

    function ChatController(Chats){
        var vm = this;

        vm.chats = Chats.all();
        vm.remove = function(chat){
            Chats.remove(chat);
        };

    }
})();
