const numeros = [3, 1, 1, 10, 5, 7, 2];
let nMayor=numeros[0], nMenor=numeros[0];
let suma= 0;
for (N of numeros) {
    suma= suma + N;
    console.log(suma)
    if (N < nMenor) {
       nMenor = N;
       console.log(nMenor);
    }
    if (N > nMayor) {
        nMayor = N;
        console.log(nMayor);
     }
}

const parrafo = document.querySelector("#parrafo ");
parrafo.innerHTML = "La suma total es " + suma + ", el número menor es " + nMenor + " y el número mayor es " + nMayor + " . "; 
parrafo.classList.add("parrafo--azul");