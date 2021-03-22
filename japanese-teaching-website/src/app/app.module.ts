import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GenkiVocabQuizComponent } from './genki-vocab/genki-vocab-quiz/genki-vocab-quiz.component';
import { GenkiVocabTableComponent } from './genki-vocab/genki-vocab-table/genki-vocab-table.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GenkiVocabTableComponent,
    GenkiVocabQuizComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
