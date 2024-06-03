let allLevelSubtractionOperators = [
    // Easy questions
    [
        { 'value1': '5', 'operator': '-', 'value2': '3', 'answer': '2', 'option1': '1', 'option2': '2', 'option3': '3' },
        { 'value1': '8', 'operator': '-', 'value2': '5', 'answer': '3', 'option1': '2', 'option2': '9', 'option3': '3' },
        { 'value1': '11', 'operator': '-', 'value2': '6', 'answer': '5', 'option1': '5', 'option2': '1', 'option3': '6' },
        { 'value1': '14', 'operator': '-', 'value2': '7', 'answer': '7', 'option1': '7', 'option2': '4', 'option3': '8' },
        { 'value1': '17', 'operator': '-', 'value2': '8', 'answer': '9', 'option1': '8', 'option2': '11', 'option3': '9' },
        { 'value1': '20', 'operator': '-', 'value2': '9', 'answer': '11', 'option1': '10', 'option2': '13', 'option3': '11' },
        { 'value1': '23', 'operator': '-', 'value2': '10', 'answer': '13', 'option1': '12', 'option2': '13', 'option3': '14' },
        { 'value1': '26', 'operator': '-', 'value2': '11', 'answer': '15', 'option1': '14', 'option2': '15', 'option3': '16' },
        { 'value1': '29', 'operator': '-', 'value2': '12', 'answer': '17', 'option1': '16', 'option2': '19', 'option3': '17' },
        { 'value1': '32', 'operator': '-', 'value2': '13', 'answer': '19', 'option1': '18', 'option2': '19', 'option3': '20' },
    ],
    // Medium questions
    [
        { 'value1': '35', 'operator': '-', 'value2': '15', 'answer': '20', 'option1': '20', 'option2': '21', 'option3': '29' },
        { 'value1': '40', 'operator': '-', 'value2': '18', 'answer': '22', 'option1': '20', 'option2': '22', 'option3': '24' },
        { 'value1': '45', 'operator': '-', 'value2': '20', 'answer': '25', 'option1': '23', 'option2': '23', 'option3': '25' },
        { 'value1': '50', 'operator': '-', 'value2': '22', 'answer': '28', 'option1': '26', 'option2': '28', 'option3': '30' },
        { 'value1': '55', 'operator': '-', 'value2': '24', 'answer': '31', 'option1': '29', 'option2': '30', 'option3': '31' },
        { 'value1': '60', 'operator': '-', 'value2': '26', 'answer': '34', 'option1': '34', 'option2': '30', 'option3': '36' },
        { 'value1': '65', 'operator': '-', 'value2': '28', 'answer': '37', 'option1': '39', 'option2': '31', 'option3': '37' },
        { 'value1': '70', 'operator': '-', 'value2': '30', 'answer': '40', 'option1': '38', 'option2': '40', 'option3': '42' },
        { 'value1': '75', 'operator': '-', 'value2': '32', 'answer': '43', 'option1': '41', 'option2': '43', 'option3': '45' },
        { 'value1': '80', 'operator': '-', 'value2': '34', 'answer': '46', 'option1': '46', 'option2': '41', 'option3': '49' },
    ],
    // Hard questions
[
    { 'value1': '85', 'operator': '-', 'value2': '36', 'answer': '49', 'option1': '49', 'option2': '29', 'option3': '51' },
    { 'value1': '90', 'operator': '-', 'value2': '38', 'answer': '52', 'option1': '50', 'option2': '50', 'option3': '52' },
    { 'value1': '95', 'operator': '-', 'value2': '40', 'answer': '55', 'option1': '53', 'option2': '55', 'option3': '57' },
    { 'value1': '100', 'operator': '-', 'value2': '42', 'answer': '58', 'option1': '56', 'option2': '59', 'option3': '58' },
    { 'value1': '105', 'operator': '-', 'value2': '44', 'answer': '61', 'option1': '59', 'option2': '49', 'option3': '61' },
    { 'value1': '110', 'operator': '-', 'value2': '46', 'answer': '64', 'option1': '64', 'option2': '62', 'option3': '66' },
    { 'value1': '115', 'operator': '-', 'value2': '48', 'answer': '67', 'option1': '65', 'option2': '68', 'option3': '67' },
    { 'value1': '120', 'operator': '-', 'value2': '50', 'answer': '70', 'option1': '68', 'option2': '70', 'option3': '72' },
    { 'value1': '125', 'operator': '-', 'value2': '52', 'answer': '73', 'option1': '73', 'option2': '72', 'option3': '75' },
    { 'value1': '130', 'operator': '-', 'value2': '54', 'answer': '76', 'option1': '74', 'option2': '71', 'option3': '76' },
],
// Extreme questions
[
    { 'value1': '135', 'operator': '-', 'value2': '56', 'answer': '79', 'option1': '77', 'option2': '89', 'option3': '79' },
    { 'value1': '140', 'operator': '-', 'value2': '58', 'answer': '82', 'option1': '80', 'option2': '84', 'option3': '82' },
    { 'value1': '145', 'operator': '-', 'value2': '60', 'answer': '85', 'option1': '85', 'option2': '81', 'option3': '87' },
    { 'value1': '150', 'operator': '-', 'value2': '62', 'answer': '88', 'option1': '88', 'option2': '83', 'option3': '90' },
    { 'value1': '155', 'operator': '-', 'value2': '64', 'answer': '93', 'option1': '89', 'option2': '91', 'option3': '93' },
    { 'value1': '160', 'operator': '-', 'value2': '66', 'answer': '92', 'option1': '92', 'option2': '94', 'option3': '96' },
    { 'value1': '165', 'operator': '-', 'value2': '68', 'answer': '99', 'option1': '95', 'option2': '97', 'option3': '99' },
    { 'value1': '170', 'operator': '-', 'value2': '69', 'answer': '101', 'option1': '101', 'option2': '100', 'option3': '102' },
    { 'value1': '175', 'operator': '-', 'value2': '72', 'answer': '101', 'option1': '101', 'option2': '103', 'option3': '105' },
    { 'value1': '180', 'operator': '-', 'value2': '74', 'answer': '108', 'option1': '104', 'option2': '106', 'option3': '108' },
]
];

