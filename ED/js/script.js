document.addEventListener("DOMContentLoaded", 
      function (event){ 
          
         let nav=2;
              document.querySelector("*")
                      .addEventListener("click", function(event){

                            
                         document.querySelector(".navbar-toggler")
                      .addEventListener("click", function(event){
                          
                          if(nav==3){
                              nav=3;
                                }
                          else{
                              nav=2; 
                          }
                         
                        }); 

                                if ( nav==3){

                                  let screenWidth = window.innerWidth;
                         
                     
                                  if(screenWidth<769 ){
                         
                                   document.querySelector(".navbar-toggler") .click();
                                  
                                       console.log("hello1");
                                     
                                     
                          
                                 
                          }
                        

                        } 
                           nav++;
                      
                       console.log("hello2");
                      });
                         
       });
// var showLoading = function (selector) {
//   var html = "<div class='text-center'>";
//   html += "<img src='images/ajax-loader.gif'></div>";
//   insertHtml(selector, html);
// };
