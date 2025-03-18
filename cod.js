document.addEventListener("DOMContentLoaded", function () {
    const inputField = document.querySelector(".input input");
    const buttons = document.querySelectorAll(".buttons button");

    let currentInput = "";

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            const value = this.textContent;

            if (value === "=") {
                try {
                    currentInput = eval(currentInput).toString();
                } catch {
                    currentInput = "Erro";
                }
            } else {
                currentInput += value;
            }

            inputField.value = currentInput;
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const calBody = document.querySelector('#cal-body');
    
    calBody.addEventListener('mousemove', (e) => {
        const rect = calBody.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / centerY * 10;
        const rotateY = (centerX - x) / centerX * 10;
        
        calBody.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });
    
    calBody.addEventListener('mouseleave', () => {
        calBody.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const inputField = document.querySelector(".input input");
    const buttons = document.querySelectorAll(".buttons button");

    let currentInput = "";

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            const value = this.textContent;

            if (value === "←") {
                currentInput = currentInput.slice(0, -1);
            } else if (value === "=") {
                try {
                    currentInput = eval(currentInput).toString();
                } catch {
                    currentInput = "Erro";
                }
            } else {
                currentInput += value;
            }

            inputField.value = currentInput;
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const calBody = document.querySelector('#cal-body');
    
    calBody.addEventListener('mousemove', (e) => {
        const rect = calBody.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / centerY * 10;
        const rotateY = (centerX - x) / centerX * 10;
        
        calBody.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });
    
    calBody.addEventListener('mouseleave', () => {
        calBody.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
    });
});