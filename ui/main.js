console.log('Loaded!');
//to change the text in the window
var element = document.getElementById("main-text");
element.innerHTML = 'New text';
//move the image
var img = document.getElementById('madi');
img.onclick = function() {
  img.style.marginLeft = '100px';  
    
};