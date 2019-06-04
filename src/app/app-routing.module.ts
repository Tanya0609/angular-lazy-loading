import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// const routes: Routes = [];
const routes: Routes = [
  {
    // Notice that the lazy loading syntax uses loadChildren 
    // followed by a function that uses the browser's built-in import('...') syntax for dynamic imports. 
    // The import path is the relative path to the module.
    path: 'customers',
    loadChildren: () => import('./customers/customers.module').then(mod => mod.CustomersModule)
  },
  {
    path: 'orders',
    loadChildren: () => import('./orders/orders.module').then(mod => mod.OrdersModule)
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


// 1. Create a feature module: customers
// 2. Add a component to the feature module: customer-list
// 3. Set up UI with rounterLink to feature module
// 4. Configure the routes
//      - In the AppRoutingModule, you configure the routes to the feature modules, in this case OrdersModule and CustomersModule.
//      - The feature module then connects the AppRoutingModule to the CustomersRoutingModule or the OrdersRoutingModule. Those routing modules tell the router where to go to load relevant components.
