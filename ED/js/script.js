document.addEventListener("DOMContentLoaded", 
      function (event){
              document.querySelector(".navbar-toggler")
                      .addEventListener("blur", function(event){
                      let screenWidth = window.innerWidth;
                      console.log(screenWidth);
                      if(screenWidth<769){
                          
                           screenWidth= document.querySelector(".navbar-toggler") .click();
                                    
                          }
                        
           
                      });
               });
