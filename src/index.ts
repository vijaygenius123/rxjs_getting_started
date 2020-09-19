import {  Observable } from "rxjs";

let numbers = [1, 2, 3, 4, 5];
let source = Observable.create(function(observer) {

    let index = 0;

    let produceValue = () => {
        observer.next(numbers[index++]);

        if(index < numbers.length){
            setTimeout(()=> {
                produceValue()
            }, 1500);
        }else {
            observer.complete();
        }
    }

    produceValue();

});

source.subscribe(
    value => {console.log(`Value: ${value}`)},
    error => {console.log('Error: ${error}')},
    () => console.log('Complete')
);
