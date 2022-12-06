
/*
const checkbox = document.getElementById('checkbox');
const submitBtn = document.getElementById('submitBtn');
const elements = document.querySelectorAll('.element');
const selectColor = document.getElementById('selectColor');

// disable checkbox
checkbox.disabled = true;
submitBtn.disabled = true;

// generate random color Func
function getRandomColor() {
    const letter = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letter[Math.floor(Math.random() * letter.length)];
    }
    return color;
}

// check if right color
elements.forEach(function (element) {
    element.addEventListener('click', function () {
        if (element.innerHTML === selectColor.innerHTML) {
            checkbox.checked = true;
            alert('You are human!');
            submitBtn.disabled = false;
            submitBtn.classList.remove('btn-light');
            submitBtn.classList.add('btn-success');
        } else {
            alert('Please verify that you are human!');
            location.reload(true);
        }
    });
})

// Asign color to Elements
function randomize() {
    let randSelectColor = [];
    let r = Math.floor(Math.random() * 9);
    elements.forEach(function (element) {
    const color = getRandomColor();
    randSelectColor.push(color);
    element.style.backgroundColor = color;
    element.innerHTML = color;
    })
    selectColor.innerHTML = randSelectColor[r];
}
randomize();
*/
(function () {
    let verification = {
        checkbox: document.getElementById('checkbox'),
        submitBtn: document.getElementById('submitBtn'),
        elements: document.querySelectorAll('.element'),
        selectColor: document.getElementById('selectColor'),
        init: function () {
            verification.randomize();
            verification.checkbox.disabled = true;
            verification.submitBtn.disabled = true;
            verification.elements.forEach(function (element) {
            element.addEventListener('click', function () {
                if (element.innerHTML === verification.selectColor.innerHTML) {
                    verification.checkbox.checked = true;
                    alert('You are human!');
                    verification.submitBtn.disabled = false;
                    verification.submitBtn.classList.remove('btn-light');
                    verification.submitBtn.classList.add('btn-success');
                } else {
                    alert('Please verify that you are human!');
                    location.reload(true);
                }
            });
            })
        },
        getRandomColor: function () {
            const letter = '0123456789ABCDEF';
            let color = '#';
            for (let i = 0; i < 6; i++) {
                color += letter[Math.floor(Math.random() * letter.length)];
            }
            return color;
        },
        randomize: function () {
            let randSelectColor = [];
            let r = Math.floor(Math.random() * 9);
            verification.elements.forEach(function (element) {
            const color = verification.getRandomColor();
            randSelectColor.push(color);
            element.style.backgroundColor = color;
            element.innerHTML = color;
            })
            verification.selectColor.innerHTML = randSelectColor[r];
        }
    };
    verification.init();
})()