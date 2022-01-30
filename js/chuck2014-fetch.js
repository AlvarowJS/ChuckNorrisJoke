const fetch = require('node-fetch');

let promesa = fetch('http://api.icndb.com/jokes/random/');
promesa.then((res)=>{
    return res.json();
}).then((json)=>{
    console.log(json);
})