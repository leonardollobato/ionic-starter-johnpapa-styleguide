(function(){
    'use strict';

    angular.module('app')
        .controller('DashController', DashController);

    DashController.$inject = ['Transacoes'];

    function DashController(Transacoes){
        console.log(Transacoes.all());
    }
})();
