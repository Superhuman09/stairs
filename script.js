let lvl = +prompt('num of stairs')
let symb1 = prompt('first sign')
let symb2 = prompt('last sign')

for(let i = 0; i < lvl; i++){
    console.log(symb2);
    symb2 = symb2 + symb1;
    
}