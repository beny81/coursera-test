(function () {


    angular.module('MenuApp')
        .controller('CategoriesController',CategoriesController);

    CategoriesController.$inject=['list'];
     function CategoriesController(list) {
        var $ctrl = this;


            $ctrl.listCategories = list;
            $ctrl.getList= function (){
                return $ctrl.listCategories;
            };
       

        
     } 
            
        

})();