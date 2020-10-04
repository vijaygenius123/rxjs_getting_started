import {fromEvent, Observable} from "rxjs";
import {flatMap} from "rxjs/operators";

let output: HTMLElement = document.getElementById('output')
let btn: HTMLElement = document.getElementById('btn');

let click: Observable<any>;
click = fromEvent(btn, 'click');

function load(url: string) {

    return Observable.create(observer => {
        let xhr = new XMLHttpRequest();

        xhr.addEventListener("load", () => {
            let data = JSON.parse(xhr.responseText);
            observer.next(data);
            observer.complete();
        })

        xhr.open("GET", url);

        xhr.send();

    })
}


function renderMovies(movies){
    movies.forEach(m=>{
        let div = document.createElement('div');
        div.innerText = m.title;
        output.appendChild(div);
    })
}


/*
click.subscribe(
    e => load("movies.json"),
    e => console.log(`Error : ${e}`),
    () => console.log("Complete")
)
*/

click.pipe(
    flatMap(() => load("./movies.json"))
).subscribe(
    renderMovies,
    error => console.log(`Error : ${error}`),
    ()=> console.log('Complete')
);


