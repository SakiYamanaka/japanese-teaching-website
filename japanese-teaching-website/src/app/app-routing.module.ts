import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GenkiVocabQuizComponent } from './genki-vocab/genki-vocab-quiz/genki-vocab-quiz.component';
import { GenkiVocabTableComponent } from './genki-vocab/genki-vocab-table/genki-vocab-table.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'genki-vocab-table', component: GenkiVocabTableComponent },
  { path: 'genki-vocab-quiz', component: GenkiVocabQuizComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
