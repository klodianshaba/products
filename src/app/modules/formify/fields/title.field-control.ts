import {FieldModel, FieldState, ValidatorModel} from '../models';
import {Validators} from '@angular/forms';
export class TitleFieldControl extends FieldModel {
  constructor(overwrite: FieldState  = {}) {
    const  field: FieldModel =  new FieldModel({
      controlName: 'title',
      label: 'Enter title',
      placeholder: 'title',
      autoComplete: 'off',
      validators: [
        new ValidatorModel({validator: Validators.required, errorCode: 'required', description: 'Title is required'}),
        new ValidatorModel( {validator: Validators.minLength(3), errorCode: 'minlength', description: 'Minimum 3 characters required', parameters: {value: 3}}),
      ]
    });
    super(Object.assign(field , overwrite));
  }
}
