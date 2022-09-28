let content = document.querySelector("#content");
let btn = document.querySelector("#btn");
let input_color_code = document.querySelector("#input_id");


btn.addEventListener("click", function(){
    let bgcolor = hexadecimal_color();
    content.style.backgroundColor = bgcolor;
    input_color_code.value = bgcolor;
 });



function hexadecimal_color(){
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);

    return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`
};



