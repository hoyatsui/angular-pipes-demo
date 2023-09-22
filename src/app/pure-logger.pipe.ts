import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'pureLogger',
    pure: true
})
export class PureLoggerPipe implements PipeTransform {

    transform(value: any): any {
        console.log("PureLoggerPipe: " + value);
        return value;
    }

}
