import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {FormsModule} from "@angular/forms";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {NavigationComponent} from "./shared/navigation/navigation.component";
import {MatListModule} from "@angular/material/list";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatMenuModule} from "@angular/material/menu";
import {MatGridListModule} from "@angular/material/grid-list";
import {LoginComponent} from "./modules/auth/pages/login/login.component";
import {SignupComponent} from "./modules/auth/pages/signup/signup.component";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {materialModules} from "./types/material";
import {AdminModule} from "./modules/admin/admin.module";
import {ClientModule} from "./modules/client/client.module";
import {LoginGuardianService} from "./modules/auth/pages/login/login-guardian.service";


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    FormsModule,
    MatProgressBarModule,
    MatListModule,
    MatToolbarModule,
    MatSidenavModule,
    MatMenuModule,
    MatGridListModule,
    HttpClientModule,
    ...materialModules,
    AdminModule,
    ClientModule,

  ],
  providers: [LoginGuardianService],
  exports: [AppComponent, NavigationComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
