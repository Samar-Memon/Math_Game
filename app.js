let sound = new Audio('./click2.mp3');
let trueSound = new Audio('./true.mp3');
let wrongSound = new Audio('./wrong.mp3');

let startBtn = document.getElementById('start');
let gameSelect = document.getElementById('game');
let levelSelect = document.getElementById('level');

let startingArea = document.querySelector('.starting-area');

let gameBar = document.querySelector('.gameBar');
let headingBar = document.querySelector('.headingBar');
let value1 = document.querySelector('.value1');
let operator = document.querySelector('.operator');
let value2 = document.querySelector('.value2');
let option1 = document.querySelector('.option1');
let option2 = document.querySelector('.option2');
let option3 = document.querySelector('.option3');
let options = document.querySelectorAll('.option');
let sweetMain = document.querySelector('.sweetMain');

let main = document.querySelector('.main');
let waitingBar = document.querySelector('.waitingBar');

setTimeout(() => {
    waitingBar.style.display = 'none';
    main.style.display = 'flex';
}, 1000)

let count = 0, right = 0, wrong = 0, currentLevel = 'easy';

const gameBarGameDisplay = () => {
    startingArea.style.transform = `scale(0)`;
    setTimeout(() => startingArea.style.display = 'none', 300);

    gameBar.style.display = 'flex';
    setTimeout(() => gameBar.style.transform = `scale(1)`, 300)
}
let select = document.querySelectorAll('select').forEach((w) => {
    w.addEventListener('click', () => {
    sound.play();
    })
})

options.forEach((a) => {
    a.addEventListener('click', () => {
        if (count < 10) {
            let currentQuestion;

            if (currentLevel === 'easy') {
                if(gameSelect.value == 'divide'){
                currentQuestion = allLevelDivideOperators[0][count];
                }else if(gameSelect.value == 'multiply'){
                currentQuestion = allLevelMultiplyOperators[0][count];
                }else if(gameSelect.value == 'addition'){
                currentQuestion = allLevelAdditionOperators[0][count];
                }else if(gameSelect.value == 'subtraction'){
                currentQuestion = allLevelSubtractionOperators[0][count];
                }
            } else if (currentLevel === 'normal') {
                if(gameSelect.value == 'divide'){
                currentQuestion = allLevelDivideOperators[1][count];
                }else if(gameSelect.value == 'multiply'){
                currentQuestion = allLevelMultiplyOperators[1][count];
                }else if(gameSelect.value == 'addition'){
                currentQuestion = allLevelAdditionOperators[1][count];
                }else if(gameSelect.value == 'subtraction'){
                currentQuestion = allLevelSubtractionOperators[1][count];
                }
            } else if (currentLevel === 'hard') {
                if(gameSelect.value == 'divide'){
                currentQuestion = allLevelDivideOperators[2][count];
                }else if(gameSelect.value == 'multiply'){
                currentQuestion = allLevelMultiplyOperators[2][count];
                }else if(gameSelect.value == 'addition'){
                currentQuestion = allLevelAdditionOperators[2][count];
                }else if(gameSelect.value == 'subtraction'){
                currentQuestion = allLevelSubtractionOperators[2][count];
                }
            } else if (currentLevel === 'extreme') {
                if(gameSelect.value == 'divide'){
                currentQuestion = allLevelDivideOperators[3][count];
                }else if(gameSelect.value == 'multiply'){
                currentQuestion = allLevelMultiplyOperators[3][count];
                }else if(gameSelect.value == 'addition'){
                currentQuestion = allLevelAdditionOperators[3][count];
                }else if(gameSelect.value == 'subtraction'){
                currentQuestion = allLevelSubtractionOperators[3][count];
                }
            }

            if (a.textContent == currentQuestion.answer) {
                a.style.background = 'green';
                trueSound.play();
                setTimeout(() => {
                a.style.background = '';
                }, 300)
                right++;
            } else {
                a.style.background = 'red';
                wrongSound.play();
                setTimeout(() => {
                a.style.background = '';
                }, 300)
                wrong++;
            } 

            count++;

            document.getElementById('score').innerHTML = count;

            // Call the appropriate function based on the current level
            if (currentLevel === 'easy') {
                if(gameSelect.value == 'divide'){
                    divideEasyValues();
                }else if(gameSelect.value == 'multiply'){
                    multiplyEasyValues();
                }else if(gameSelect.value == 'addition'){
                    additionEasyValues();
                }else if(gameSelect.value == 'subtraction'){
                    subtractionEasyValues();
                }
            } else if (currentLevel === 'normal') {
                if(gameSelect.value == 'divide'){
                    divideNormalValues();
                }else if(gameSelect.value == 'multiply'){
                    multiplyNormalValues();
                }else if(gameSelect.value == 'addition'){
                    additionNormalValues();
                }else if(gameSelect.value == 'subtraction'){
                    subtractionNormalValues();
                }
            } else if (currentLevel === 'hard') {
                if(gameSelect.value == 'divide'){
                    divideHardValues();
                }else if(gameSelect.value == 'multiply'){
                    multiplyHardValues();
                }else if(gameSelect.value == 'addition'){
                    additionHardValues();
                }else if(gameSelect.value == 'subtraction'){
                    subtractionHardValues();
                }
            } else if (currentLevel === 'extreme') {
                if(gameSelect.value == 'divide'){
                    divideExtremeValues();
                }else if(gameSelect.value == 'multiply'){
                    multiplyExtremeValues();
                }else if(gameSelect.value == 'addition'){
                    additionExtremeValues();
                }else if(gameSelect.value == 'subtraction'){
                    subtractionExtremeValues();
                }
            }
        }
    });
});




