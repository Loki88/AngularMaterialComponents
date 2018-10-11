import { NgModule } from '@angular/core';



import { DatetimePickerComponent } from './datetime-picker.component';
export * from './datetime-picker.component';

@NgModule({
  declarations: [
    DatetimePickerComponent
  ],
  exports: [
      DatetimePickerComponent
  ],
  imports: [
  ],
  providers: [],
})
export class DatetimePickerModule { }
