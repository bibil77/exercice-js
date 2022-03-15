function acronym(string){
    let result = ""
    for(let i = 0; i < string.length; i++){
        if(string[i] === string[i].toUpperCase() && string[i] !== " " && string[i] !== "-"){
            result += string[i];
        }

    }

    return console.log(result);
}

acronym("Non-Fungible Token")