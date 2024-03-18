(function () {


    angular.module('MenuApp')
        .component('items',{
            templateUrl: 'templates/item-list.html',
            controller: 'itemsComponentController as $ctrl',
            bindins:{
                listItems:'<'
            }
        });

            
        

})();