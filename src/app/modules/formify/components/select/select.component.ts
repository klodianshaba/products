import { Component, forwardRef, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import { FormBuilder, NG_VALUE_ACCESSOR} from '@angular/forms';
import {FieldControlComponent} from '../field-control/field-control.component';
@Component({
  selector: 'formify-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  providers: [{provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => SelectComponent), multi: true}]
})
export class SelectComponent extends FieldControlComponent implements OnInit , OnChanges{
  constructor(protected override formBuilder: FormBuilder) { super(formBuilder); }
  override ngOnChanges(changes: SimpleChanges): void {super.ngOnChanges(changes); }
  override ngOnInit(): void {super.ngOnInit(); }
}
