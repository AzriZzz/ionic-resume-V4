import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OccupationPageRoutingModule } from './occupation-routing.module';

import { OccupationPage } from './occupation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OccupationPageRoutingModule
  ],
  declarations: [OccupationPage]
})
export class OccupationPageModule {}
