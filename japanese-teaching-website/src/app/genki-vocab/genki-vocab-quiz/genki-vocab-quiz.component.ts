import { Component } from '@angular/core';
import { faAlignRight, faAngleDoubleRight, faAngleRight, faArrowCircleRight, faArrowRight, faLongArrowAltRight, faSearch } from '@fortawesome/free-solid-svg-icons';
import { genkiVocab } from '../genki-vocab';

@Component({
  selector: 'genki-vocab-quiz-component',
  templateUrl: './genki-vocab-quiz.component.html',
})

export class GenkiVocabQuizComponent {
  genkiVocab = genkiVocab;
  faAngleRight = faAngleRight;

  submitAnswer() {
    let answer = (<HTMLInputElement>document.getElementById('submitanswertextbox')).value;
    if (genkiVocab[0].kana === answer) {
      console.log("correct");
    } else {
      console.log("incorrect");
    }
  }
}