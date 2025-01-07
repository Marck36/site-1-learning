import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./pages/home/home.component";
import { RenovaComponent } from './renova.component';

const routes: Routes = [
  {
    path: '', component: RenovaComponent,
    children: [
      { path: '', component: HomeComponent, },
      { path: 'home', component: HomeComponent, },
      { path: 'consultancy', component: RenovaComponent, },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports:  [RouterModule],
})
export class RenovaRoutingModule {}
