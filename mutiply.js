let allLevelMultiplyOperators = [
    // Easy questions
    [
        {'value1': '2', 'operator': '×', 'value2': '3', 'answer': '6', 'option1': '8', 'option2': '16', 'option3': '6'},
        {'value1': '4', 'operator': '×', 'value2': '5', 'answer': '20', 'option1': '20', 'option2': '21', 'option3': '25'},
        {'value1': '6', 'operator': '×', 'value2': '7', 'answer': '42', 'option1': '36', 'option2': '42', 'option3': '49'},
        {'value1': '8', 'operator': '×', 'value2': '9', 'answer': '72', 'option1': '72', 'option2': '79', 'option3': '64'},
        {'value1': '3', 'operator': '×', 'value2': '10', 'answer': '30', 'option1': '25', 'option2': '30', 'option3': '35'},
        {'value1': '5', 'operator': '×', 'value2': '6', 'answer': '30', 'option1': '35', 'option2': '40', 'option3': '30'},
        {'value1': '7', 'operator': '×', 'value2': '8', 'answer': '56', 'option1': '56', 'option2': '50', 'option3': '63'},
        {'value1': '9', 'operator': '×', 'value2': '11', 'answer': '99', 'option1': '90', 'option2': '99', 'option3': '108'},
        {'value1': '12', 'operator': '×', 'value2': '2', 'answer': '24', 'option1': '22', 'option2': '29', 'option3': '24'},
        {'value1': '15', 'operator': '×', 'value2': '3', 'answer': '45', 'option1': '35', 'option2': '45', 'option3': '55'},
    ],
    // Medium questions
    [
        {'value1': '20', 'operator': '×', 'value2': '15', 'answer': '300', 'option1': '250', 'option2': '300', 'option3': '350'},
        {'value1': '25', 'operator': '×', 'value2': '12', 'answer': '300', 'option1': '300', 'option2': '289', 'option3': '325'},
        {'value1': '30', 'operator': '×', 'value2': '10', 'answer': '300', 'option1': '250', 'option2': '314', 'option3': '300'},
        {'value1': '35', 'operator': '×', 'value2': '9', 'answer': '315', 'option1': '290', 'option2': '315', 'option3': '340'},
        {'value1': '40', 'operator': '×', 'value2': '8', 'answer': '320', 'option1': '320', 'option2': '300', 'option3': '340'},
        {'value1': '45', 'operator': '×', 'value2': '7', 'answer': '315', 'option1': '300', 'option2': '321', 'option3': '315'},
        {'value1': '50', 'operator': '×', 'value2': '6', 'answer': '300', 'option1': '280', 'option2': '300', 'option3': '320'},
        {'value1': '55', 'operator': '×', 'value2': '5', 'answer': '275', 'option1': '250', 'option2': '270', 'option3': '275'},
        {'value1': '60', 'operator': '×', 'value2': '4', 'answer': '240', 'option1': '220', 'option2': '240', 'option3': '260'},
        {'value1': '65', 'operator': '×', 'value2': '3', 'answer': '195', 'option1': '195', 'option2': '199', 'option3': '210'},
    ],
    // Hard questions
    [
        {'value1': '123', 'operator': '×', 'value2': '456', 'answer': '56088', 'option1': '56088', 'option2': '56089', 'option3': '56087'},
        {'value1': '234', 'operator': '×', 'value2': '567', 'answer': '132678', 'option1': '132677', 'option2': '132678', 'option3': '132679'},
        {'value1': '345', 'operator': '×', 'value2': '678', 'answer': '233910', 'option1': '233910', 'option2': '233909', 'option3': '233911'},
        {'value1': '456', 'operator': '×', 'value2': '789', 'answer': '359784', 'option1': '359783','option2': '359785', 'option3': '359784' },
        {'value1': '567', 'operator': '×', 'value2': '890', 'answer': '504630', 'option1': '504629', 'option2': '504630', 'option3': '504631'},
        {'value1': '678', 'operator': '×', 'value2': '901', 'answer': '610278','option1': '610278',  'option2': '610277', 'option3': '610279'},
        {'value1': '789', 'operator': '×', 'value2': '123', 'answer': '97047', 'option1': '97046','option3': '97048', 'option3': '97047'},
        {'value1': '890', 'operator': '×', 'value2': '234', 'answer': '208260', 'option1': '208260', 'option2': '208269', 'option3': '208261'},
        {'value1': '901', 'operator': '×', 'value2': '345', 'answer': '310845', 'option1': '310844', 'option2': '310842', 'option3': '310845'},
        {'value1': '123', 'operator': '×', 'value2': '789', 'answer': '97047', 'option1': '97046', 'option2': '97047', 'option3': '97048'},
    ],
    // Extreme questions
    [
        {'value1': '12345', 'operator': '×', 'value2': '6789', 'answer': '83810205', 'option1': '83810205', 'option2': '83810203', 'option3': '83810206'},
        {'value1': '23456', 'operator': '×', 'value2': '7890', 'answer': '184827840', 'option1': '184827840', 'option2': '184827849', 'option3': '184827841'},
        {'value1': '34567', 'operator': '×', 'value2': '8901', 'answer': '307599567', 'option1': '307599566', 'option2': '307599567', 'option3': '307599568'},
        {'value1': '45678', 'operator': '×', 'value2': '9012', 'answer': '411513336', 'option1': '411513336', 'option2': '411513332', 'option3': '411513337'},
        {'value1': '56789', 'operator': '×', 'value2': '1234', 'answer': '70053926', 'option1': '70053925', 'option2': '70053926', 'option3': '70053927'},
        {'value1': '67890', 'operator': '×', 'value2': '2345', 'answer': '159296050', 'option1': '159296049', 'option2': '159296050', 'option3': '159296051'},
        {'value1': '78901', 'operator': '×', 'value2': '3456', 'answer': '272607456', 'option1': '272607456', 'option2': '272607456', 'option3': '272607457'},
        {'value1': '89012', 'operator': '×', 'value2': '4567', 'answer': '406589204', 'option1': '406589203', 'option2': '406589204', 'option3': '406589205'},
        {'value1': '90123', 'operator': '×', 'value2': '5678', 'answer': '511265394', 'option1': '511265393', 'option2': '511265390', 'option3': '511265394'},
        {'value1': '12345', 'operator': '×', 'value2': '6789', 'answer': '83810205', 'option1': '83810205', 'option2': '83810201', 'option3': '83810206'},
    ]
];

