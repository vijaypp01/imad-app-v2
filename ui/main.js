//counter code
var button = document.getElementById('counter');
var counter = 0;

button.onclick = function() {
    
    //Make a Request to the counter endpoint
    
    //capture the response
    
    //render the variable
    counter = counter + 1;
    var span = document.getElementById('count');
    span.innerHTML = counter.toString();
};