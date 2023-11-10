export function resultCuadrado(numb) { 
    return new Promise((resolve, reject) => {
        resolve(numb**2);
    }); 
};

/* Ejercicio 12 */
async function operator(numb2) {
    return await (numb2 ** 2)
}
