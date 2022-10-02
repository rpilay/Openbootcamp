/* Crea un archivo JS que contenga las siguientes líneas

- Una cadena de texto con tu Nombre

- Otra cadena de texto con tu Apellido

- Una cadena de texto que se llame "estudiante" concatenando tu Nombre y tu Apellido con un espacio entre medias

- Una cadena de texto que se llame "estudianteMayus" que contenga la cadena estudiante pero todo en mayúsculas

- Una cadena de texto que se llame "estudianteMinus" que contenga la cadena estudiante pero todo en minúsculas

- Una variable que contenga el número de letras de la cadena "estudiante" contando los espacios

- Una variable que contenga la primera letra del Nombre

- Otra variable que contenga la última letra del Apellido

- Una cadena de texto que elimine los espacios de la variable "estudiante"

- Una variable booleana que diga si el Nombre está contenido en la variable "estudiante" */


let str_nombre= "Ronald";
let str_apellido = "Pilay";
let str_estudiante= str_nombre +" "+ str_apellido
let str_estudianteMayus = str_estudiante.toUpperCase()
let str_estudianteMinus = str_estudiante.toLocaleLowerCase()
let numLetras = str_estudiante.length
let primeraLetra = str_nombre.charAt(0)
let ultimaLetra = str_apellido.charAt(str_apellido.length-1)

console.log(ultimaLetra);