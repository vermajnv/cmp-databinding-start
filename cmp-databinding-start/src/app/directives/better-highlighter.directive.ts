import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlighter]'
})
export class BetterHighlighterDirective implements OnInit{

  constructor(private ele : ElementRef, private renderer : Renderer2) { }

  ngOnInit(): void {
    this.renderer.setStyle(this.ele.nativeElement, 'backgroundColor', 'pink');
  }
}
