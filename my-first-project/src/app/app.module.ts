import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ControlareaComponent } from './controlarea/controlarea.component';
import { ListComponentComponent } from './list-component/list-component.component';
import { InputComponentComponent } from './input-component/input-component.component';

@NgModule({
  declarations: [
    AppComponent,
    ControlareaComponent,
    ListComponentComponent,
    InputComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
