(function () {

    angular.module('Spinner',[])
                .component('spinner',{
                    templateUrl: 'templates/spinner.html',
                    controller: 'spinnerComponentController as $ctrl',
                    bindins: {
                        processing:'<'
                    }
                });

    angular.module('Spinner')
                .controller('spinnerComponentController' , spinnerComponentController);


    spinnerComponentController.$inject=["$rootScope"];
    function spinnerComponentController($rootScope){
        let $ctrl=this;
        $ctrl.processing=false;
        let cancelThis=[];

        $ctrl.$onInit= function () {
          let cancel =$rootScope.$on('$stateChangeStart',
           function(event, toState, toParams, fromState, fromParams, options){
            $ctrl.processing=true;
          });
          cancelThis.push(cancel);

           cancel =$rootScope.$on('$stateChangeSuccess',
           function(event, toState, toParams, fromState, fromParams){
            $ctrl.processing=false;
          });
          cancelThis.push(cancel);

           cancel =$rootScope.$on('$stateChangeError',
           function(event, toState, toParams, fromState, fromParams,error){
            $ctrl.processing=true;
          });
          cancelThis.push(cancel);
        };
        $ctrl.$onDestroy =function(){
            cancelThis.forEach(function(item){
                item();
            });
        };


    }
})();