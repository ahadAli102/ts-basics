function addTwo(num:number) : number{
    return num + 2;
}

const loginUser = (name:string, email:string, isPaid = false):void => {
    console.log(name+'  '+email+'   '+isPaid);
}

const handleError = (errorMessage: string) : never => {
    throw new Error("${errorMessage}");
} 

addTwo(4);

loginUser('Ahad Ali', 'ahad.a@hsenid.com');
loginUser('Abdullah-Al', 'abdullah.a@hsenid.com',true);

export{}