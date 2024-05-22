import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive({
    selector : '[appHostBindingDirective]'
})

export class HostBindingHighlighterDirective implements OnInit{
    @Input() defaultColor : string;
    @Input() elementColor : string;
    @HostBinding('style.backgroundColor') backgroundColor : string;

    constructor(private eleRef : ElementRef)
    {
        console.log('here in');
        
    }

    ngOnInit()
    {
        this.backgroundColor = this.defaultColor;
    }

    @HostListener('mouseover') mouseover(event : Event)
    {
        this.backgroundColor = this.elementColor;
    }

    @HostListener('mouseleave') mouseleave(event : Event)
    {
        this.backgroundColor = 'transparent';
    }

}