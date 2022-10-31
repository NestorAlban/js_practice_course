const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const input1 = document.querySelector('#number_1');
const input2 = document.querySelector('#number_2');
const btnsum = document.querySelector('#bttnSuma');
const result = document.querySelector('#result');

function print_result(value1, value2, symbol, fvalue) {
    value_str = String(fvalue)
    result_text = `Resultado: ${value1} ${symbol} ${value2} = ${fvalue}`
    result.innerText = result_text
    console.log(result_text)
}

function validate_num(number_to_validate){
    
    validate_str = number_to_validate.split(' ').join('');
    validation = false;
    if (validate_str == Number(validate_str)){
        console.log(`${validate_str} is a valid value.`)
        validation = true
    } else {
        console.log(`${validate_str} is not a valid value.`)
        result.innerText = `Please use only numbers.`
    };
    return validation
}

// Met 1

// form.addEventListener('submit', btn_sum)

// function btn_sum(event){
//     console.log({event});
//     event.preventDefault();
//     symbol = '+';
//     value1 = input1.value
//     value2 = input2.value
//     if (validate_num(value1) && validate_num(value2)){
//         op_result = Number(value1) + parseFloat(value2);
//         print_result(value1, value2, symbol, op_result);
//     }
// }

// Met 2

btnsum.addEventListener('click', btn_sum)

function btn_sum(event){
    symbol = '+';
    value1 = input1.value
    value2 = input2.value
    if (validate_num(value1) && validate_num(value2)){
        op_result = Number(value1) + parseFloat(value2);
        print_result(value1, value2, symbol, op_result);
    }
}
