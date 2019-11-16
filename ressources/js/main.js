window.onload = () => {
    'use strict';

    if ('serviceWorker' in navigator) {
        navigator.serviceWorker
            .register('/sw.js');
    }
    var buttonImg = document.getElementById("buttonImg");
    buttonImg.onclick = () => {
        var element = document.getElementById("button");
        element.classList.toggle("slide");


        var element1 = document.getElementsByClassName("categorie");
        for (var r of element1)
            r.classList.toggle("show");

    }

}

function but() {

}