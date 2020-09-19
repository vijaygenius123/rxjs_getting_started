import { from, Observer } from "rxjs";


let numbers = [1, 2, 3, 4, 5];
let source = from(numbers);

class MyObserver implements Observer<number>{

    next(value){
        console.log(`Value ${value}`)
    }

    error(e){
        console.log(`Error - ${e}`)
    }

    complete(){
        console.log('Complete')
    }
}

source.subscribe(new MyObserver());
source.subscribe(new MyObserver());
