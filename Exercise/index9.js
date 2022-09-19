class Pelicula {
     constructor({id,titulo, director, estreno, pais, generos, calificacion}){
        this.id = id;
        this.titulo = titulo;
        this.director = director;
        this.estreno = estreno;
        this.pais = pais;
        this.generos = generos;
        this.calificacion = calificacion;

        this.validateIMBD(id);
        this.validarTitulo(titulo);
        this.validarDirector(director);
        this.validarEstreno(estreno);
        this.validarPais(pais);
        this.validarGeneros(generos);
        this.validarCalificacion(calificacion);
     }
     static get listaGeneros() {
      return ["Action", "Adult", "Adventure", "Animation", "Biography", "Comedy", "Crime", "Documentary" ,"Drama", "Family", "Fantasy", "Film  Noir", "Game-Show", "History", "Horror", "Musical", "Music", "Mystery", "News", "Reality-TV", "Romance", "Sci-Fi", "Short", "Sport", "Talk-Show", "Thriller", "War", "Western"]
     }

     static generosAceptados(){
      return console.info(`Los generos aceptados son : ${Pelicula.listaGeneros.join(" ,")}`)
     }
     fichaTecnica(){
      console.info(`fICHA TECTINA : ${this.titulo} ${this.director} ${this.estreno} ${this.pais.join("-")} ${this.generos.join("-")} ${this.calificacion} ${this.id}`);
     }

     validarCadena(propiedad, valor){
      if(!valor) return console.warn(`"${valor}" esta vacio`);

      if(typeof valor !== "string")return console.error(`${propiedad} ${valor} ingresado, NO es una adena de texto`);
      return true
      }

      validarLongitudCadena(propiedad, valor, longitud) {
         if(valor.length > longitud) return console.error(`${propiedad} "${valor}" excede el numero de caracteres permitidos (${longitud}).`);

         return true;
       }

     validateIMBD(id){
      if(this.validarCadena("IMDB id",id))
      if(!(/^([a-z]){2}([0-9]){7}$/.test(id)))return console.error(`IMBD id ${id} no es valido, debe tener 9 caracteres, los 2 primeros letra minusculas, los 7 restantes numeros`);
     }

     validarTitulo(titulo){
      if(this.validarCadena("Titulo",titulo)) this.validarLongitudCadena("Titulo",titulo,100)
   }

   
      validarDirector(director){
         if(this.validarCadena("Director",director)) this.validarLongitudCadena("director",director,50)
      }

      validarNumero(propiedad, valor){
         if(!valor) return console.warn(`${propiedad}"${valor}" ingresado, NO es un numero`);
         return true
      }

      validarEstreno(estreno){
         if(this.validarNumero("Año de estreno",estreno))
         if(!(/^([0-9]){4}$/.test(estreno)))return console.error(`Año de estreno ${estreno} no es valido, debe ser un numero de 4 digitos`);
        }

      validarArreglo(propiedad, valor){
      if(!valor) return console.warn(`${propiedad} "${valor}" esta vacio`);
      
      if(!(valor instanceof Array)) return console.error(`${propiedad} "${valor}" ingresado, NO es un arreglo`);

      if(valor.length === 0) return console.error(`${propiedad} "${valor}" no tiene datos`);

      for (const cadena of valor) {
         if(typeof cadena !== "string") return console.error(`El valor ${cadena} ingresado, NO es una cadena de texto`);
         return true
      }
      }

      validarPais(pais){
         this.validarArreglo("Pais",pais);
      }

      validarGeneros(generos){
         if(this.validarArreglo("Generos",generos)){
            for (const genero of generos) {
               if(!(genero,Pelicula.listaGeneros.includes(genero))){
                  console.error(`Generos(s) incorrectos: "${generos.join(",")}"`)
                  Pelicula.generosAceptados();
               }
            }
         }
      }

      validarCalificacion(calificacion){
         if(this.validarNumero("Calificacion",calificacion)) return (calificacion < 0 || calificacion > 10) ? console.error("SOLO ENTRE 1 Y 10") : this.calificacion = calificacion.toFixed(1);

      }
}  


const peli = new Pelicula({
   id: "rr1234567",
   titulo:"Titulo",
   director:"Director de la pelicula",
   estreno : "1234",
   pais : ["Mexico", "Rusia"],
   generos : ["Sci-fi"],
   calificacion : 23
})