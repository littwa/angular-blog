import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { PostPageComponent } from './post-page/post-page.component';
import { CatRouteComponent } from './shared/components/cat-route/cat-route.component';
import { DogRouteComponent } from './shared/components/dog-route/dog-route.component';
import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';

const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      { path: '', redirectTo: '/', pathMatch: 'full' },
      { path: '', component: HomePageComponent, children: [{ path: 'dog', component: DogRouteComponent }, { path: 'cat', component: CatRouteComponent }] },
      { path: 'post/:id', component: PostPageComponent },
      { path: 'material', loadChildren: () => import('./table/table.module').then(m => m.TableModule) }
    ]
  },
  {
    path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  }
];

const config = { preloadingStrategy: PreloadAllModules }

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