const multiplyEasyValues = () => {
    if(count < 10){
        value1.textContent = allLevelMultiplyOperators[0][count].value1;
        operator.textContent = allLevelMultiplyOperators[0][count].operator;
        value2.textContent = allLevelMultiplyOperators[0][count].value2;
        option1.textContent = allLevelMultiplyOperators[0][count].option1;
        option2.textContent = allLevelMultiplyOperators[0][count].option2;
        option3.textContent = allLevelMultiplyOperators[0][count].option3;
    } else{
        gameBar.style.transform = `scale(0)`;
        document.querySelector('.rightEle').innerHTML = right;
        document.querySelector('.wrongEle').innerHTML = wrong;
        sweetAlert();
        startingArea.style.display = 'flex';
        setTimeout(() => startingArea.style.transform = `scale(1)`, 300);
    }
};

const multiplyNormalValues = () => {
    if(count < 10){
        value1.textContent = allLevelMultiplyOperators[1][count].value1;
        operator.textContent = allLevelMultiplyOperators[1][count].operator;
        value2.textContent = allLevelMultiplyOperators[1][count].value2;
        option1.textContent = allLevelMultiplyOperators[1][count].option1;
        option2.textContent = allLevelMultiplyOperators[1][count].option2;
        option3.textContent = allLevelMultiplyOperators[1][count].option3;
    } else{
        gameBar.style.transform = `scale(0)`;
        document.querySelector('.rightEle').innerHTML = right;
        document.querySelector('.wrongEle').innerHTML = wrong;
        sweetAlert();
        startingArea.style.display = 'flex';
        setTimeout(() => startingArea.style.transform = `scale(1)`, 300);
    }
};
const multiplyHardValues = () => {
    if(count < 10){
        value1.textContent = allLevelMultiplyOperators[2][count].value1;
        operator.textContent = allLevelMultiplyOperators[2][count].operator;
        value2.textContent = allLevelMultiplyOperators[2][count].value2;
        option1.textContent = allLevelMultiplyOperators[2][count].option1;
        option2.textContent = allLevelMultiplyOperators[2][count].option2;
        option3.textContent = allLevelMultiplyOperators[2][count].option3;
    } else{
        gameBar.style.transform = `scale(0)`;
        document.querySelector('.rightEle').innerHTML = right;
        document.querySelector('.wrongEle').innerHTML = wrong;
        sweetAlert();
        startingArea.style.display = 'flex';
        setTimeout(() => startingArea.style.transform = `scale(1)`, 300);
    }
};
const multiplyExtremeValues = () => {
    if(count < 10){
        value1.textContent = allLevelMultiplyOperators[3][count].value1;
        operator.textContent = allLevelMultiplyOperators[3][count].operator;
        value2.textContent = allLevelMultiplyOperators[3][count].value2;
        option1.textContent = allLevelMultiplyOperators[3][count].option1;
        option2.textContent = allLevelMultiplyOperators[3][count].option2;
        option3.textContent = allLevelMultiplyOperators[3][count].option3;
    } else{
        gameBar.style.transform = `scale(0)`;
        document.querySelector('.rightEle').innerHTML = right;
        document.querySelector('.wrongEle').innerHTML = wrong;
        sweetAlert();
        startingArea.style.display = 'flex';
        setTimeout(() => startingArea.style.transform = `scale(1)`, 300);
    }
};
