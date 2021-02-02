//Code Language Programming
var js = document.getElementById('js').value
var css = document.getElementById('css').value
var python = document.getElementById('py').value
var php = document.getElementById('php').value
var perl = document.getElementById('perl').value

var js1 = String(js)
var css1 = String(css)
var python1 = String(python)
var php1 = String(php)
var perl1 = String(perl)

function println(txt_python){
  var py1 = String(txt_python)
  alert(py1)
  document.querySelector('#python-code').value = txt_python;
}

//bg2css

document.getElementById('css-one').addEventListener('click', 
function() {
  document.querySelector('.modal').style.display = 'flex';
});

document.getElementById('close2').addEventListener('click', 
function() {
  document.querySelector('.modal').style.display = 'none';
});

document.getElementById('btn-css').addEventListener('click', 
function() {
  document.querySelector('.modal').style.display = 'none';
});


// Create Div
document.getElementById('div').addEventListener('click', 
function() {
  document.querySelector('.modal-div').style.display = 'flex';
});

document.getElementById('close17').addEventListener('click', 
function() {
  document.querySelector('.modal-div').style.display = 'none';
});

document.getElementById('btn-div').addEventListener('click', 
function() {
  document.querySelector('.modal-div').style.display = 'none';
});


// Create h1
document.getElementById('h1').addEventListener('click', 
function() {
  document.querySelector('.modal-h1').style.display = 'flex';
});

document.getElementById('close18').addEventListener('click', 
function() {
  document.querySelector('.modal-h1').style.display = 'none';
});

document.getElementById('btn-h1').addEventListener('click', 
function() {
  document.querySelector('.modal-h1').style.display = 'none';
});

// Create h2
document.getElementById('h2').addEventListener('click', 
function() {
  document.querySelector('.modal-h2').style.display = 'flex';
});

document.getElementById('close19').addEventListener('click', 
function() {
  document.querySelector('.modal-h2').style.display = 'none';
});

document.getElementById('btn-h2').addEventListener('click', 
function() {
  document.querySelector('.modal-h2').style.display = 'none';
});

// create h3
document.getElementById('h3').addEventListener('click', 
function() {
  document.querySelector('.modal-h3').style.display = 'flex';
});

document.getElementById('close20').addEventListener('click', 
function() {
  document.querySelector('.modal-h3').style.display = 'none';
});

document.getElementById('btn-h3').addEventListener('click', 
function() {
  document.querySelector('.modal-h3').style.display = 'none';
});

// create p
document.getElementById('p').addEventListener('click', 
function() {
  document.querySelector('.modal-p').style.display = 'flex';
});

document.getElementById('close21').addEventListener('click', 
function() {
  document.querySelector('.modal-p').style.display = 'none';
});


document.getElementById('btn-p').addEventListener('click', 
function() {
  document.querySelector('.modal-p').style.display = 'none';
});


// create a
document.getElementById('a').addEventListener('click', 
function() {
  document.querySelector('.modal-a').style.display = 'flex';
});

document.getElementById('close22').addEventListener('click', 
function() {
  document.querySelector('.modal-a').style.display = 'none';
});

document.getElementById('btn-a').addEventListener('click', 
function() {
  document.querySelector('.modal-a').style.display = 'none';
});


// Create span
document.getElementById('span').addEventListener('click', 
function() {
  document.querySelector('.modal-span').style.display = 'flex';
});

document.getElementById('close23').addEventListener('click', 
function() {
  document.querySelector('.modal-span').style.display = 'none';
});

document.getElementById('btn-span').addEventListener('click', 
function() {
  document.querySelector('.modal-span').style.display = 'none';
});

// create sec


// create img
document.getElementById('img').addEventListener('click', 
function() {
  document.querySelector('.modal-img').style.display = 'flex';
});

document.getElementById('close25').addEventListener('click', 
function() {
  document.querySelector('.modal-img').style.display = 'none';
});

document.getElementById('btn-img').addEventListener('click', 
function() {
  document.querySelector('.modal-img').style.display = 'none';
});

// video
document.getElementById('video').addEventListener('click', 
function() {
  document.querySelector('.modal-video').style.display = 'flex';
});

document.getElementById('close26').addEventListener('click', 
function() {
  document.querySelector('.modal-video').style.display = 'none';
});

document.getElementById('btn-video').addEventListener('click', 
function() {
  document.querySelector('.modal-video').style.display = 'none';
});

// create btn
document.getElementById('btn').addEventListener('click', 
function() {
  document.querySelector('.modal-btn').style.display = 'flex';
});

document.getElementById('close27').addEventListener('click', 
function() {
  document.querySelector('.modal-btn').style.display = 'none';
});

document.getElementById('btn-btn').addEventListener('click', 
function() {
  document.querySelector('.modal-btn').style.display = 'none';
});

// nav
document.getElementById('nav').addEventListener('click', 
function() {
  document.querySelector('.modal-nav').style.display = 'flex';
});

document.getElementById('close28').addEventListener('click', 
function() {
  document.querySelector('.modal-nav').style.display = 'none';
});


// create input
document.getElementById('input').addEventListener('click', 
function() {
  document.querySelector('.modal-input').style.display = 'flex';
});

document.getElementById('close29').addEventListener('click', 
function() {
  document.querySelector('.modal-input').style.display = 'none';
});

document.getElementById('btn-input').addEventListener('click', 
function() {
  document.querySelector('.modal-input').style.display = 'none';
});


// nav
document.getElementById('option').addEventListener('click', 
function() {
  document.querySelector('.modal-option').style.display = 'flex';
});

document.getElementById('close30').addEventListener('click', 
function() {
  document.querySelector('.modal-option').style.display = 'none';
});


// br
document.getElementById('br').addEventListener('click', 
function() {
  document.querySelector('.modal-br').style.display = 'flex';
});

document.getElementById('close31').addEventListener('click', 
function() {
  document.querySelector('.modal-br').style.display = 'none';
});

// plus Style Sheet
document.getElementById('br').addEventListener('click', 
function() {
  document.querySelector('.modal-br').style.display = 'flex';
});

document.getElementById('close31').addEventListener('click', 
function() {
  document.querySelector('.modal-br').style.display = 'none';
});

// New Project
document.getElementById('new-one').addEventListener('click', 
function() {
  document.querySelector('.new').style.display = 'flex';
});

document.getElementById('close12').addEventListener('click', 
function() {
  document.querySelector('.new').style.display = 'none';
});

document.getElementById('btn-1385').addEventListener('click', 
function() {
  document.querySelector('.new').style.display = 'none';
});

document.getElementById('btn-1385').addEventListener('click', 
function() {
  document.querySelector('.project').style.display = 'flex';
});

// plus Code User in development
function push_code(){
  var code = document.querySelector('.codeuser').value;
  document.querySelector('.web-project').innerHTML = code
}

// Run Code
document.getElementById('compailler').addEventListener('click', 
function() {
  document.querySelector('.run').style.display = 'flex';
});

document.getElementById('close11').addEventListener('click', 
function() {
  document.querySelector('.run').style.display = 'none';
});
