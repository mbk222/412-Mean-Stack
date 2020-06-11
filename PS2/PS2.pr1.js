function *fibMaker() {
    yield 1;
    let last = current = n = 1;

    while (true) {
        current = last;
        last = last + n;
        n = current;
        yield current;
    }
}

function *evenFibMaker() {
    let fibIterator = fibMaker();
    while (true) {
        val = fibIterator.next();
        if (val.value % 2 == 0) {
            yield val.value
        }
    }
}



let iterator = evenFibMaker();
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())

