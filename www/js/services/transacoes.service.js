(function(){
    'use strict';

    angular.module('app')
        .factory('Transacoes', Transacoes);

    Transacoes.$inject = ['$http'];

    function Transacoes($http){
        var filename = 'transaction_mock.json';
        var baseUrl = '../../resources/';
        var fullpath = baseUrl + filename;
        
        var transacoes = {};
        
        function getTransacoes(){
            $http.get(fullpath)
                .then(function(data){
                    transacoes = data;
                    console.log(data);
                }, function(err){
                    console.log(err);
                })
        }

        return {
            all: getTransacoes 
        }
    }
})();

