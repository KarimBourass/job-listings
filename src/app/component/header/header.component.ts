import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() searchInput: EventEmitter<string> =   new EventEmitter();

  name =''
  constructor() { }

  ngOnInit(): void {
  }

  search(){
    this.searchInput.emit(this.name);
    this.name = ''

  }

}
