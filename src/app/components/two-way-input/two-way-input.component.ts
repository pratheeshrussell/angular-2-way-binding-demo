import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-two-way-input',
  templateUrl: './two-way-input.component.html',
  styleUrls: ['./two-way-input.component.scss']
})
export class TwoWayInputComponent {
  @Input('inputText') inputText = '';
  @Output('inputTextChange') inputTextUpdate = new EventEmitter();

  @Input('secondText') secondText = '';
  @Output('secondTextChange') secondTextUpdate = new EventEmitter();

  handleTextChange(event:any){
    this.inputTextUpdate.emit(event.target.value);
  }
}
