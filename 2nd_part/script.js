const h1 = document.querySelector('h1');
// const form = document.querySelector('#form');
const input1 = document.querySelector('#number_1');
const input2 = document.querySelector('#number_2');
const btnsum = document.querySelector('#bttnSuma');
const btnsubs = document.querySelector('#bttnResta');
const btnmulti = document.querySelector('#bttnMultiplicacion');
const btndiv = document.querySelector('#bttnDivision');
const result = document.querySelector('#result');

btnsum.addEventListener('click', btn_sum);
btnsubs.addEventListener('click', btn_subs);
btnmulti.addEventListener('click', btn_multi);
btndiv.addEventListener('click', btn_div);

function print_result(value1, value2, symbol, fvalue) {
    value_str = String(fvalue)
    result_text = `Resultado: ${value1} ${symbol} ${value2} = ${fvalue}`
    result.innerText = result_text
    console.log(result_text)
}

function validate_num(number_to_validate){
    validate_str = number_to_validate.split(' ').join('')
    validation = false
    if (validate_str == Number(validate_str)){
        console.log(`${validate_str} is a valid value.`)
        validation = true
    } else {
        console.log(`${validate_str} is not a valid value.`)
        result.innerText = `Please use only numbers.`
    }
    return validation
}

function btn_sum(){
    symbol = '+';
    value1 = input1.value
    value2 = input2.value
    if (validate_num(value1) && validate_num(value2)){
        op_result = Number(value1) + parseFloat(value2);
        print_result(value1, value2, symbol, op_result);
    }
}

function btn_subs(){
    symbol = '-';
    value1 = input1.value
    value2 = input2.value
    if (validate_num(value1) && validate_num(value2)){
        op_result = Number(value1) - parseFloat(value2);
        print_result(value1, value2, symbol, op_result);
    }
}

function btn_multi(){
    symbol = '*';
    value1 = input1.value
    value2 = input2.value
    if (validate_num(value1) && validate_num(value2)){
        op_result = Number(value1) * parseFloat(value2);
        print_result(value1, value2, symbol, op_result);
    }
}

function btn_div(){
    symbol = '/';
    value1 = input1.value
    value2 = input2.value
    if (validate_num(value1) && validate_num(value2)){
        op_result = Number(value1) / parseFloat(value2);
        print_result(value1, value2, symbol, op_result);
    }
}

