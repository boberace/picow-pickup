window.onload = () => {
    'use strict';
  
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
               .register('./service-worker.js');
    }
  }


var nbContainer = document.getElementById("icon-bar-left");
var nbis = nbContainer.getElementsByClassName("nbi");
for (var i = 0; i < nbis.length; i++) {
    nbis[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}

function popFun() {
      var popup = document.getElementById("myPopup");
      popup.classList.toggle("show");
}

var elem = document.getElementById("fs");
function openFullscreen() {
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) { /* Safari */
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE11 */
        elem.msRequestFullscreen();
    }
}