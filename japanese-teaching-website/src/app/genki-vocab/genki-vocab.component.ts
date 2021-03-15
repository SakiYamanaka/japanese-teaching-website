import { Component } from '@angular/core';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { genkiVocab } from './genki-vocab';


@Component({
  selector: 'genki-vocab-component',
  templateUrl: './genki-vocab.component.html',
})

export class GenkiVocabComponent {
  faAngleDown = faAngleDown;
  faAngleUp = faAngleUp;
  displayedGenkiVocab = genkiVocab;
  isLessonFilterDisplayed = false;

  setIsLessonFilterDisplayed() {
    this.isLessonFilterDisplayed = !this.isLessonFilterDisplayed;
  }
}