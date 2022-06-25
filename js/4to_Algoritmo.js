let Multiplo3 = () => {
    n1 = parseInt(prompt("Ingresa el valor del número"));
    if(n1 >= 100 && n1 <= 200){
        console.log("El valor ingresado esta dentro del rango");
        if(n1 % 3 == 0){
            console.log("El valor ingresado es multiplo de 3");
        } else {
            console.log("El valor ingresado no es multiplo de 3");
        }
    } 
}
    
Multiplo3();