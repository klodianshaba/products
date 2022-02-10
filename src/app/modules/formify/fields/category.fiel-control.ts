import {FieldModel, FieldState, FieldTypes, ValidatorModel} from '../models';
import {Validators} from '@angular/forms';
export class CategoryFieldControl extends FieldModel {
  constructor(overwrite: FieldState = {}) {
    const field: FieldModel = new FieldModel({
      controlName: 'category',
      fieldType: FieldTypes.select,
      label: 'Choose category',
      placeholder: 'category',
      autoComplete: 'off',
      options: [],
      validators: [
        new ValidatorModel({validator: Validators.required, errorCode: 'required', description: 'category is required'}),
      ]
    });
    super(Object.assign(field, overwrite));
  }
}
