document.addEventListener("DOMContentLoaded", 
      function (event){let b=1; 
              document.querySelector(".navbar-toggler")
                      .addEventListener("click", function(event){
                      let screenWidth = window.innerWidth;
                         b=0;
                          document.querySelector("#main")
                      .addEventListener("click", function(event){
                          
                     
                      if(screenWidth<769 && b===0){
                         
                           screenWidth= document.querySelector(".navbar-toggler") .click();
                             b=1;       
                          }
                        
           
                      });
               });
           });
