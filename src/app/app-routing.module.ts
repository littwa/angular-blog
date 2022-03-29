import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { PostPageComponent } from './post-page/post-page.component';
import { CatRouteComponent } from './shared/components/cat-route/cat-route.component';
import { DogRouteComponent } from './shared/components/dog-route/dog-route.component';
import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';
import { SuperResolver } from 'src/app/services/super.resolver';

const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      {
        path: '', redirectTo: '/', pathMatch: 'full'
      },
      { path: '', component: HomePageComponent,
        children: [
          { path: 'dog', component: DogRouteComponent },
          { path: 'cat', component: CatRouteComponent }
        ]
      },
      {
        path: 'post/:id', component: PostPageComponent
      },
      { path: 'material', loadChildren: () => import('./table/table.module').then(m => m.TableModule) },
      {
        path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
      },
      {
        path: 'city', loadChildren: () => import('./modules/mod-a/mod-a.module').then(m => m.ModAModule)
      },
      {
        path: 'car', loadChildren: () => import('./modules/mod-b/mod-b.module').then(m => m.ModBModule),
        resolve: {
          superResolver: SuperResolver
        }
      },
      {
        path: 'chart', loadChildren: () => import('./modules/mod-c/mod-c.module').then(m => m.ModCModule)
      },
      {
        path: 'flux', loadChildren: () => import('src/app/modules/mod-d/mod-d.module').then(m => m.ModDModule)
      },
      {
        path: 'ngrx', loadChildren: () => import('src/app/modules/mod-e/mod-e.module').then(m => m.ModEModule)
      },
      {
        path: '**', redirectTo: '/', pathMatch: 'full'
      }
    ]
  },

];

const config = { preloadingStrategy: PreloadAllModules };

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
