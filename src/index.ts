import { from, Observer, Observable } from "rxjs";

let numbers = [1, 2, 3, 4, 5];
let source = Observable.create(function(observer) {

    for (let n of numbers)(
        observer.next(n)
    );

    observer.complete();
});

source.subscribe(
    value => {console.log(`Value: ${value}`)},
    error => {console.log(`Error: ${error}`)},
    () => {console.log('Complete')}
    );
