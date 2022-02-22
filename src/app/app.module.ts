import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ComponenteUnoComponent } from './components/componente-uno/componente-uno.component';
import { ComponenteDosComponent } from './components/componente-dos/componente-dos.component';
import { ComponenteTresComponent } from './components/componente-tres/componente-tres.component';
import { ComponenteCuatroComponent } from './components/componente-cuatro/componente-cuatro.component';
import { ComponenteCincoComponent } from './components/componente-cinco/componente-cinco.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponenteUnoComponent,
    ComponenteDosComponent,
    ComponenteTresComponent,
    ComponenteCuatroComponent,
    ComponenteCincoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
