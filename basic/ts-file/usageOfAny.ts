
function callApi(url:string) {
    // this function can return any value,
    // like json object or status code or no value
    // for this reason we have to return any value from this

    if(url ==  null){
        return 404;
    }
    else if(url.length == 0){
        return 401;
    }
    else{
        return 'Data Fetched complete';
    }
}

const response = callApi('/users');

console.log(response);