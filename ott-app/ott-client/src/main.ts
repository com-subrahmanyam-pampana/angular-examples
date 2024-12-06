import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';
import { LoginComponent } from './app/login/login.component';
import { importProvidersFrom } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';  
bootstrapApplication(LoginComponent, {
  providers: [
    importProvidersFrom(RouterModule.forRoot(routes),HttpClientModule)
  ]
})
  .catch(err => console.error(err));


  /*
  In this file:

  1.We use bootstrapApplication to launch the app, 
  passing the LoginComponent as the entry point.
  2.We provide the router configuration by importing 
  RouterModule.forRoot(appRoutes) and passing it 
  to the providers array.
  3.
  
  */
