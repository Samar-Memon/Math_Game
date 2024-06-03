let allLevelDivideOperators = [
    [
        {'value1': '2','operator': '÷','value2': '10','answer': '0.2','option1': '2','option2': '0.2','option3': '1.0'},
        {'value1': '8','operator': '÷','value2': '3','answer': '2.6','option1': '2.6','option2': '3','option3': '2.3'},
        {'value1': '1','operator': '÷','value2': '1','answer': '1','option1': '0.5','option2':'0','option3': '1',},
        {'value1': '4','operator': '÷','value2': '5','answer': '0.8','option1': '0.3','option2': '0.7','option3': '0.8',},
        {'value1': '10','operator': '÷','value2': '6','answer': '1.6','option1': '1.1','option2': '1.6','option3': '1',},
        {'value1': '6','operator': '÷','value2': '9','answer': '0.6','option1': '0.6','option2': '1.9','option3': '0.9',},
        {'value1': '2','operator': '÷','value2': '3','answer': '0.6','option1': '1.9','option2': '0.6','option3': '0.9',},
        {'value1': '5','operator': '÷','value2': '7','answer': '0.7','option1': '0.7','option2': '1.9','option3': '0.6',},
        {'value1': '3','operator': '÷','value2': '3','answer': '1','option1': '3','option2': '1','option3': '0',},
        {'value1': '9','operator': '÷','value2': '4','answer': '2.25','option1': '1.97','option2': '2.25','option3': '1.45',},
    ],
    [
        {'value1': '12','operator': '÷','value2': '29','answer': '0.4','option1': '1.29','option2': '0.4','option3': '0.69',},
        {'value1': '14','operator': '÷','value2': '9','answer': '1.5','option1': '1.5','option2': '1.90','option3': '1.87',},
        {'value1': '16','operator': '÷','value2': '56','answer': '0.28','option1': '1.99','option2': '0.28','option3': '2.89',},
        {'value1': '5','operator': '÷','value2': '50','answer': '0.1','option1': '0.1','option2': '0.13','option3': '0.9',},
        {'value1': '9','operator': '÷','value2': '18','answer': '0.5','option1': '0.90','option2': '0.34','option3': '0.5',},
        {'value1': '7','operator': '÷','value2': '66','answer': '0.10','option1': '0.10','option2': '0.30','option3': '0.5',},
        {'value1': '6','operator': '÷','value2': '89','answer': '0.06','option1': '0.09','option2': '0.06','option3': '2.10',},
        {'value1': '18','operator': '÷','value2': '96','answer': '0.18','option1': '0.18','option2': '0.09','option3': '7.10',},
        {'value1': '8','operator': '÷','value2': '36','answer': '0.20','option1': '0.09','option2': '0.20','option3': '0.90',},
        {'value1': '19','operator': '÷','value2': '74','answer': '0.25','option1': '3.09','option2': '0.25','option3': '6.90',},
    ],
    // Hard questions
    [
        {'value1': '144', 'operator': '÷', 'value2': '12', 'answer': '12', 'option1': '12', 'option2': '10', 'option3': '11'},
        {'value1': '256', 'operator': '÷', 'value2': '16', 'answer': '16', 'option1': '18', 'option2': '15', 'option3': '16'},
        {'value1': '225', 'operator': '÷', 'value2': '15', 'answer': '15', 'option1': '14', 'option2': '15', 'option3': '16'},
        {'value1': '289', 'operator': '÷', 'value2': '17', 'answer': '17', 'option1': '17', 'option2': '16', 'option3': '18'},
        {'value1': '324', 'operator': '÷', 'value2': '18', 'answer': '18', 'option1': '17', 'option2': '19', 'option3': '18'},
        {'value1': '361', 'operator': '÷', 'value2': '19', 'answer': '19', 'option1': '18', 'option2': '20', 'option3': '19'},
        {'value1': '400', 'operator': '÷', 'value2': '20', 'answer': '20', 'option1': '21', 'option2': '20', 'option3': '19'},
        {'value1': '441', 'operator': '÷', 'value2': '21', 'answer': '21', 'option1': '21', 'option2': '20', 'option3': '22'},
        {'value1': '484', 'operator': '÷', 'value2': '22', 'answer': '22', 'option1': '23', 'option2': '22', 'option3': '21'},
        {'value1': '529', 'operator': '÷', 'value2': '23', 'answer': '23', 'option1': '23', 'option2': '22', 'option3': '24'},
    ],
    // Extreme questions
    [
        {'value1': '123456', 'operator': '÷', 'value2': '123', 'answer': '1004', 'option1': '1004', 'option2': '1003', 'option3': '1005'},
        {'value1': '654321', 'operator': '÷', 'value2': '123', 'answer': '5317', 'option1': '5316', 'option2': '5317', 'option3': '5318'},
        {'value1': '987654', 'operator': '÷', 'value2': '246', 'answer': '4015', 'option1': '4015', 'option2': '4014', 'option3': '4016'},
        {'value1': '543210', 'operator': '÷', 'value2': '135', 'answer': '4024', 'option1': '4023', 'option2': '4024', 'option3': '4025'},
        {'value1': '789012', 'operator': '÷', 'value2': '234', 'answer': '3372', 'option1': '3372', 'option2': '3371', 'option3': '3373'},
        {'value1': '135791', 'operator': '÷', 'value2': '111', 'answer': '1222', 'option1': '1221', 'option2': '1223', 'option3': '1222'},
        {'value1': '246802', 'operator': '÷', 'value2': '202', 'answer': '1221', 'option1': '1220', 'option2': '1221', 'option3': '1222'},
        {'value1': '369258', 'operator': '÷', 'value2': '321', 'answer': '1150', 'option1': '1150', 'option2': '1149', 'option3': '1151'},
        {'value1': '654987', 'operator': '÷', 'value2': '567', 'answer': '1155', 'option1': '1154', 'option2': '1155', 'option3': '1156'},
        {'value1': '888888', 'operator': '÷', 'value2': '444', 'answer': '2002', 'option1': '2001', 'option2': '2003', 'option3': '2002'},
    ]
];


