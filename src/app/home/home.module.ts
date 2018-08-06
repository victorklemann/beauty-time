import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomeRoutes } from './home.routing';

import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [
      CommonModule,
      RouterModule.forChild(HomeRoutes),
      SharedModule
  ],
  declarations: [HomeComponent]
})

export class HomeModule {}
