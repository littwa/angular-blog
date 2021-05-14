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
import { C, CatRouteComponent } from './shared/components/cat-route/cat-route.component';
import { DogRouteComponent } from './shared/components/dog-route/dog-route.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatDialogModule } from '@angular/material/dialog';
import { NgCircleProgressModule, CircleProgressOptions } from 'ng-circle-progress';
import { SimpleComponent } from './shared/components/simple/simple.component';

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
    PostComponent,
    DogRouteComponent,
    CatRouteComponent,
    C,
    SimpleComponent,
  ],
  imports: [
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    EffectsModule.forRoot([MainEffects]),
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument(),
    BrowserAnimationsModule,
    MatSliderModule,
    MatDialogModule,
    NgCircleProgressModule,
  ],
  providers: [INTERCEPTOR_PROVIDER, CircleProgressOptions],
  bootstrap: [AppComponent]
})
export class AppModule { }


// NgCircleProgressModule.forRoot({
//   radius: 50,
//   outerStrokeWidth: 10,
//   innerStrokeWidth: 4,
//   outerStrokeColor: "#911",
//   innerStrokeColor: "#564",
//   animationDuration: 500,
// })

