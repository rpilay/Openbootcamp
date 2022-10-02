let factorial=1;
let i =1;
while(i > 0){
    factorial=factorial*i;
    if(i<10){
        i++;
    }
    else
        break;
    
}
console.log( `El factorial de 10 es : ${factorial}`);