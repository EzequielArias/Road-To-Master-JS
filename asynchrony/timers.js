let count = 0;
let interval = setInterval(() => {
    console.log(new Date().toTimeString());
    count++
    if(count > 5)return clearInterval(interval);
}, 1000);


