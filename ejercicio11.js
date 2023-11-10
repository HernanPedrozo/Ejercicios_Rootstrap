export function numb (numb) { 
    return new Promise((resolve, reject) => {
        resolve(numb**2);
    }); 
};