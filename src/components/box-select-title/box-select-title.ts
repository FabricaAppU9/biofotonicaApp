import { Component, Input } from '@angular/core';

@Component({
  selector: 'box-select-title',
  templateUrl: 'box-select-title.html'
})
export class BoxSelectTitleComponent {

  @Input() title:string;

  constructor() {
  }

}
