import { Component, forwardRef, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {FieldControlComponent} from '../field-control/field-control.component';
import { FormBuilder, NG_VALUE_ACCESSOR} from '@angular/forms';
@Component({
  selector: 'formify-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => InputComponent) , multi: true}
  ]
})
export class InputComponent extends FieldControlComponent implements OnInit , OnChanges {
  constructor(protected override formBuilder: FormBuilder) { super(formBuilder); }
  override ngOnChanges(changes: SimpleChanges): void {super.ngOnChanges(changes); }
  override ngOnInit(): void {super.ngOnInit(); }
}
