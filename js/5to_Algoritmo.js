let Suma = () => {
    let a = parseInt(prompt("Ingresa el primer número"));
    console.log("El valor de a es: ", a);
    let b = parseInt(prompt("Ingresa el segundo número"));
    console.log("El valor de b es: ", b);
    let c = parseInt(prompt("Ingresa el tercer número"));
    console.log("El valor de c es: ", c);
    let suma1 = b + c;
    let suma2 = a + c;
    let suma3 = a + b;
    if(a == suma1){
        console.log("El valor de a es la suma de b y c");
    }
    
    if(b == suma2){
        console.log("El valor de b es la suma de a y c");
    }
    
    if(c == suma3){
        console.log("El valor de c es la suma de a y b");
    }
}

Suma();