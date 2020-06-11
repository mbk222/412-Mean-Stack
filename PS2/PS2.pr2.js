function *sentenceSplitter() {
    let sentence = "All I know is something like a bird within her sang";
    let n = 0;
    while (true) {
        yield sentence.split(" ")[n];
        n++;
    }
}

let iterator3 = sentenceSplitter();
console.log(iterator3.next());
console.log(iterator3.next());
console.log(iterator3.next());
console.log(iterator3.next());


