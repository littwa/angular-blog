import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import ruLocale from '@angular/common/locales/ru';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PostPageComponent } from './post-page/post-page.component';
import { PostComponent } from './shared/components/post/post.component';
import { SharedModule } from './shared/shared.module';
import { AuthInterceptor } from './shared/auth.intreceptor';
import { C, CatRouteComponent } from './shared/components/cat-route/cat-route.component';
import { DogRouteComponent } from './shared/components/dog-route/dog-route.component';

import { MatSliderModule } from '@angular/material/slider';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';

import { NgCircleProgressModule, CircleProgressOptions } from 'ng-circle-progress';
import { SimpleComponent } from './shared/components/simple/simple.component';
import { PickerModule } from '@ctrl/ngx-emoji-mart';
import { TableModule } from './table/table.module';
import { ModAModule } from 'src/app/modules/mod-a/mod-a.module';
import { StoreApplicableModule } from './store/store-applicable.module';


registerLocaleData(ruLocale, 'ru');

const INTERCEPTOR_PROVIDER = {
  provide: HTTP_INTERCEPTORS,
  multi: true,
  useClass: AuthInterceptor,
};

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
    EffectsModule.forRoot(),
    StoreModule.forRoot({}),
    StoreApplicableModule,
    StoreDevtoolsModule.instrument(),
    BrowserAnimationsModule,
    MatSliderModule,
    MatDialogModule,
    MatTableModule,
    NgCircleProgressModule,
    PickerModule,
    TableModule,
    ModAModule
  ],
  providers: [INTERCEPTOR_PROVIDER, CircleProgressOptions],
  bootstrap: [AppComponent]
})
export class AppModule { }


