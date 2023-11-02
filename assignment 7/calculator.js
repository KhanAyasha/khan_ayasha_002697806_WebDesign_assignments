$(document).ready(function() {

    const regNumber = /^[\d]+$/;
    let isNumber1InValid = true,  isNumber2InValid = true;
    
    $('#number1').on('input', function () {
        const value = $(this).val();
        if(value === '' || value === 'NaN' || !value.trim().match(regNumber)) {
            console.log(value);
            display('number1', true);
            isNumber1InValid = true;
        } else {
            display('number1', false);
            isNumber1InValid = false;
        }
    });
    
    $('#number2').on('input', function () {
        const value = $(this).val();
        if(value === '' || value === 'NaN' || !value.trim().match(regNumber)) {
            console.log(value);
            display('number2', true);
            isNumber2InValid = true;
        } else {
            display('number1', false);
            isNumber2InValid = false;
        }
    });

    const display = (elementName, isInValid) => {
        if (isInValid) {
            $(`#error_${elementName}`).css("display", "block");
            $(`#myForm [name="${elementName}"]`).css("border", "2px solid red");
        } else {
            $(`#error_${elementName}`).css("display", "none");
            $(`#myForm [name="${elementName}"]`).css("border", "");
        }
    };

    
});


const calculator = (operator, number1, number2) => {
    switch (operator) {
        case 'add':
            console.log(number1 + number2);
            return number1 + number2;
            
            break;
        case 'substract':
            return number1 - number2;
            break;
        case 'multiply':
            return number1 * number2;
            break;
        case 'divide':
            if (number2 === 0) {
                console.log(number1 / number2);
                return 'Infinite or Division by zero';
            }
            console.log(number1 / number2);
            return number1 / number2;
        default:
            return 'Invalid operation';
    }
};


$('#add').on('click', (event) => {
    event.preventDefault();
    var a = parseFloat($('#number1').val());
    console.log(a);
    var b = parseFloat($('#number2').val());
    console.log(b);
    var result = calculator('add', a, b);
    console.log(result);
    $('#result').val(result);
});

$('#substract').on('click', (event) => {
    event.preventDefault();
    var a = parseFloat($('#number1').val());
    console.log(a);
    var b = parseFloat($('#number2').val());
    console.log(b);
    var result = calculator('substract', a, b);
    console.log(result);
    $('#result').val(result);
});

$('#multiply').on('click', (event) => {
    event.preventDefault();
    var a = parseFloat($('#number1').val());
    console.log(a);
    var b = parseFloat($('#number2').val());
    console.log(b);
    var result = calculator('multiply', a, b);
    console.log(result);
    $('#result').val(result);
});

$('#divide').on('click', (event) => {
    event.preventDefault();
    var a = parseFloat($('#number1').val());
    console.log(a);
    var b = parseFloat($('#number2').val());
    console.log(b);
    var result = calculator('divide', a, b);
    console.log(result);
    $('#result').val(result);
});

