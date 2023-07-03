import { Component ,Input} from '@angular/core';

export interface server{
  type : string,
  name : string;
  content : string;
}

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent {
  // to get data from parent component in this case app.component.ts
  // intialize the object
  //@Input() element : server = {type : '',name : '',content : ''} ;

  // use alias for input
  @Input('srvElement') element : server = {type : '',name : '',content : ''} ;

}
