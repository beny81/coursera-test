document.addEventListener("DOMContentLoaded", 
      function (event){ 
          
        
              document.querySelector(".navbar-toggler")
                      .addEventListener("focus", function(event){let b=3;
                         
                           document.querySelector("*")
                      .addEventListener("click", function(event){
                      let screenWidth = window.innerWidth;
                     
                      if(screenWidth<769 && b>0){
                         
                         document.querySelector(".navbar-toggler") .click();
                          b-=1;
                         
                                 
                          }
                        
           
                      });
                    });       
              
           });
