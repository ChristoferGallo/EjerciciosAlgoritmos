let Adivino = () => {
    let maximo = 100;
    let minimo = 0;
    let noEncontrado = true;
    while(noEncontrado){
        let mitad = parseInt(minimo + ((maximo-minimo) / 2));
        if(((maximo - minimo) / 2 ) < 1) {
            noEncontrado = false
            alert("Tu número es el " + (parseInt(mitad) + 1));
        }
        let pregunta = confirm("Tu número es menor o igual a " + mitad);
        if(pregunta){
            maximo = mitad;
        } else {
            minimo = mitad;
        }
        console.log(minimo, maximo);
    }
}

Adivino();