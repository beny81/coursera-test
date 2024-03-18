(function () {
    
    angular.module('MenuApp')
        .config(RouteConfig);

    RouteConfig.$inject=['$stateProvider', '$urlRouterProvider'];
    function RouteConfig($stateProvider, $urlRouterProvider) {
        
        $stateProvider

        // home state
            .state('home',{
                url: '/',
                templateUrl:'templates/home.html',

            })

            // categories state
            .state('categories',{
                url: '/categories',
                templateUrl:'templates/categories.html',
                controller: 'CategoriesController as $ctrl',
                resolve:{
                    list:  ['MenuDataService', function (MenuDataService) {
                        return MenuDataService.getAllCategories();
                        
                        
                    }]
                }

            })

            // items state
            .state('item',{
                url: '/categories/{name}-{item}',
                templateUrl:'templates/item.html',
                controller: 'itemsController as $ctrl',
                resolve:{
                    listItem:  ['$stateParams','MenuDataService', function ($stateParams, MenuDataService) {
                        return MenuDataService.getItemsForCategory($stateParams.item);
                        
                        
                    }]
                }

            });

            // Default route to view the menu
            $urlRouterProvider
                .otherwise('/');                
    }            

})();