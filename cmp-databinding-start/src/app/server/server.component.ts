import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, DoCheck, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild,  } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrl: './server.component.css'
})
export class ServerComponent implements 
OnChanges, 
OnInit, 
DoCheck,
AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked,
OnDestroy
{
  @Input() element : { type : string, name : string, content : string}
  @Input() name : string;
  @ViewChild('heading') header : ElementRef;
  @ContentChild('contentParagraph') paragraph : ElementRef;

  constructor()
  {
    console.log('Inside the constructor');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('in ngOnChanges hook', changes);
  }
  ngOnInit(): void {
    console.log('Iniside ngOnInit');
    console.log('heading', this.header);
    console.log('Content data', this.paragraph);
  }
  ngDoCheck()
  {
      console.log('Here in ngDoCheck');
  }

  ngAfterContentInit(): void {
    console.log('here in ngafter contentinit');
    console.log('Content data in Content Init', this.paragraph);
  }
  ngAfterContentChecked(): void {
    console.log('here in ngAfter content checked');
    
  }

  ngAfterViewInit(): void {
    console.log('here in ngAfterViewInit');
    console.log('Heading in ngAfterViewInit', this.header);
    
  }

  ngAfterViewChecked(): void {
    console.log('here in ngAfterViewChecked');
    
  }

  ngOnDestroy(): void {
    console.log('Component destroyed');
    
  }
}
