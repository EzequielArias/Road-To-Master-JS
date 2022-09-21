function cuadrada (value, callback) {
    setTimeout(() => {
        callback(value, value*value)
    }, 0 | Math.random() * 1000);
}

cuadrada(0, (value, result) => {
    console.log("Inicia callback");
    console.log(`Callback : ${value}, ${result}`);
        cuadrada(1, (value, result) => {
            console.log(`Callback : ${value}, ${result}`);
        });
        cuadrada(2, (value, result) => {
            console.log(`Callback : ${value}, ${result}`);
        });
        cuadrada(3, (value, result) => {
            console.log(`Callback : ${value}, ${result}`);
        });
        cuadrada(4, (value, result) => {
            console.log(`Callback : ${value}, ${result}`);
        });
            cuadrada(5, (value, result) => {
                console.log(`Callback : ${value}, ${result}`);
            });
}) ;