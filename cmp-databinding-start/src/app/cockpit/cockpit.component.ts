import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrl: './cockpit.component.css'
})
export class CockpitComponent {
  @Output() serverCreated = new EventEmitter<{serverName : string, serverContent : string}>();
  @Output() blueprintCreated = new EventEmitter<{ serverName : string, serverContent : string}>();

  newServerName : string = '';
  newServerContent : string = '';
  
  onAddServer(nameEle : HTMLInputElement, contentEle : HTMLInputElement) 
  {
    this.serverCreated.emit({
      serverName : nameEle.value,
      serverContent : contentEle.value
    });
  }

  onAddBlueprint(nameEle : HTMLInputElement, contentEle : HTMLInputElement)
  {
    this.blueprintCreated.emit({
      serverName : nameEle.value,
      serverContent : contentEle.value
    })
  }

}
