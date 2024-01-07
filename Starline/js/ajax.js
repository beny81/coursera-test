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
        let xhr = getNewRequest();
        xhr.onreadystatechange = function () {
            console.log(this);
            xhr=this;
            console.log("1-before this.responseText");
            console.log(this.responseText);
            handleResponse(xhr, responseHandler);
             };

        xhr.open("GET",requestURL, true);
        xhr.send(null);
        
        console.log(" Now before the answer ");
        console.log(xhr.responseText);

        console.log("2-before this.responseText");
        console.log(this.responseText);
        console.log(xhr.response);
        console.log("after the answer");
        
        
     };
    
    function handleResponse(xhr, responseHandler){
        if((xhr.readystate== 4) && (xhr.status==200)){
            
            responseHandler(JSON.parse(xhr.responseText));
         }
      }
    window.ajax= ajax;
    

})(window);
