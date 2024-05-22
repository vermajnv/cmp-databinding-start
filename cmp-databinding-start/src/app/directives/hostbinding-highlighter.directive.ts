import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
    selector : '[appHostBindingDirective]'
})

export class HostBindingHighlighterDirective {

    @HostBinding('style.backgroundColor') backgroundColor : string;

    constructor(private eleRef : ElementRef)
    {
        console.log('here in');
        
    }

    @HostListener('mouseover') mouseover(event : Event)
    {
        this.backgroundColor = 'gray';
    }

    @HostListener('mouseleave') mouseleave(event : Event)
    {
        this.backgroundColor = 'transparent';
    }

}