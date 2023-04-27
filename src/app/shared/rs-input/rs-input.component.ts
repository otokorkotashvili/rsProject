import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'rs-input',
  templateUrl: './rs-input.component.html',
  styleUrls: ['./rs-input.component.scss'],
})
export class RsInputComponent implements OnInit {

  @Input() label: string;
  @Input() placeHolder: string;

  constructor() {
    this.label = "";
    this.placeHolder = "";
  }

  ngOnInit(): void {
  }
}
