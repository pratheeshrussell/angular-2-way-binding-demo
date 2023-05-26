import { Directive, ElementRef, EventEmitter, HostBinding, HostListener, Input, Output, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appTwoWayBinder]'
})
export class TwoWayBinderDirective {
  @Input('appTwoWayBinder') model: any;
  @Output('appTwoWayBinderChange') update = new EventEmitter<any>();
  
  @HostBinding('value') value: (string|undefined);
  element :any;

  constructor(private elementRef: ElementRef) {
    this.element = this.elementRef.nativeElement;
  }

  @HostListener('input', ['$event'])
  handleInputChange(event:any) {
    let valueToEmit:(string|boolean|number) = event.target.value;
    if (this.element instanceof HTMLInputElement) {
      if (this.element.type === 'checkbox' || this.element.type === 'radio') {
        valueToEmit = event.target.checked;
      } 
    } 
    this.update.emit(valueToEmit);
  }


  ngOnChanges(changes: SimpleChanges) {
    const changedValue = changes['model'];
    if (this.element instanceof HTMLInputElement) {
      if (this.element.type === 'checkbox' || this.element.type === 'radio') {
        this.element.checked = changedValue.currentValue;
        return;
      } 
    } 
    // 
    this.value = changedValue.currentValue;
  }
}
