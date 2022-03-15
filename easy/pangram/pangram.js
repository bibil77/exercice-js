function pangram(string){
    // const regex = "/[a-z]+/g"
    const alphabet = "abcdefghijklmnopqrstuvwxyz"

    for(let i = 0; i < alphabet.length; i++){
        if(string.indexOf(alphabet[i]) < 0){
            return console.log("not a pangram");
        }
    }
    return console.log("it's a pangram");
}

pangram("abcdefghijklmnopqrstuvwxyz")

pangram("1 minute c'est 100 secondes.")