import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ReverseStringPipe } from './reverse-string.pipe';
import { PureLoggerPipe } from './pure-logger.pipe';
import { ImpureLoggerPipe } from './impure-logger.pipe';
import { CustomDirectiveDirective } from './custom-directive.directive';
import { LifecycleDemoComponent } from './lifecycle-demo/lifecycle-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    ReverseStringPipe,
    PureLoggerPipe,
    ImpureLoggerPipe,
    CustomDirectiveDirective,
    LifecycleDemoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
