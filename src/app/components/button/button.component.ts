import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  clicked = false;
  pic = false;

  clickFunc() {
    this.clicked = true;
    this.pic = true;
    new Promise((res)=>setTimeout(res,1000))
      .then(() => this.clicked = false);
  }

}
