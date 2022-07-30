import {clear} from './calc.js';
import {clearTerminal} from './terminal.js';

// Calculator 
const calcIcon = document.getElementById("calc-icon");
const x_cal = document.querySelector(".x.cal");
const minim_cal = document.querySelector(".minimize.cal");
const calculator = document.querySelector(".calculator");
let calcMinimized = false;

[calcIcon, x_cal, minim_cal].forEach( item => {
    item.addEventListener("click", () => {
        if (item == x_cal) clear();
        if (calcMinimized) {
            calculator.style.display = "flex";
        }
        if (!calcMinimized) {
            calculator.style.display = "none";
        }
        calcMinimized = !calcMinimized;
    });
});

// Terminal
const termIcon = document.getElementById("term-icon");
const x_term = document.querySelector(".x.term");
const minim_term = document.querySelector(".minimize.term");
const terminal = document.querySelector(".terminal");
let termMinimized = false;

[termIcon, x_term, minim_term].forEach( item => {
    item.addEventListener("click", () => {
        if (item == x_term) clearTerminal();
        if (termMinimized) {
            terminal.style.display = "flex";
        }
        if (!termMinimized) {
            terminal.style.display = "none";
        }
        termMinimized = !termMinimized;
    });
});

// Set the Date in toolbar
const date = document.querySelector('.time');
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function setDate() {
    let d = new Date();
    let day = days[d.getDay()].slice(0,3);
    let month = months[d.getMonth()];
    let time = d.getHours().toString().padStart(2,'0') + ":" + d.getMinutes().toString().padStart(2,'0');
    date.textContent = day + " " + d.getDate() + ". " + month + " " + time;
}

setInterval(setDate, 1000);