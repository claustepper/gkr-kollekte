import { NgModule } from "@angular/core";
import {
  MatButtonModule, MatDatepickerModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatTableModule
} from "@angular/material";


@NgModule({
  imports: [ MatButtonModule, MatTableModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatDatepickerModule ],
  exports: [ MatButtonModule, MatTableModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatDatepickerModule ]
})

export class MaterialModule {}
