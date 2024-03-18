(function () {


    angular.module('MenuApp')
        .controller('ComponentController',ComponentController);

        ComponentController.$inject=['MenuDataService'];
     function ComponentController(MenuDataService) {
        var $ctrl = this;


            // $ctrl.listCategories = CategoriesController.getList();
            $ctrl.listCategories = MenuDataService.getAllCategoriesReponseData();
       

        
     } 
            
        

})();