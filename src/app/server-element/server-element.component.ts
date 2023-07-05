import { Component ,Input, 
  ViewEncapsulation, OnInit, 
  OnChanges,SimpleChanges,OnDestroy,DoCheck,AfterContentInit,
  AfterContentChecked,AfterViewInit,
  AfterViewChecked,ViewChild, ContentChild} 
  from '@angular/core';

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
export class ServerElementComponent implements OnInit, OnChanges ,OnDestroy,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked{
  // to get data from parent component in this case app.component.ts
  // intialize the object
  //@Input() element : server = {type : '',name : '',content : ''} ;

  // use alias for input
  @Input('srvElement') element : server = {type : '',name : '',content : ''} ;
  @Input() name: any;
  @ViewChild ('heading') heading;
  @ContentChild('contentParagraph') contentParagraph;

  constructor(){
    console.log('constructor called');
  }
  ngOnInit(): void {
    console.log('ngOnInit called');
    console.log('Test here : '+ this.heading.nativeElement.innerText);
  }

  ngOnChanges(changes : SimpleChanges) : void{
    console.log('ngOngOnChanges Called');
    console.log(changes);

  }
  ngDoCheck(): void {
    console.log('ngDoCheck');
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');

  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
    console.log(this.contentParagraph);
    console.log('Test here : '+ this.heading.nativeElement.innerText);
    console.log('Test here : '+ this.contentParagraph.nativeElement.innerText);
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }
  

}
