let valores = [4, 7, 3, 8, 1, 2, 9]

/*for (let pos = 0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}*/

for(let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

let p = valores.indexOf(8)
console.log(`O valor 8 está na posição${p}`)