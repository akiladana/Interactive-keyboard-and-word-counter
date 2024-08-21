const btnElement = document.querySelectorAll('.element-in-button');

function countWord(){
    let inputElement = document.querySelector('.js-input-element');
    const inputValue = inputElement.value;
    let wordCount = 0;

    for (let i =1; i<inputValue.length; i++){

        if(inputValue[i] === " "){
            wordCount ++;
            console.log('hi')
            
        }else if(wordCount === 0 && inputValue.length !== 0){
            wordCount++;
            console.log('sec')
        }
        
    }
    document.querySelector('.js-counted-words').innerHTML = `${wordCount}`;
    document.querySelector('.css-final-out').classList.add('css-counted-words-after');
}

function keyValueCheck(event) {
    const capsElement = document.querySelector('.js-capslock');
    let capsValue = true;
    if (event === 'CapsLock'){
        capsElement.classList.forEach(function (classCaps) {
            if (event === 'CapsLock' && 'css-letter-cp' !== classCaps) {
                letterBtnElement = document.querySelectorAll('.js-letter-c');
                letterBtnElement.forEach(function (letter) {
                    letter.innerHTML = letter.innerHTML.toUpperCase();
                    capsElement.classList.add('css-letter-cp');
                    capsValue = false;
                })
            } else {
                capsElement.classList.remove('css-letter-cp');
                letterBtnElement.forEach(function (letter) {
                    letter.innerHTML = letter.innerHTML.toLowerCase();
                })
            }
        });
    }
    

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