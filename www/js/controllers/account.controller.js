(function(){
    'use strict';

    angular.module('starter')
        .controller('AccountController', AccountController);

    AccountController.$inject = [];

    function AccountController(){
        var vm = this;

        vm.settings = {
            enableFriends: true
        }
    }
})();
