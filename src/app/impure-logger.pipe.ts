import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'impureLogger',
    pure: false
})
export class ImpureLoggerPipe implements PipeTransform {

    transform(value: any): any {
        console.log("ImpureLoggerPipe: " + value);
        return value;
    }

}
