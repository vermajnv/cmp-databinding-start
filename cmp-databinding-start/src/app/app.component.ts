import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  counterData : number[] = [];
  serverElements: { type: string, name: string, content: string }[] = [];
  onServerAdded(serverData: { serverName: string, serverContent: string }) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(blueprintData: { serverName: string, serverContent: string }) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent
    });
  }

  onChangeFirst() : void
  {
    this.serverElements[0].name = 'Changed'
  }

  onDeleteFirst()
  {
    this.serverElements.splice(0, 1);
  }

  onIntervalFired(eventNumber : number)
  {
    console.log(eventNumber);
    this.counterData.push(eventNumber);
  }
}
