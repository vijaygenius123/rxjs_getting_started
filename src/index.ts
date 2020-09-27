import {fromEvent} from "rxjs";
import {map} from "rxjs/operators";


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


source.subscribe(value => console.log(value));
