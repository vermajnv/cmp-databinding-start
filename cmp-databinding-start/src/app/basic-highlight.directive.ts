import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective {

  constructor(private ele : ElementRef) { }

  ngOnInit()
  {
      console.log(this.ele);
      this.ele.nativeElement.style.backgroundColor = 'green';
      
  }
}
