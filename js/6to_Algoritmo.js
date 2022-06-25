let ParImpar = () => {
    let numero = parseInt(prompt("Ingresa el valor del número"));
    if (numero <= 0) {
        console.log("Ingresa un valor mayor que 0");
    }
    if(numero > 0){
        if(numero % 2 == 0){
            console.log("El valor del número es par");
        } else {
            console.log("El valor del número es impar");
        }
    }   
}

ParImpar();