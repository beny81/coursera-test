(function () {


    angular.module('MenuApp')
        .controller('itemsComponentController',itemsComponentController);

        itemsComponentController.$inject=['MenuDataService'];
     function itemsComponentController(MenuDataService) {
        var $ctrl = this;


            // $ctrl.listCategories = CategoriesController.getList();
            $ctrl.listItems = MenuDataService.getItemForCategoriesReponseData();
       

        
     } 
            
        

})();