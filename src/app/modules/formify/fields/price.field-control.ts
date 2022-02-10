import {FieldModel, FieldState, ValidatorModel} from '../models';
import {Validators} from '@angular/forms';
export class PriceFieldControl extends FieldModel {
  constructor(overwrite: FieldState  = {}) {
    const  field: FieldModel =  new FieldModel({
      controlName: 'price',
      label: 'Enter price',
      placeholder: 'price',
      autoComplete: 'off',
      type: 'number',
      validators: [
        new ValidatorModel({validator: Validators.required, errorCode: 'required', description: 'price is required'}),
      ]
    });
    super(Object.assign(field , overwrite));
  }
}
