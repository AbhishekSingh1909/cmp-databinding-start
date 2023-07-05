import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
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
  // pass local reference from html to type script
  @ViewChild('serverContentInput',{ read: ElementRef,static : true})
  public serverContentInput : ElementRef;

  onAddServer(serverNameInput : HTMLInputElement) {
    console.log(serverNameInput);
    console.log(this.serverContentInput);
    // emit data (pass data) to app componenet 
   // this.serverCreated.emit({serverName : this.newServerName, serverContent : this.newServerContent});
   //use of view child
   this.serverCreated.emit({serverName : serverNameInput.value, serverContent : this.serverContentInput.nativeElement.value});
  }

  onAddBlueprint(serverNameInput : HTMLInputElement) {
    this.blueprintCreated.emit({serverName : serverNameInput.value, serverContent : this.serverContentInput.nativeElement.value});
  }
}
