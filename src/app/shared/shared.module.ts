import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RsInputComponent } from './rs-input/rs-input.component';



@NgModule({
  declarations: [
    RsInputComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    RsInputComponent
  ]
})
export class SharedModule { }
