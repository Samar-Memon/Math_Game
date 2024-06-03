let allLevelAdditionOperators = [
    // Easy questions
    [
        { 'value1': '2', 'operator': '+', 'value2': '3', 'answer': '5', 'option1': '4', 'option2': '5', 'option3': '6' },
        { 'value1': '4', 'operator': '+', 'value2': '5', 'answer': '9', 'option1': '7', 'option2': '9', 'option3': '11' },
        { 'value1': '6', 'operator': '+', 'value2': '7', 'answer': '13', 'option1': '10', 'option2': '13', 'option3': '16' },
        { 'value1': '8', 'operator': '+', 'value2': '9', 'answer': '17', 'option1': '15', 'option2': '17', 'option3': '19' },
        { 'value1': '10', 'operator': '+', 'value2': '11', 'answer': '21', 'option1': '20', 'option2': '21', 'option3': '22' },
        { 'value1': '12', 'operator': '+', 'value2': '13', 'answer': '25', 'option1': '23', 'option2': '25', 'option3': '27' },
        { 'value1': '14', 'operator': '+', 'value2': '15', 'answer': '29', 'option1': '27', 'option2': '29', 'option3': '31' },
        { 'value1': '16', 'operator': '+', 'value2': '17', 'answer': '33', 'option1': '30', 'option2': '33', 'option3': '36' },
        { 'value1': '18', 'operator': '+', 'value2': '19', 'answer': '37', 'option1': '35', 'option2': '37', 'option3': '39' },
        { 'value1': '20', 'operator': '+', 'value2': '21', 'answer': '41', 'option1': '40', 'option2': '41', 'option3': '42' },
    ],
    // Medium questions
    [
        { 'value1': '22', 'operator': '+', 'value2': '23', 'answer': '45', 'option1': '42', 'option2': '45', 'option3': '48' },
        { 'value1': '24', 'operator': '+', 'value2': '25', 'answer': '49', 'option1': '46', 'option2': '49', 'option3': '52' },
        { 'value1': '26', 'operator': '+', 'value2': '27', 'answer': '53', 'option1': '50', 'option2': '53', 'option3': '56' },
        { 'value1': '28', 'operator': '+', 'value2': '29', 'answer': '57', 'option1': '54', 'option2': '57', 'option3': '60' },
        { 'value1': '30', 'operator': '+', 'value2': '31', 'answer': '61', 'option1': '58', 'option2': '61', 'option3': '64' },
        { 'value1': '32', 'operator': '+', 'value2': '33', 'answer': '65', 'option1': '62', 'option2': '65', 'option3': '68' },
        { 'value1': '34', 'operator': '+', 'value2': '35', 'answer': '69', 'option1': '66', 'option2': '69', 'option3': '72' },
        { 'value1': '36', 'operator': '+', 'value2': '37', 'answer': '73', 'option1': '70', 'option2': '73', 'option3': '76' },
        { 'value1': '38', 'operator': '+', 'value2': '39', 'answer': '77', 'option1': '74', 'option2': '77', 'option3': '80' },
        { 'value1': '40', 'operator': '+', 'value2': '41', 'answer': '81', 'option1': '78', 'option2': '81', 'option3': '84' },
    ],
    // Hard questions
    [
        { 'value1': '42', 'operator': '+', 'value2': '43', 'answer': '85', 'option1': '82', 'option2': '85', 'option3': '88' },
        { 'value1': '44', 'operator': '+', 'value2': '45', 'answer': '89', 'option1': '86', 'option2': '89', 'option3': '92' },
        { 'value1': '46', 'operator': '+', 'value2': '47', 'answer': '93', 'option1': '90', 'option2': '93', 'option3': '96' },
        { 'value1': '48', 'operator': '+', 'value2': '49', 'answer': '97', 'option1': '94', 'option2': '97', 'option3': '100' },
        { 'value1': '50', 'operator': '+', 'value2': '51', 'answer': '101', 'option1': '98', 'option2': '101', 'option3': '104' },
        { 'value1': '52', 'operator': '+', 'value2': '53', 'answer': '105', 'option1': '102', 'option2': '105', 'option3': '108' },
        { 'value1': '54', 'operator': '+', 'value2': '55', 'answer': '109', 'option1': '106', 'option2': '109', 'option3': '112' },
        { 'value1': '56', 'operator': '+', 'value2': '57', 'answer': '113', 'option1': '110', 'option2': '113', 'option3': '116' },
        { 'value1': '58', 'operator': '+', 'value2': '59', 'answer': '117', 'option1': '114', 'option2': '117', 'option3': '120' },
        { 'value1': '60', 'operator': '+', 'value2': '61', 'answer': '121', 'option1': '118', 'option2': '121', 'option3': '124' },
    ],
    [
        {'value1': '12345', 'operator': '+', 'value2': '6789', 'answer': '19134', 'option1': '19134', 'option2': '19133', 'option3': '19135'},
        {'value1': '23456', 'operator': '+', 'value2': '7890', 'answer': '31346', 'option1': '31346', 'option2': '31347', 'option3': '31345'},
        {'value1': '34567', 'operator': '+', 'value2': '8901', 'answer': '43468', 'option1': '43468', 'option2': '43469', 'option3': '43467'},
        {'value1': '45678', 'operator': '+', 'value2': '9012', 'answer': '54690', 'option1': '54690', 'option2': '54691', 'option3': '54689'},
        {'value1': '56789', 'operator': '+', 'value2': '1234', 'answer': '58023', 'option1': '58023', 'option2': '58024', 'option3': '58022'},
        {'value1': '67890', 'operator': '+', 'value2': '2345', 'answer': '70235', 'option1': '70235', 'option2': '70236', 'option3': '70234'},
        {'value1': '78901', 'operator': '+', 'value2': '3456', 'answer': '82357', 'option1': '82357', 'option2': '82358', 'option3': '82356'},
        {'value1': '89012', 'operator': '+', 'value2': '4567', 'answer': '95679', 'option1': '95679', 'option2': '95680', 'option3': '95678'},
        {'value1': '90123', 'operator': '+', 'value2': '5678', 'answer': '95801', 'option1': '95801', 'option2': '95802', 'option3': '95800'},
        {'value1': '12345', 'operator': '+', 'value2': '6789', 'answer': '19134', 'option1': '19134', 'option2': '19135', 'option3': '19133'},
    ]
];

