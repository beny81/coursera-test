(function () {
    angular.module('data')
        .service( 'MenuDataService', MenuDataService);


        MenuDataService.$inject=[ '$http'];
        function MenuDataService($http) {
            var service = this;

            service.getAllCategoriesReponse='';
            service.getItemForCategoriesReponse='';
            // Get all menu Categories from the server
            service.getAllCategories= function() {
                return $http({
                    method: "GET",
                     url:' https://coursera-jhu-default-rtdb.firebaseio.com/categories.json'
                })
                    .then( function successCallback(response){
                        return  service.getAllCategoriesReponse= response.data;
                    })
                    .catch( function errorCallBack(error){
                        console.log("Error in getting categories");
                    })
            };

            service.getAllCategoriesReponseData= function (){
                return  service.getAllCategoriesReponse;
            };
            service.getItemsForCategory= function(categoryShortName) {
                return $http({
                    method: "GET",
                     url:' https://coursera-jhu-default-rtdb.firebaseio.com/menu_items/'+categoryShortName+'.json'
                })
                    .then( function successCallback(response){
                        return service.getItemForCategoriesReponse=response.data;
                    })
                    .catch( function errorCallBack(error){
                        console.log("Error in getting Items for categories");
                    })
                    
                    .finally(   function(){

                    });

            };
            service.getItemForCategoriesReponseData= function (){
                return service.getItemForCategoriesReponse;
            };

        }
})();