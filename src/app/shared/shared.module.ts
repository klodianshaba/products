import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarComponent } from './components/avatar/avatar.component';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { MaterialModule} from "../modules/material/material.module";
import { DialogModule} from "../modules/dialog/dialog.module";

@NgModule({
  declarations: [
    AvatarComponent,
    ConfirmDialogComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    DialogModule,
  ],
  exports: [
    AvatarComponent,
    ConfirmDialogComponent
  ]
})
export class SharedModule { }
