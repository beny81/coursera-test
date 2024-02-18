(function () {
     'use strict';
    
    angular.module("ShoppingListCheckOff",[])
           .service("ShoppingListCheckOffService", ShoppingListCheckOffService)
           .controller("ToBuyController", firstFunctionCont)
           .controller("AlreadyBoughtController", secondFunctionCont);

 firstFunctionCont.$inject=["ShoppingListCheckOffService"];
function firstFunctionCont (ShoppingListCheckOffService) {
    let buy= this;

    buy.name="";
    buy.quantity="";

    buy.addTo = function (){

         ShoppingListCheckOffService.addToBuy(buy.name,buy.quantity);
        
    };
    buy.addToBought=  function (itemIndex){

         ShoppingListCheckOffService.addToBought(itemIndex);
          ShoppingListCheckOffService.remove(itemIndex);
        
        
    };
    buy.list= ShoppingListCheckOffService.getBuyList();

    

    
}

secondFunctionCont.$inject=["ShoppingListCheckOffService"];    
function secondFunctionCont (ShoppingListCheckOffService) {
    let bought= this;
     bought.list= ShoppingListCheckOffService.getBoughtList();

    
} 

function ShoppingListCheckOffService () {
    let service=this;

    let list=[
        { name: "cookies", quantity: 10 },
        { name: "pasta", quantity: 1 },
        { name: "cakes", quantity: 8 },
    { name: "chocolates", quantity: 18 },
    { name: "beers", quantity: 81 }



        
    ];
    
    let list2=[];

    service.addToBuy = function(itemName, itemQuantity){
        let item={
            name:itemName,
            quantity:itemQuantity}
        list.push(item);


        
    };
    service.getBuyList= function (){

        return list;
    };

      service.remove = function(itemIndex){
       

       list.splice(itemIndex,1);
        
    };
    
    


    service.addToBought = function(itemIndex){
       

        list2.push(list[itemIndex]);
        
    };
    service.getBoughtList= function (){

        return list2;
    };



}    
    



    
})();