const subtractionEasyValues = () => {
    if(count < 10){
        value1.textContent = allLevelSubtractionOperators[0][count].value1;
        operator.textContent = allLevelSubtractionOperators[0][count].operator;
        value2.textContent = allLevelSubtractionOperators[0][count].value2;
        option1.textContent = allLevelSubtractionOperators[0][count].option1;
        option2.textContent = allLevelSubtractionOperators[0][count].option2;
        option3.textContent = allLevelSubtractionOperators[0][count].option3;
    } else{
        gameBar.style.transform = `scale(0)`;
        document.querySelector('.rightEle').innerHTML = right;
        document.querySelector('.wrongEle').innerHTML = wrong;
        sweetAlert();
        startingArea.style.display = 'flex';
        setTimeout(() => startingArea.style.transform = `scale(1)`, 300);
    }
};

const subtractionNormalValues = () => {
    if(count < 10){
        value1.textContent = allLevelSubtractionOperators[1][count].value1;
        operator.textContent = allLevelSubtractionOperators[1][count].operator;
        value2.textContent = allLevelSubtractionOperators[1][count].value2;
        option1.textContent = allLevelSubtractionOperators[1][count].option1;
        option2.textContent = allLevelSubtractionOperators[1][count].option2;
        option3.textContent = allLevelSubtractionOperators[1][count].option3;
    } else{
        gameBar.style.transform = `scale(0)`;
        document.querySelector('.rightEle').innerHTML = right;
        document.querySelector('.wrongEle').innerHTML = wrong;
        sweetAlert();
        startingArea.style.display = 'flex';
        setTimeout(() => startingArea.style.transform = `scale(1)`, 300);
    }
};
const subtractionHardValues = () => {
    if(count < 10){
        value1.textContent = allLevelSubtractionOperators[2][count].value1;
        operator.textContent = allLevelSubtractionOperators[2][count].operator;
        value2.textContent = allLevelSubtractionOperators[2][count].value2;
        option1.textContent = allLevelSubtractionOperators[2][count].option1;
        option2.textContent = allLevelSubtractionOperators[2][count].option2;
        option3.textContent = allLevelSubtractionOperators[2][count].option3;
    } else{
        gameBar.style.transform = `scale(0)`;
        document.querySelector('.rightEle').innerHTML = right;
        document.querySelector('.wrongEle').innerHTML = wrong;
        sweetAlert();
        startingArea.style.display = 'flex';
        setTimeout(() => startingArea.style.transform = `scale(1)`, 300);
    }
};
const subtractionExtremeValues = () => {
    if(count < 10){
        value1.textContent = allLevelSubtractionOperators[3][count].value1;
        operator.textContent = allLevelSubtractionOperators[3][count].operator;
        value2.textContent = allLevelSubtractionOperators[3][count].value2;
        option1.textContent = allLevelSubtractionOperators[3][count].option1;
        option2.textContent = allLevelSubtractionOperators[3][count].option2;
        option3.textContent = allLevelSubtractionOperators[3][count].option3;
    } else{
        gameBar.style.transform = `scale(0)`;
        document.querySelector('.rightEle').innerHTML = right;
        document.querySelector('.wrongEle').innerHTML = wrong;
        sweetAlert();
        startingArea.style.display = 'flex';
        setTimeout(() => startingArea.style.transform = `scale(1)`, 300);
    }
};
