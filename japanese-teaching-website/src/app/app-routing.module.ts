import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GenkiVocabComponent } from './genki-vocab/genki-vocab.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'genki-vocab', component: GenkiVocabComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
