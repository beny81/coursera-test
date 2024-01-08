document.addEventListener("DOMContentLoaded", 
      function (event){ 
              document.querySelector(".navbar-toggler")
                      .addEventListener("blur", function(event){
                      let screenWidth = window.innerWidth;
                        
                       
                     
                      if(screenWidth<769){
                         
                         document.querySelector(".navbar-toggler") .click();
                                 
                          }
                        
           
                      });
              
           });
