import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample',
  template: '<div> multiple line</div>',
  styles: ['div{color:red;}'] 
})
export class SampleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
