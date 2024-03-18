(function () {


    angular.module('MenuApp')
            .controller('itemsController', itemsController);
    itemsController.$inject=['listItem'];
     function itemsController(listItem) {
        var $ctrl = this;

       
        $ctrl.listItems = listItem;
        $ctrl.getList= function (){
            return $ctrl.listItems;
        };
       

        
     } 
            
        

})();