const allOverFunction = () => {
    if(gameSelect.value == 'divide' && levelSelect.value == 'easy'){
        gameBarGameDisplay();
        divideEasyValues();
        currentLevel = 'easy';
        headingBar.innerHTML = `<div class="score"><span id="score">0</span>/10</div> Easy Divide Game`;
    }else if(gameSelect.value == 'divide' && levelSelect.value == 'normal'){
        gameBarGameDisplay();
        divideNormalValues();
        currentLevel = 'normal';
        headingBar.innerHTML = `<div class="score"><span id="score">0</span>/10</div> Normal Divide Game`;
    }else if(gameSelect.value == 'divide' && levelSelect.value == 'hard'){
        gameBarGameDisplay();
        divideHardValues();
        currentLevel = 'hard';
        headingBar.innerHTML = `<div class="score"><span id="score">0</span>/10</div> Hard Divide Game`;
    }else if(gameSelect.value == 'divide' && levelSelect.value == 'extreme'){
        gameBarGameDisplay();
        divideExtremeValues();
        currentLevel = 'extreme';
        headingBar.innerHTML = `<div class="score"><span id="score">0</span>/10</div> Extreme Divide Game`;
    }else if(gameSelect.value == 'multiply' && levelSelect.value == 'easy'){
        gameBarGameDisplay();
        multiplyEasyValues();
        currentLevel = 'easy';
        headingBar.innerHTML = `<div class="score"><span id="score">0</span>/10</div> Easy Multiply Game`;
    }else if(gameSelect.value == 'multiply' && levelSelect.value == 'normal'){
        gameBarGameDisplay();
        multiplyNormalValues();
        currentLevel = 'normal';
        headingBar.innerHTML = `<div class="score"><span id="score">0</span>/10</div> Normal Multiply Game`;
    }else if(gameSelect.value == 'multiply' && levelSelect.value == 'hard'){
        gameBarGameDisplay();
        multiplyHardValues();
        currentLevel = 'hard';
        headingBar.innerHTML = `<div class="score"><span id="score">0</span>/10</div> Hard Multiply Game`;
    }else if(gameSelect.value == 'multiply' && levelSelect.value == 'extreme'){
        gameBarGameDisplay();
        multiplyExtremeValues();
        currentLevel = 'extreme';
        headingBar.innerHTML = `<div class="score"><span id="score">0</span>/10</div> Extreme Multiply Game`;
    }else if(gameSelect.value == 'addition' && levelSelect.value == 'easy'){
        gameBarGameDisplay();
        additionEasyValues();
        currentLevel = 'easy';
        headingBar.innerHTML = `<div class="score"><span id="score">0</span>/10</div> Easy Addition Game`;
    }else if(gameSelect.value == 'addition' && levelSelect.value == 'normal'){
        gameBarGameDisplay();
        additionNormalValues();
        currentLevel = 'normal';
        headingBar.innerHTML = `<div class="score"><span id="score">0</span>/10</div> Normal Addition Game`;
    }else if(gameSelect.value == 'addition' && levelSelect.value == 'hard'){
        gameBarGameDisplay();
        additionHardValues();
        currentLevel = 'hard';
        headingBar.innerHTML = `<div class="score"><span id="score">0</span>/10</div> Hard Addition Game`;
    }else if(gameSelect.value == 'addition' && levelSelect.value == 'extreme'){
        gameBarGameDisplay();
        additionExtremeValues();
        currentLevel = 'extreme';
        headingBar.innerHTML = `<div class="score"><span id="score">0</span>/10</div> Extreme Addition Game`;
    }else if(gameSelect.value == 'subtraction' && levelSelect.value == 'easy'){
        gameBarGameDisplay();
        subtractionEasyValues();
        currentLevel = 'easy';
        headingBar.innerHTML = `<div class="score"><span id="score">0</span>/10</div> Easy Subtraction Game`;
    }else if(gameSelect.value == 'subtraction' && levelSelect.value == 'normal'){
        gameBarGameDisplay();
        subtractionNormalValues();
        currentLevel = 'normal';
        headingBar.innerHTML = `<div class="score"><span id="score">0</span>/10</div> Normal Subtraction Game`;
    }else if(gameSelect.value == 'subtraction' && levelSelect.value == 'hard'){
        gameBarGameDisplay();
        subtractionHardValues();
        currentLevel = 'hard';
        headingBar.innerHTML = `<div class="score"><span id="score">0</span>/10</div> Hard Subtraction Game`;
    }else if(gameSelect.value == 'subtraction' && levelSelect.value == 'extreme'){
        gameBarGameDisplay();
        subtractionExtremeValues();
        currentLevel = 'extreme';
        headingBar.innerHTML = `<div class="score"><span id="score">0</span>/10</div> Extreme Subtraction Game`;
}
}


startBtn.addEventListener('click', () => {
    waitingBar.style.display = 'flex';
    sound.play();
    setTimeout(() => {
        waitingBar.style.display = 'none';
        allOverFunction();
    }, 1000)
    count = 0;
    right = 0;
    wrong = 0;
});


const sweetAlert = () => {
    sweetMain.style.display = 'flex';
    setTimeout(() => sweetMain.style.transform = `scale(1)`, 300);
};

const closePopup = () => {
    sweetMain.style.transform = `scale(0)`;
    setTimeout(() => sweetMain.style.display = 'none', 300);
}