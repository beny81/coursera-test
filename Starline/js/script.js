document.addEventListener("DOMContentLoaded", 
      function (event){
              document.querySelector("button")
                      .addEventListener("click", sayhello);
              function sayhello (event){
                      let texte = document.getElementById("texte").value;    
                      if (texte==="2017-02-09"){
                          texte="Your first ever kiss";
                          }
                      else if (texte==="1999-10-18"){
                          texte="Big Mike was born";
                          }
                       else{
                            texte = "Sorry we do not have '" + texte + "' on this platform";
                           }
                        
                      document.querySelector("#answer")
                              .textContent = texte;    
           
                      }
               });