const additionEasyValues = () => {
    if(count < 10){
        value1.textContent = allLevelAdditionOperators[0][count].value1;
        operator.textContent = allLevelAdditionOperators[0][count].operator;
        value2.textContent = allLevelAdditionOperators[0][count].value2;
        option1.textContent = allLevelAdditionOperators[0][count].option1;
        option2.textContent = allLevelAdditionOperators[0][count].option2;
        option3.textContent = allLevelAdditionOperators[0][count].option3;
    } else{
        gameBar.style.transform = `scale(0)`;
        sweetAlert();

        startingArea.style.display = 'flex';
        setTimeout(() => startingArea.style.transform = `scale(1)`, 300);
    }
};

const additionNormalValues = () => {
    if(count < 10){
        value1.textContent = allLevelAdditionOperators[1][count].value1;
        operator.textContent = allLevelAdditionOperators[1][count].operator;
        value2.textContent = allLevelAdditionOperators[1][count].value2;
        option1.textContent = allLevelAdditionOperators[1][count].option1;
        option2.textContent = allLevelAdditionOperators[1][count].option2;
        option3.textContent = allLevelAdditionOperators[1][count].option3;
    } else{
        gameBar.style.transform = `scale(0)`;
        sweetAlert();

        startingArea.style.display = 'flex';
        setTimeout(() => startingArea.style.transform = `scale(1)`, 300);
    }
};
const additionHardValues = () => {
    if(count < 10){
        value1.textContent = allLevelAdditionOperators[2][count].value1;
        operator.textContent = allLevelAdditionOperators[2][count].operator;
        value2.textContent = allLevelAdditionOperators[2][count].value2;
        option1.textContent = allLevelAdditionOperators[2][count].option1;
        option2.textContent = allLevelAdditionOperators[2][count].option2;
        option3.textContent = allLevelAdditionOperators[2][count].option3;
    } else{
        gameBar.style.transform = `scale(0)`;
        sweetAlert();

        startingArea.style.display = 'flex';
        setTimeout(() => startingArea.style.transform = `scale(1)`, 300);
    }
};
const additionExtremeValues = () => {
    if(count < 10){
        value1.textContent = allLevelAdditionOperators[3][count].value1;
        operator.textContent = allLevelAdditionOperators[3][count].operator;
        value2.textContent = allLevelAdditionOperators[3][count].value2;
        option1.textContent = allLevelAdditionOperators[3][count].option1;
        option2.textContent = allLevelAdditionOperators[3][count].option2;
        option3.textContent = allLevelAdditionOperators[3][count].option3;
    } else{
        gameBar.style.transform = `scale(0)`;
        sweetAlert();

        startingArea.style.display = 'flex';
        setTimeout(() => startingArea.style.transform = `scale(1)`, 300);
    }
};

