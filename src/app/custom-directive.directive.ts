import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
    selector: '[appCustomDirective]'
})
export class CustomDirectiveDirective {

    @HostBinding('style.color') color: string = 'red';

    @HostListener('mouseenter') onMouseEnter() {
        this.color = 'green';
    }
    @HostListener('mouseleave') onMouseLeave() {
        this.color = 'pink';
    }

}
