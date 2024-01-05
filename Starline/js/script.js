document.addEventListener("DOMContentLoaded", 
      function (event){
              document.querySelector("button")
                      .addEventListener("click", sayhello);
              function sayhello (event){
                      let texte = document.getElementById("texte").value;
                      texte = "Sorry we do not have '" + texte + "' on this platform"
                      document.querySelector("div")
                              .textContent = texte;    
           
                      }
               });
