let inputId = 0;
let inputTerm = '';

inputTerm = document.querySelector("#input-");
inputTerm.addEventListener('keypress', (e) => {
    grabValue(e);
});

function grabValue(e) {
    let command = e.target.value;
    if (e.key == 'Enter') {
        executeCommand(command);
    }
}

function executeCommand(command) {
    // Number 13 is the "Enter" key on the keyboard
    let answer = document.createElement("p");
    switch (command) {
        case 'help':
            answer.innerHTML =  "<b>'author'</b> returns author's name<br><b>'time'</b> returns the current time<br>"+
                                "<b>'github'</b> returns author's github profile<br><b>'clear'</b> clears the Terminal";
            answer.style.color = "green";
            break;
        case 'author':
            answer.innerHTML = "Dimitrios Pigkas"
            break;
        case 'time':
            let today = new Date();
            let date = today.getDate()+"/"+(today.getMonth()+1)+'/'+today.getFullYear();
            let time = today.getHours() + ":" + today.getMinutes();
            answer.innerHTML = date + "\t" + time;
            break;
        case 'github':
            answer.innerHTML = "<a href='https://github.com/takispig' style='color: #99ccff'>https://github.com/takispig</a>"
            break;
        case 'clear':
            clearTerminal();
            return; // exit, otherwise a newline will be created (avoid 2 inputs)
        default:
            answer.innerHTML = "Unknown command. See 'help' for available commands"
    }
    document.querySelector(".terminal-body").appendChild(answer);
    // add the input after the answer
    let newLine = document.createElement("div");
    newLine.className = "terminal-input";
    newLine.innerHTML = "<p>></p><input type='text' class='input-term' id='input-" + inputId + "' name='command' onkeydown='executeCommand(this.value)'/>"
    document.querySelector(".terminal-body").appendChild(newLine);
    // focus on the new line (that's why id=input-$(inputId) has been created)
    document.getElementById("input-"+inputId).focus();
    inputTerm = document.querySelector("#input-"+inputId);
    inputTerm.addEventListener('keypress', (e) => grabValue(e));
    ++inputId;
}

export function clearTerminal() {
    document.querySelector(".terminal-body").innerHTML = '<div class="help">Type \'help\' to check commands</div><div class="terminal-input"><p>></p><input type="text" name="command" class="input-term" id="input-"/></div>';
    document.getElementById("input-").focus();
    document.getElementById("input-").addEventListener('keypress', (e) => grabValue(e));
}