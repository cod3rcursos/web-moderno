const obj = {
    comparaComThisArrow: param => console.log(this === param) 
}

obj.comparaComThisArrow(obj) // false
obj.comparaComThisArrow(module.exports) // true

function MeuObjeto() {
    this.comparaComThisArrow = param => console.log(this === param) 
}

const obj2 = new MeuObjeto()
obj2.comparaComThisArrow(obj2)
obj2.comparaComThisArrow(module.exports)