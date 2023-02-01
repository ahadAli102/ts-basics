function detectType<T>(val : T){
    if(typeof val === 'string'){
        console.log(val+' this is string value');
    }else if(typeof val === 'number'){
        console.log(val+' this is number');
    }
}


function printAll(pram: string | string[] | null) {
    if(pram){
        if(typeof pram === 'object'){
            for (const str of pram) {
                console.log(str);
            }
        }else if(typeof pram === 'string'){
            console.log(pram);
        }
    }
    
}

printAll('ahad');
printAll(['ahad','ali','linkon']);
detectType(1);
detectType('Ahad Ali')