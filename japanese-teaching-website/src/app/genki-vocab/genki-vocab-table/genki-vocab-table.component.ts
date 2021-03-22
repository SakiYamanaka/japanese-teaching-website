import { Component } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { genkiVocab } from '../genki-vocab';

@Component({
  selector: 'genki-vocab-table-component',
  templateUrl: './genki-vocab-table.component.html',
})

export class GenkiVocabTableComponent {
  allGenkiVocab = genkiVocab;
  displayedGenkiVocab = genkiVocab;
  faSearch = faSearch;

  applyFilter() {
    let filterValue = (<HTMLInputElement>document.getElementById('filtertextbox')).value;
    if (filterValue === '') {
      this.displayedGenkiVocab = this.allGenkiVocab;
    } else {
      this.displayedGenkiVocab = this.allGenkiVocab.filter(item => {
        return item.kana.includes(filterValue)
          || item.meaning.includes(filterValue)
          || item.kanji.includes(filterValue)
          || item.lesson.toString() === filterValue
      });
    }
  }
}