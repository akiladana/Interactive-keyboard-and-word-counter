const btnElement = document.querySelectorAll('.element-in-button');

function keyValueCheck(event) {
    const capsElement = document.querySelector('.js-capslock');
    console.log(event)
    capsElement.classList.forEach(function (classCaps) {
        if (event === 'CapsLock' && 'css-letter-cp' !== classCaps) {
            letterBtnElement = document.querySelectorAll('.js-letter-c');
            letterBtnElement.forEach(function (letter) {
                letter.innerHTML = letter.innerHTML.toUpperCase();
                capsElement.classList.add('css-letter-cp');

            })
        }else{
            capsElement.classList.remove('css-letter-cp');
        }
    });

    // btnElement.classList.add('after-click');
    btnElement.forEach(function (data) {
        let spnElement = data.querySelectorAll('span');
        let invalidId;

        if (data.innerHTML === event) {
            data.classList.add('after-click');
            invalidId = setInterval(function () {
                if (data.classList.value === 'element-in-button') {
                    data.classList.add('after-click');
                } else {
                    data.classList.remove('after-click');
                    clearInterval(invalidId)
                }
            }, 150);
        }


        spnElement.forEach(function (num) {
            if (num.innerHTML === event) {
                data.classList.add('after-click');
                invalidId = setInterval(function () {
                    if (data.classList.value === 'element-in-button') {
                        data.classList.add('after-click');
                        console.log('hi')
                    } else {
                        data.classList.remove('after-click');
                        clearInterval(invalidId)
                    }
                }, 150);
            }

        });
    });
};

// spnElement = data.querySelector('span').innerHTML
// if(data.querySelector('span').innerHTML )