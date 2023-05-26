import { Component, Input } from '@angular/core';

@Component({
  selector: '.app-sample-holder',
  templateUrl: './sample-holder.component.html',
  styleUrls: ['./sample-holder.component.scss']
})
export class SampleHolderComponent {
  @Input('sampleName') title = '';
}
