/**
 *  * @description directive for sweet alert 
    * @author Tushar Borole
    * @createDate 18/04/2015
    * @version 1.0.3
    * @lastmodifiedDate 06/18/2015
    */



(function () {
    'use strict';
    
    
    // Check we have sweet alert js included
    if (angular.isUndefined(window.swal)) {
        throw "Please inlcude sweet alert js and css from http://t4t5.github.io/sweetalert/";
    }

    var ngApp = angular.module('ngSweetAlertFull',[]);
    
    ngApp.directive('sweetAlertTag', sweetAlertTag);
    ngApp.factory('SweetAlert',sweetAlertWrapper);


    sweetAlertTag.$inject = ['$parse'];

    /* @ngInject */
    function sweetAlertTag($parse) {
        // Usage:
        //
        // Creates:
        //
        var directive = {
            link: link
        };
        return directive;

        function link(scope, element, attrs, controller) {

            var sweetElement = angular.element(element);

            sweetElement.click(function () {
                var sweetOptions = scope.$eval(attrs.sweetOptions);
                var sweetConfirmOption = scope.$eval(attrs.sweetConfirmOption);
                var sweetCancelOption = scope.$eval(attrs.sweetCancelOption);


                swal(
                    sweetOptions,
                    function (isConfirm) {
                        if (isConfirm) {
                            if (sweetConfirmOption) swal(sweetConfirmOption);
                            if (attrs.sweetOnConfirm) scope.$evalAsync(attrs.sweetOnConfirm);
                               sweetElement.trigger("click");
                        } else {
                            if (sweetCancelOption) swal(sweetCancelOption);
                            if (attrs.sweetOnCancel) scope.$evalAsync(attrs.sweetOnCancel);
                        }
                    }
                );

            });

        }
    }

    sweetAlertWrapper.$inject = ['$rootScope'];
    function sweetAlertWrapper($rootScope) {

        var factory = {
            swal: window.swal,
            self: {
                swal: swalFunction,
                success: successFunction,
                error: errorFunction,
                warning: warningFunction,
                info: infoFunction,
                showInputError: showInputErrorFunction,
                close: closeFunction
            }
        };
        return factory.self;

        function swalFunction( arg1, arg2, arg3 ) {
            $rootScope.$evalAsync(function(){
                if( typeof(arg2) === 'function' ) {
                    swal( arg1, function(isConfirm){
                        $rootScope.$evalAsync( function(){
                            arg2(isConfirm);
                        });
                    }, arg3 );
                } else {
                    swal( arg1, arg2, arg3 );
                }
            });
        }

        function successFunction(title, message) {
            $rootScope.$evalAsync(function(){
                swal( title, message, 'success' );
            });
        }

        function errorFunction(title, message) {
            $rootScope.$evalAsync(function(){
                swal( title, message, 'error' );
            });
        }

        function warningFunction(title, message) {
            $rootScope.$evalAsync(function(){
                swal( title, message, 'warning' );
            });
        }

        function infoFunction(title, message) {
            $rootScope.$evalAsync(function(){
                swal( title, message, 'info' );
            });
        }

        function showInputErrorFunction(message) {
            $rootScope.$evalAsync(function(){
              swal.showInputError( message );
            });
        }

        function closeFunction() {
            $rootScope.$evalAsync(function(){
                swal.close();
            });
        }
    }

})();
