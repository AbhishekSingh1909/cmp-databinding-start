import { Component } from '@angular/core';
import { server } from './server-element/server-element.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements : server[] = [{type:'server', name:'Test Server 1',content:'this is for test'}];

  onServerAdded(serverData :{serverName :string, serverContent :string})
  {
    this.serverElements.push({
      type : 'server',
      name : serverData.serverName,
      content : serverData.serverContent
  });
  }

  onBluePrintAdded(bluePrintData :{serverName :string, serverContent :string})
  {
    this.serverElements.push({
      type : 'blueprint',
      name : bluePrintData.serverName,
      content : bluePrintData.serverContent
  });
  }
}
