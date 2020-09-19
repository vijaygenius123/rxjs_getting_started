import {  Observable, pipe } from "rxjs";
import {filter, map} from 'rxjs/operators';

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

}).pipe(
    map(function (n:number){
        return n * 10;
    }),
    filter(function (n:number){
        return n < 25
    })
)

source.subscribe(
    value => {console.log(`Value: ${value}`)},
    error => {console.log('Error: ${error}')},
    () => console.log('Complete')
);
