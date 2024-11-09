const countWordOccurrences = (sentence: string, word: string): number => {
    const splitted: string[] = sentence.split(' ');
    let occurence : number = 0;

    for(let i=0; i<splitted.length; i++){
        if(splitted[i].toLowerCase() === word.toLowerCase()){
            occurence++;
        }
    }

    return occurence;
}

console.log(
  countWordOccurrences("hey Typescript I love typescript", "typescript")
);
 