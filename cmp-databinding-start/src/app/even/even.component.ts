import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styleUrl: './even.component.css'
})
export class EvenComponent {
  // @Input this attribute can be set from outside of the component
  @Input() evenTimer : number = 0;
}
