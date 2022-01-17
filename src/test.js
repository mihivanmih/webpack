
function flatten(list) {
    let cocc = []
    const newArr = list.map(elems=> {
        
        let elemsdd = elems
    
        if(Array.isArray(elems)) {
            flatten(elems)
            //console.log(elems)
    
    
            //cocc.push(elems)
    
          
            console.log("dd", elems)
          
            
            elems.map(el => {
                //newEl.push(newEl)
                //elems = el
                //cocc.push(el)
                return elemsdd
               console.log("el", el)
               console.log("elemsdd", elemsdd)
                //console.log("elems", elems)
                //console.log("newEl", newEl)
            })
            
        }
    
        //console.log('cocc', cocc)
        
        return elemsdd
    })
    
    return newArr
}


console.log(flatten([1, 'any [complex] string', null, function() {}, [1, 2, [3, '4'], 0], [], { a: 1 }]))
// возвращает
//[1, 'any [complex] string', null, function() {}, 1, 2, 3, '4', 0, { a: 1 }]


