(function(){


angular.module("LunchCheck",[])

       .controller("LunchCheckController", fcontroller);

fcontroller.$inject= ["$scope"];

function fcontroller ($scope){
    $scope.message="";
   

   
    

   

    $scope.ask = function (){
        let x;

       x= $scope.message.split(",");
    
         if ($scope.message===""){
             
          
            $scope.answer="Please enter data first";
         
         }
        else if (x.length <4){
            $scope.answer="Enjoy!";

            }
         else if (x.length >3){
            $scope.answer="Too much!";

            }
        
             
        }

}





    
})();
