import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { BasicHighlightDiretive } from './basic-highlight/basic-highlight.diretive';
import { BetterHighlightDirective } from './better-highlight/better-highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    BasicHighlightDiretive,
    BetterHighlightDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
