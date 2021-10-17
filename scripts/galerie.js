let x = 1;

let bb = document.querySelector("#back");
let bn = document.querySelector("#next");

bb.onclick = () => fb();
bn.onclick = () => fn();
let action = setInterval(f, 4000);

function fn() {
    let i = document.getElementById(`galerie_image${x}`);
    i.style.display = "none";
    x++;
    if(x == 5 ) x = 1;
    let j = document.getElementById(`galerie_image${x}`);
    j.style.display = "block";
    console.log(j.src)
}

function fb() {
    let i = document.getElementById(`galerie_image${x}`);
    i.style.display = "none";
    x--;
    if(x == 0 ) x = 4;
    let j = document.getElementById(`galerie_image${x}`);
    j.style.display = "block";
    console.log(j.src)
}

function f(){
    let i = document.getElementById(`galerie_image${x}`);
    i.style.display = "none";
    x++;
    if(x == 5 ) x = 1;
    let j = document.getElementById(`galerie_image${x}`);
    j.style.display = "block";
}