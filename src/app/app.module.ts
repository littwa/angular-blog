import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PostPageComponent } from './post-page/post-page.component';
import { PostComponent } from './shared/components/post/post.component';
import { SharedModule } from './shared/shared.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './shared/auth.intreceptor';
import { registerLocaleData } from '@angular/common';
import ruLocale from '@angular/common/locales/ru'
import { StoreModule } from '@ngrx/store';
import { reducers } from "./core/index";
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { MainEffects } from './core/main/main.effects';
import { EffectsModule } from '@ngrx/effects';

registerLocaleData(ruLocale, "ru")

const INTERCEPTOR_PROVIDER = {
  provide: HTTP_INTERCEPTORS,
  multi: true,
  useClass: AuthInterceptor
}

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    HomePageComponent,
    PostPageComponent,
    PostComponent
  ],
  imports: [
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    EffectsModule.forRoot([MainEffects]),
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument(),
  ],
  providers: [INTERCEPTOR_PROVIDER],
  bootstrap: [AppComponent]
})
export class AppModule { }
