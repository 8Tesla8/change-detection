import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { SubComponent } from './sub/sub.component';
import { DeepComponent } from './deep/deep.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SubComponent,
    DeepComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
