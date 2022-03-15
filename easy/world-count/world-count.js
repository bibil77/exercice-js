function worldCount(str){
    let word = {}
    str = str.match(/\w+/g)
    console.log(str);
    for(count of str){
        console.log(count);
        word[count.toLowerCase()] = (word[count.toLowerCase()] || 0) + 1 
    }
    console.log(word);
}

worldCount("Are are you the queen queen?")