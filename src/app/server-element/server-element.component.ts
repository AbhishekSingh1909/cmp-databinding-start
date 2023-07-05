import { Component ,Input, ViewEncapsulation} from '@angular/core';

export interface server{
  type : string,
  name : string;
  content : string;
}

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated //None,Native
})
export class ServerElementComponent {
  // to get data from parent component in this case app.component.ts
  // intialize the object
  //@Input() element : server = {type : '',name : '',content : ''} ;

  // use alias for input
  @Input('srvElement') element : server = {type : '',name : '',content : ''} ;

}
