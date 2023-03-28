const producto = [
{ nombre: "matafuego", precio: 1500},

{ nombre: "manguera", precio: 150000},

{ nombre: "cinta", precio: 5000},

{ nombre: "matafuego 5kg", precio: 28500}

];

let carrito = []

let seleccion = prompt("¿Queres realizar una compra?")

while(seleccion != "si" && seleccion != "no"){
alert("por favor ingresa si o no")
seleccion = prompt("¿Queres visitar la Tienda Online?") 
}


if(seleccion == "si"){
    alert("Te estas dirigiendo a nuestra lista de productos")
    let todoslosProductos = producto.map(
        (producto) => producto.nombre + " " + producto.precio + "$");
    alert(todoslosProductos.join( " - "))
}
else if (seleccion == "no"){
alert ("Está bien, no vuelvas más.")}

while(seleccion != "no"){
    let producto = prompt("Agrega un producto al carrito!")
    let precio = 0 

    if(producto == "matafuego" || producto == "matafuego 5kg" || producto == "cinta" || producto == "manguera") {
        switch(producto){
            case "matafuego":
            precio = 18500;
            break;

            case "matafuego 5kg ":
            precio = 58500;
            break;

            case "Cinta":
            precio = 1500;
            break;

            case "Manguera":
            precio = 180000;
            break;
        }
        let unidades = parseInt(prompt("¿Cuántas Unidades vas a llevar?"))
        carrito.push({producto,unidades,precio})
        console.log(carrito)
        } 
        seleccion = prompt("¿Llevas algo más?")

        while(seleccion == "no"){
            alert("Gracias por la compra!")
            carrito.forEach((carritoFinal) => {
                console.log(`producto: ${carritoFinal.producto}, unidades: ${carritoFinal.unidades}, total a pagar ${ carritoFinal.unidades * carritoFinal.precio}`)
            })
            break;
        }
}