const result = document.querySelector("#result");

let allowDecimal = true;    // if "." is used, set to false until new number comes
let clearScreen = true;     // after pressing a number, erase the prev number

export function clear() {
    result.textContent = '0';
    clearScreen = true;
    allowDecimal = true;
}
function addNumber(num) {
    if (clearScreen) {
        if (num == '0' && result.textContent == '0') return;
        allowDecimal = true;
        result.textContent = num;
    } else {
        if (result.textContent[result.textContent.length-1] == ')') {
            result.textContent = result.textContent.slice(0, -1) + num + ")";
        } else {
            result.textContent += num;
        }
    }
    clearScreen = false;
}
function prefix() {
    if (result.textContent[0] == '-') {
        if (result.textContent[1] == '(') {
            result.textContent = result.textContent.slice(2, -1);
        } else {
            result.textContent = result.textContent.slice(1);
        }
    } else {
        result.textContent = "-(" + result.textContent + ")";
    }
}
function mod() {
    clearScreen = false;
    allowDecimal = true;
    if (result.textContent[result.textContent.length-1] == ' ') {
        result.textContent = result.textContent.slice(0, -3) + " % ";
    } else {
        result.textContent += " % ";
    }
}
function add() {
    clearScreen = false;
    allowDecimal = true;
    if (result.textContent[result.textContent.length-1] == ' ') {
        result.textContent = result.textContent.slice(0, -3) + " + ";
    } else {
        result.textContent += " + ";
    }
}
function sub() {
    clearScreen = false;
    allowDecimal = true;
    if (result.textContent[result.textContent.length-1] == ' ') {
        result.textContent = result.textContent.slice(0, -3) + " - ";
    } else {
        result.textContent += " - ";
    }
}
function mult() {
    clearScreen = false;
    allowDecimal = true;
    if (result.textContent[result.textContent.length-1] == ' ') {
        result.textContent = result.textContent.slice(0, -3) + " * ";
    } else {
        result.textContent += " * ";
    }
}
function div() {
    clearScreen = false;
    allowDecimal = true;
    if (result.textContent[result.textContent.length-1] == ' ') {
        result.textContent = result.textContent.slice(0, -3) + " / ";
    } else {
        result.textContent += " / ";
    }
}
function dot() {
    if (allowDecimal) {
        result.textContent += '.';
        allowDecimal = false;
        clearScreen = false; // so that the '.0' is not erased
    }
}
function backspace() {
    if (result.textContent.length == 1) {
        clear();
    } else if (result.textContent[result.textContent.length-1] == ' ') {
        result.textContent = result.textContent.slice(0, -3);
    } else {
        result.textContent = result.textContent.slice(0, -1);
    }
}
function equals() {
    try {
        if (result.textContent == eval(result.textContent).toString()) return;
        result.textContent = +eval(result.textContent).toPrecision(13);
    } catch (error) {
        clear();
        result.textContent = "Undefined";
        exit;
    }
    clearScreen = true;
    allowDecimal = false;
}

// click events
window.addEventListener('click', (e) => {
    let x = e.target.id;
    switch(x) {
        case 'ac':
            clear();
            break;
        case 'prefix':
            prefix();
            break;
        case 'mod':
            mod();
            break;
        case 'add':
            add();
            break;
        case 'sub':
            sub();
            break;
        case 'x':
            mult();
            break;
        case 'division':
            div();
            break;
        case 'equals':
            equals();
            break;
        case 'dot':
            dot();
            break;
        case 'n0':
            addNumber("0");
            break;
        case 'n1':
            addNumber("1");
            break;
        case 'n2':
            addNumber("2");
            break;
        case 'n3':
            addNumber("3");
            break;
        case 'n4':
            addNumber("4");
            break;
        case 'n5':
            addNumber("5");
            break;
        case 'n6':
            addNumber("6");
            break;
        case 'n7':
            addNumber("7");
            break;
        case 'n8':
            addNumber("8");
            break;
        case 'n9':
            addNumber("9");
            break;
        default:
            break;
    }
});

// keyboard events
const calculator = document.querySelector('.calculator');
let calcFocus = false;      // true when calculator is selected (to listen for numpad by default)

window.addEventListener('click', el => {
    if (calculator.contains(el.target) || calculator == el.target ) {
        if (calculator.style.display == 'flex') {
            calcFocus = true;
        }
    }
    else calcFocus = false;
});

window.addEventListener("keydown", (e) => {
    if (calcFocus) {
        let x = e.key;
        switch(x) {
            case 'Delete':
                clear();
                break;
            case 'Backspace':
                backspace();
                break;
            case '%':
                mod();
                break;
            case '+':
                add();
                break;
            case '-':
                sub();
                break;
            case '*':
                mult();
                break;
            case '/':
                div();
                break;
            case '=':
                equals();
                break;
            case 'Enter':
                equals();
                break;
            case '.':
                dot();
                break;
            case '0':
                addNumber("0");
                break;
            case '1':
                addNumber("1");
                break;
            case '2':
                addNumber("2");
                break;
            case '3':
                addNumber("3");
                break;
            case '4':
                addNumber("4");
                break;
            case '5':
                addNumber("5");
                break;
            case '6':
                addNumber("6");
                break;
            case '7':
                addNumber("7");
                break;
            case '8':
                addNumber("8");
                break;
            case '9':
                addNumber("9");
                break;
            default:
                break;
        }
    }
    
});