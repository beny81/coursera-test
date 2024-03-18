(function () {

    angular.module('MenuApp')
        .component('categories',{
            templateUrl: 'templates/category-list.html',
            controller: 'ComponentController as $ctrl',
            bindins:{
                listCategories:'<'
            }
        });

})();