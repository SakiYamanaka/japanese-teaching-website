import { Component } from '@angular/core';
import { genkiVocab } from './genki-vocab';


@Component({
  selector: 'genki-vocab-component',
  templateUrl: './genki-vocab.component.html',
})

export class GenkiVocabComponent {
  displayedGenkiVocab = genkiVocab;
}