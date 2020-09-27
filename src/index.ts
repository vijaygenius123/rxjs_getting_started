import {fromEvent} from "rxjs";
import {map} from "rxjs/operators";

let circle: HTMLElement = document.getElementById('circle');

let source: any;
source = fromEvent(document, 'mousemove')
    .pipe(
        map((e: MouseEvent) => {
            return {
                x: e.clientX,
                y: e.clientY
            }
        })
    )

function onNext(value: any){
    console.log(value);
    circle.style.left = value.x + 'px';
    circle.style.top = value.y + 'px';
}

source.subscribe(onNext,
        e => console.log(`Error ${e}`),
        console.log('Complete')
);
