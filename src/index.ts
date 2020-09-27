import {fromEvent, Observable} from "rxjs";
import {map, filter, delay, buffer} from "rxjs/operators";

let output: HTMLElement = document.getElementById('output')
let btn: HTMLElement = document.getElementById('btn');

let click: Observable<any>;
click = fromEvent(btn, 'click');

function load(url: string) {

    let xhr = new XMLHttpRequest();

    xhr.addEventListener("load", () => {
        let movies = JSON.parse(xhr.responseText);

        movies.forEach(m=>{
            let div = document.createElement('div');
            div.innerText = m.title;
            output.appendChild(div);
        })
    })

    xhr.open("GET", url);

    xhr.send();
    
}

click.subscribe(
    e => load("movies.json")
)



