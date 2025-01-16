import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { HomeComponent } from './home/home.component'
import { Test1Component } from './test1/test1.component'
import { Test2Component } from './test2/test2.component'

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'test-1', component: Test1Component },
  { path: 'test-2', component: Test2Component },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
