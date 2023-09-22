import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    today = new Date();
    message = "Hello World!"
    title = 'angular-pipes-demo';
    counter = 0;

    isYellow = false;
    isDisabled = false;

    isGreen = false;

    showElement = true;
    itemList = [
        { id: 1, name: "Item 1" },
        { id: 2, name: "Item 2" },
        { id: 3, name: "Item 3" },
        { id: 4, name: "Item 4" },
    ]
    value = "B";

    someProperty = "Some Property";
    cnt = 0;

    trigger() {

    }

    changeMessage() {
        this.message = "Hello Angular!" + this.counter++;
    }
    changeClass() {
        this.isYellow = !this.isYellow;
    }
    changeColor() {
        this.isGreen = !this.isGreen;
    }
    toggleMessage() {
        this.showElement = !this.showElement;
    }

    changeInput() {
        this.someProperty = 'Changed Value' + this.cnt++;
    }
}

