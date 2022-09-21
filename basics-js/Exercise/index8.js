const problem = (array) =>{
    if(!array) return console.error("Campo requerido");
    if(!(array instanceof Array)) return console.info("No pasaste un arreglo como parametro");
   
    let des= array.sort((a,b) => b - a),
        asc = array.sort((a,b) => a- b)

    return console.log({des,asc})
};

// problem([12,2,33,4,5,6])

const compare = (array) =>{
    
    return console.log({
        sinDuplicados : array.filter((value, index, self) => self.indexOf(value) === index)
    })
}

// compare([1,1,"1",12,true,false,true])

const promedio = (array) =>{
    let result = 0
    for (const n of array) {
        result += n
    }
   console.log(result / array.length)
}

promedio([1,2,3,4,5,6,7,8,9,0])