import { Component, EventEmitter, Output } from '@angular/core';
import { server } from '../server-element/server-element.component';



@Component({
  selector: 'app-cookpit',
  templateUrl: './cookpit.component.html',
  styleUrls: ['./cookpit.component.css']
})
export class CookpitComponent {
 @Output() serverCreated = new EventEmitter<{ serverName :string, serverContent :string}>();
 @Output() blueprintCreated = new EventEmitter<{ serverName :string, serverContent :string}> ();
  newServerName = '';
  newServerContent = '';

  onAddServer() {
    this.serverCreated.emit({serverName : this.newServerName, serverContent : this.newServerContent});
  }

  onAddBlueprint() {
    this.blueprintCreated.emit({serverName : this.newServerName, serverContent : this.newServerContent});
  }
}
