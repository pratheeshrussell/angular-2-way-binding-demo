import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TwoWayBinderDirective } from './directives/two-way-binder.directive';
import { TwoWayInputComponent } from './components/two-way-input/two-way-input.component';
import { SampleHolderComponent } from './components/sample-holder/sample-holder.component';

@NgModule({
  declarations: [
    AppComponent,
    TwoWayBinderDirective,
    TwoWayInputComponent,
    SampleHolderComponent
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
