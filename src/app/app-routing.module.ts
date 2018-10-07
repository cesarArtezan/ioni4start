import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'algo', loadChildren: './algo/algo.module#AlgoPageModule' },
  { path: 'animals', loadChildren: './animals/animals.module#AnimalsPageModule' },
  { path: 'profile2', loadChildren: './algo/profile2/profile2.module#Profile2PageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