const divideEasyValues = () => {
    if(count < 10){
        value1.textContent = allLevelDivideOperators[0][count].value1;
        operator.textContent = allLevelDivideOperators[0][count].operator;
        value2.textContent = allLevelDivideOperators[0][count].value2;
        option1.textContent = allLevelDivideOperators[0][count].option1;
        option2.textContent = allLevelDivideOperators[0][count].option2;
        option3.textContent = allLevelDivideOperators[0][count].option3;
    } else{
        gameBar.style.transform = `scale(0)`;
        document.querySelector('.rightEle').innerHTML = right;
        sweetAlert();

        startingArea.style.display = 'flex';
        setTimeout(() => startingArea.style.transform = `scale(1)`, 300);
    }
};

const divideNormalValues = () => {
    if(count < 10){
        value1.textContent = allLevelDivideOperators[1][count].value1;
        operator.textContent = allLevelDivideOperators[1][count].operator;
        value2.textContent = allLevelDivideOperators[1][count].value2;
        option1.textContent = allLevelDivideOperators[1][count].option1;
        option2.textContent = allLevelDivideOperators[1][count].option2;
        option3.textContent = allLevelDivideOperators[1][count].option3;
    } else{
        gameBar.style.transform = `scale(0)`;
        document.querySelector('.rightEle').innerHTML = right;
        sweetAlert();

        startingArea.style.display = 'flex';
        setTimeout(() => startingArea.style.transform = `scale(1)`, 300);
    }
};
const divideHardValues = () => {
    if(count < 10){
        value1.textContent = allLevelDivideOperators[2][count].value1;
        operator.textContent = allLevelDivideOperators[2][count].operator;
        value2.textContent = allLevelDivideOperators[2][count].value2;
        option1.textContent = allLevelDivideOperators[2][count].option1;
        option2.textContent = allLevelDivideOperators[2][count].option2;
        option3.textContent = allLevelDivideOperators[2][count].option3;
    } else{
        gameBar.style.transform = `scale(0)`;
        document.querySelector('.rightEle').innerHTML = right;
        sweetAlert();

        startingArea.style.display = 'flex';
        setTimeout(() => startingArea.style.transform = `scale(1)`, 300);
    }
};
const divideExtremeValues = () => {
    if(count < 10){
        value1.textContent = allLevelDivideOperators[3][count].value1;
        operator.textContent = allLevelDivideOperators[3][count].operator;
        value2.textContent = allLevelDivideOperators[3][count].value2;
        option1.textContent = allLevelDivideOperators[3][count].option1;
        option2.textContent = allLevelDivideOperators[3][count].option2;
        option3.textContent = allLevelDivideOperators[3][count].option3;
    } else{
        gameBar.style.transform = `scale(0)`;
        document.querySelector('.rightEle').innerHTML = right;
        sweetAlert();

        startingArea.style.display = 'flex';
        setTimeout(() => startingArea.style.transform = `scale(1)`, 300);
    }
};
