import { from, Observer } from "rxjs";


let numbers = [1, 2, 3, 4, 5];
let source = from(numbers);

source.subscribe(
    value => {console.log(`Value: ${value}`)},
    error => {console.log(`Error: ${error}`)},
    () => {console.log('Complete')}
    );
