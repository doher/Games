'use strict';

let button = document.getElementById('btn'),
    count = document.getElementById('count'),
    timer = document.getElementById('timer'),
    distance = 5,
    existTimer = false;
    

button.addEventListener('click', function (eo) {
    let elem = eo.target;
    
    timer.innerHTML = distance;
    count.innerHTML++;
    elem.innerHTML = 'Click-Click';

    if (!existTimer) {
        let t = setInterval(function () {    
            timer.innerHTML = distance;        
            distance--;            
            if (distance < 0) {
                clearInterval(t);
                button.setAttribute('disabled', 'disabled');
            }
        }, 1000);

        existTimer = true;
    }
}, false);