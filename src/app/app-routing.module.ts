import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { EditAboutComponent } from './edit-about/edit-about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RoleGuard } from './services/role.guard';
import { ContactComponent } from './contact/contact.component';
import { NotCompleteGuard } from './services/not-complete.guard';
import { ModuleGuard } from './services/module.guard';
import { ResolveGuard } from './services/resolve.guard';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {
    path: 'customers',
    loadChildren: () =>
      import('./customers/customers.module').then((m) => m.CustomersModule),
  },
  {
    path: 'orders',
    canLoad: [ModuleGuard],
    loadChildren: () =>
      import('./orders/orders.module').then((m) => m.OrdersModule),
  },
  {
    path: 'about',
    component: AboutComponent,
    canActivateChild: [RoleGuard],
    children: [{ path: 'edit', component: EditAboutComponent }],
  },
  {path: 'products', component: ProductsComponent, resolve: {data: ResolveGuard}},
  {
    path: 'contact',
    component: ContactComponent,
    canDeactivate: [NotCompleteGuard],
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
  { path: '**', component: NotFoundComponent },
];

const routes2: Routes = [];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
