import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AppRoutes } from './app.routing';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';
import { SharedModule } from './shared/shared.module';
import { BreadcrumbsComponent } from './layouts/admin/breadcrumbs/breadcrumbs.component';
import { TitleComponent } from './layouts/admin/title/title.component';
import { ScrollModule } from './scroll/scroll.module';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { FirebaseConfig } from '../environments/firebase.config';
import { FormsModule } from '@angular/forms';
import { DataBaseService } from './general/database.service';
import { NotificationsComponent } from './notifications/notifications.component';
import { TextMaskModule } from 'angular2-text-mask';
import { LoginService } from './sign-in/login/login.service';
import { ShopProfileService } from './profile/shop-profile/shop-profile.service';
import { FuncionarioService } from './cadastro/funcionario/funcionario.service';

@NgModule({
   declarations: [
      AppComponent,
      AdminLayoutComponent,
      AuthLayoutComponent,
      BreadcrumbsComponent,
      TitleComponent
   ],
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
      SharedModule,
      RouterModule.forRoot(AppRoutes),
      HttpModule,
      FormsModule,
      ScrollModule,
      AngularFireModule.initializeApp(FirebaseConfig),
      AngularFireDatabaseModule,
      TextMaskModule
   ],
   exports: [ScrollModule],
   providers: [
      DataBaseService,
      { provide: LocationStrategy, useClass: PathLocationStrategy },
      NotificationsComponent,
      LoginService,
      ShopProfileService,
      FuncionarioService
   ],
   bootstrap: [AppComponent]
})
export class AppModule { }
