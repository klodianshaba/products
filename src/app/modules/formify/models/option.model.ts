export interface OptionInterface{
  text: string;
  value: string | number;
}

export class OptionModel {
  text: string;
  value: string | number;
  constructor(private config?: OptionInterface) {
    this.text = null;
    this.value = null;
    Object.assign(this,config);
  }
}
