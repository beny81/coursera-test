( function(window){


    const ajax={};

    function getNewRequest () {
        if( window.XMLHttpRequest){
            return (new XMLHttpRequest());
            }
        else {
            window.alert("Ajax is not available");
            return(null);
            }
        }

    ajax.sendGetRequest= function (requestURL, responseHandler){
        const xhr = getNewRequest();
        xhr.onreadystatechange = function () {
            handleResponse(xhr, responseHandler);
             };

        xhr.open("GET",requestURL, true);
        xhr.responseType= "text";
        console.log("the answer is:");
        console.log(xhr.responseText);
        console.log("the answer was:");
        
        xhr.send();
     };
    
    function handleResponse(xhr, responseHandler){
        if((xhr.readystate== 4) && (xhr.status==200)){
            
            responseHandler(xhr);
         }
      }
    window.ajax= ajax;
    

})(window);
