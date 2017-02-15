//counter code
var button = document.getElementById('counter');

button.onclick = function() {
    
    //Make a Request to the counter endpoint
    var request = new XMLHttpRequest();
    
    //capture the response
    request.onreadystatechange =  function() {
        if(request.readyState === XMLHttpRequest.Done){
            //Take an action
            if(request.status === 200){
                var counter = request.responseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
            }
        }
    };
    //Make a request
    request.open('GET','http://vijaypp01.imad.hasura-app.io/counter',true);
    request.send(null);
};