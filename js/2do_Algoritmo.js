let Menor = () => {
    n1 = parseInt(prompt("Ingresa el primer valor"));
    if(n1 >= 1 && n1 <= 100){
        console.log("El primer valor ingresado esta dentro del rango");
        n2 = parseInt(prompt("Ingresa el segundo valor"));
        if(n2 >= 1 && n2 <= 100) {
            n3 = parseInt(prompt("Ingresa el tercer valor"));
            console.log("El segundo valor ingresado esta dentro del rango");
            if(n3 >= 1 && n3 <= 100) {
                console.log("El tercer valor ingresado esta dentro del rango")
                
                if(n1 < n2 && n1 < n3){
                    console.log("El primer valor ingresado es el menor")
                }
                
                if(n2 < n1 && n2 < n3){
                    console.log("El segundo valor ingresado es el menor")
                }
                
                if(n3 < n1 && n3 < n1){
                    console.log("El tercer valor ingresado es el menor")
                }
            }
        } 
    }
}

Menor();