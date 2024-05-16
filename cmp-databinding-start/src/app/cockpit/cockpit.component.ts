import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrl: './cockpit.component.css'
})
export class CockpitComponent {
  @Output() serverCreated = new EventEmitter<{serverName : string, serverContent : string}>();
  @Output() blueprintCreated = new EventEmitter<{ serverName : string, serverContent : string}>();

  @ViewChild('serverNameElement') serverNameElement : ElementRef;
  @ViewChild('serverContentElement') serverContentElement : ElementRef;

  // newServerName : string = '';
  // newServerContent : string = '';
  
  onAddServer(nameEle : HTMLInputElement, contentEle : HTMLInputElement) 
  {
    this.serverCreated.emit({
      serverName : this.serverNameElement.nativeElement.value,
      serverContent : this.serverContentElement.nativeElement.value
    });
  }

  onAddBlueprint(nameEle : HTMLInputElement, contentEle : HTMLInputElement)
  {
    this.blueprintCreated.emit({
      serverName : this.serverNameElement.nativeElement.value,
      serverContent : this.serverContentElement.nativeElement.value
    })
  }

}
