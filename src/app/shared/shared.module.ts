import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarComponent } from './components/avatar/avatar.component';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { MaterialModule} from "../modules/material/material.module";
import { DialogModule} from "../modules/dialog/dialog.module";
import { DirectionComponent } from './components/direction/direction.component';

@NgModule({
  declarations: [
    AvatarComponent,
    ConfirmDialogComponent,
    DirectionComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    DialogModule,
  ],
    exports: [
        AvatarComponent,
        ConfirmDialogComponent,
        DirectionComponent
    ]
})
export class SharedModule { }
