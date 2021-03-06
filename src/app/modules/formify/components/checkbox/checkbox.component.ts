import {Component, forwardRef, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {FieldControlComponent} from '../field-control/field-control.component';
import {FormBuilder, NG_VALUE_ACCESSOR} from '@angular/forms';
@Component({
  selector: 'formify-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => CheckboxComponent) , multi: true }]
})
export class CheckboxComponent extends FieldControlComponent implements OnInit , OnChanges {
  constructor(protected override formBuilder: FormBuilder) { super(formBuilder); }
  override ngOnChanges(changes: SimpleChanges): void {super.ngOnChanges(changes); }
  override ngOnInit(): void { super.ngOnInit(); }
}
