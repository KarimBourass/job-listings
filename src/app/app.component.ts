import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  inputSearch = '';


  searchInput(myInput:string){
    console.log('====dqcq=dfk ovqd');
    console.log(myInput);

    this.inputSearch = myInput
  }
}
