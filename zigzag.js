function BFS(grafo) {
  let cola = [];
  let hojas = 1;
  let resultado = [];
  let sentido = true; // true for r to l
  let i = 0;

  cola.push(grafo[0])
  while (i < grafo.length) {
    sentido ? resultado.push(cola) : resultado.push(cola.reverse());
    sentido = !sentido;
    i += hojas;
    hojas = hojas * 2;
    cola = grafo.slice(i, i+hojas);
  }

  return resultado;
}

let grafo = [3,9,20,null,null,15,7];
console.log(BFS(grafo));
