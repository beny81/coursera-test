document.addEventListener("DOMContentLoaded", 
      function (event){
              document.querySelector("whatsapp")
                      .addEventListener("click",textMe);
              function texteMe (event){
                      
                      document.querySelector("#answer")
                              .textContent = texte;    
           
                      }
               });