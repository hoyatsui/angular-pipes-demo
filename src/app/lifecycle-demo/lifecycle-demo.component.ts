import { Component, OnInit, OnChanges, DoCheck, AfterViewInit, OnDestroy, Input, SimpleChanges } from '@angular/core';

@Component({
    selector: 'app-lifecycle-demo',
    template: '<p>I am a lifecycle demo!</p>'
})
export class LifecycleDemoComponent implements OnInit, OnChanges, DoCheck, AfterViewInit, OnDestroy {

    @Input() inputProperty: string = 'Default Value';

    constructor() {
        console.log('Constructor Called');
    }

    ngOnChanges(changes: SimpleChanges) {
        console.log('ngOnChanges Called. Changed Property:', changes);
    }

    ngOnInit() {
        console.log('ngOnInit Called');
    }

    ngDoCheck() {
        console.log('ngDoCheck Called');
    }

    ngAfterViewInit() {
        console.log('ngAfterViewInit Called');
    }

    ngOnDestroy() {
        console.log('ngOnDestroy Called');
    }



}
