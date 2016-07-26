(function(){
    'use strict';

    angular.module('app')
        .controller('AccountController', AccountController);

    AccountController.$inject = [];

    function AccountController(){
        var vm = this;

        vm.settings = {
            enableFriends: true
        }
    }
})();
