import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ProfileRoutes } from './profile.routing';

import { SharedModule } from '../shared/shared.module';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ShopProfileComponent } from './shop-profile/shop-profile.component';
import { ShopProfileService } from './shop-profile/shop-profile.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ProfileRoutes),
    SharedModule
  ],
  declarations: [
     UserProfileComponent,
     ShopProfileComponent
  ],
  providers: [ ShopProfileService ]
})
export class ProfileModule { }
