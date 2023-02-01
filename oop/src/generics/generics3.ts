interface Database{
    url:string,
    userName:string,
    password:string
}

function getProperty<Type, Key extends keyof Type>(obj:Type, key: Key) 
: Type[Key] {

    return obj[key];
}

const mySqlDatabase = {
    url:'mysql:3306',
    userName:'root',
    password:'root'
}

console.log(getProperty(mySqlDatabase,'url'));
console.log(getProperty(mySqlDatabase,'uri'));