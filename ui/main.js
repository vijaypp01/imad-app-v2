console.log('Loaded!');
//to change the text in the window
var element = document.getElementById("main-text");
element.innerHTML = 'New text';
//move the image
var img = document.getElementById('madi');
var marginLeft = 0;
function moveRight() {
    marginLeft = marginLeft +10;
    img.style.marginLeft = marginleft + 'px';
}
img.onclick = function() {
  var interval = setInterval(moveRight,100)
  
    
};