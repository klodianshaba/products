import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {AvatarDirectionsEnum, AvatarDirectionType} from "../../utils";

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent implements OnInit {

  @Input('src') src: string | ArrayBuffer = null;
  @Input('required') required: boolean = false;
  @Output('onPath') onPath: EventEmitter<string | ArrayBuffer> = new EventEmitter<string | ArrayBuffer>();
  @Input('direction') direction: AvatarDirectionType = AvatarDirectionsEnum.preview;
  @ViewChild('avatar', { static: false}) avatarElement: ElementRef;
  public loadedAvatar: boolean = false;
  constructor() { }
  ngOnInit(): void {}

  isUpload(): boolean{
    return (this.direction === AvatarDirectionsEnum.upload);
  }
  isPreview(): boolean{
    return (this.direction === AvatarDirectionsEnum.preview);
  }
  handleFileInput(event: any): void{
    const file = event.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file); // read file as data url
    reader.onload = (event) => { // called once readAsDataURL is completed
      this.src = (<FileReader>event.target).result;
      this.onPath.emit(this.src);
    };
  }
  onClickAvatar(): void {
    if(this.isUpload()) {
      this.avatarElement.nativeElement.click();
    }
  }

}
