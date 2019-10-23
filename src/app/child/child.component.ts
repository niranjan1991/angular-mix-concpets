import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {


  
  @Input()  userData ;
  @Output() childToParent = new EventEmitter();
  title = 'child works'
  constructor() { }

  ngOnInit() {
  }

  sendToparent(){
    debugger
    this.childToParent.emit(this.title);
    alert('papa');
  }

}
