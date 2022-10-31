import { validar } from "./inputs.js";

const inputs = document.querySelectorAll("input");
 inputs.forEach((input) =>{
    input.addEventListener("focus", (evento) =>{
        const parentInput = evento.target.parentElement;
        parentInput.style.borderColor= "#d6773b";
    });
    input.addEventListener("blur", (evento) =>{
        const parentInput = evento.target.parentElement;
        parentInput.style.borderColor= "#000000";
        validar(evento.target);
    });


    
});



