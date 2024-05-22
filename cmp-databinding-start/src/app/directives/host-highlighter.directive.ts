import { Directive, ElementRef, HostListener, Renderer2, OnInit} from '@angular/core';

@Directive({
    selector : '[improvedHighlighter]'
})

export class HostHighlighterDirective implements OnInit {
    constructor(private eleRef : ElementRef, private renderrer : Renderer2)
    {
        console.log('here');
    }
    
    ngOnInit()
    {
        this.renderrer.setStyle(this.eleRef.nativeElement, 'background-color', 'red');
    }

    @HostListener('mouseover') mouseover(eventData : Event)
    {
        console.log(eventData);
        this.renderrer.setStyle(this.eleRef.nativeElement, 'background-color', 'pink');
    }

    @HostListener('mouseleave') mouseleave(eventData : Event)
    {
        this.renderrer.setStyle(this.eleRef.nativeElement, 'background-color', 'seagreen');
    }

}