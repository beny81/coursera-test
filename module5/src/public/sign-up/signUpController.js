(function () {
    "use strict";
    
    let saveThis ={
        firstName:"",
        lastName:"",
        email:"",
        phoneNumber:"",
        favoriteDish:"",
        FavCategory:""

     };
     let saveThat=[];

    angular.module('public')
    .controller('SignUpController', SignUpController)
    
    SignUpController.$inject = ['$http'];
    function SignUpController($http) {
      var signCtrl = this;



   
      signCtrl.user=saveThis;
      signCtrl.userFavMenu=saveThat;
      if(signCtrl.user.firstName===""){
        signCtrl.verify=0;
      }
      else{
        signCtrl.verify=1;
      }
     

    
    signCtrl.verifyToSave= function () {
            let number= (signCtrl.user.favoriteDish.match(/\d+/g))-1;
            signCtrl.user.favCategory=signCtrl.user.favoriteDish.match(/[a-zA-Z]+/g);
            return $http({
                method: "GET",
                 url:' https://coursera-jhu-default-rtdb.firebaseio.com/menu_items/'+signCtrl.user.favoriteDish.match(/[a-zA-Z]+/g)+'/menu_items/'+number+'.json'
            })
                .then( function successCallback(response){
                    return  signCtrl.response= response.data;
                })
                .catch( function errorCallBack(error){
                    console.log("Error in getting categories");
                })
                .finally(function finishF(){
                    if (signCtrl.response=== null){
                        signCtrl.itIsNull=true;
                    }
                    else{
                        signCtrl.itIsNull=false;

                    }
                saveThis= signCtrl.user;
                saveThat=signCtrl.response;
                })
        };
        
    }

    
  
    
    })();
    