import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { UIRouterModule } from '@uirouter/angular';

import { AppComponent } from './app.component';
import { ViewsModule } from './views/views.module';
import { ComponentsModule } from './shared/components/components.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    UIRouterModule.forRoot(
      {
        useHash: true,
        otherwise: { state: 'posts' }
      }
    ),
    ViewsModule,
    ComponentsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
