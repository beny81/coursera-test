(function (){
    "use strict";

    angular.module('NarrowItDownApp',[])
            .service('MenuSearchService', MenuSearchService)
            .controller('NarrowItDownController', Controller)
            .directive( 'foundItems', FoundItemsDirective);
    


          
    Controller.$inject=['MenuSearchService'];
    function Controller (MenuSearchService){
        let list = this;

        list.answer="";
        // Functions
            list.searchTerm= function(){
                        list.found=[];
                        list.answer2=list.answer;
                MenuSearchService.getMatchedMenuItems(list.answer.toLowerCase())
                    .then(function(foundItems) {
                        list.found = foundItems;
                    });
            };
            list.onRemove = function(index){

                list.found.splice(index, 1);
            };








    }

    function FoundItemsDirective (){
        let ddo={
            templateUrl: 'liste.html',
            scope:{
                found: "<",
                onRemove:"&",
                answer:'<'
            },
            controller: Controller,
            controllerAs:"list",
            bindToController: true
        };



        return ddo;
    } 

    MenuSearchService.$inject=["$http"];
    function MenuSearchService ($http){
        // private variables and methods here
        let service=this;


        service.getMatchedMenuItems = function(searchTerm){
            return $http({
                        method: "GET",
                        url: "https://coursera-jhu-default-rtdb.firebaseio.com/menu_items.json"
            }).then(function (result) {
                // process result and only keep items that match
                var foundItems =[];
                if(searchTerm===""){


                    return foundItems;

                }
                for (var key in result.data){
                    var  item=result.data[key].menu_items;
                        for(let key2 in  item){
                            if (item[key2].description.indexOf(searchTerm) !== -1 ) {
                                foundItems.push(item[key2]);
                           }



                        }

                   
                }
                // return processed items

                return foundItems;
            });
        };





    }







})();