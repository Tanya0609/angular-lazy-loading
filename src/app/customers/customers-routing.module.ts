// import { NgModule } from '@angular/core';
// import { Routes, RouterModule } from '@angular/router';

// const routes: Routes = [];

// @NgModule({
//   imports: [RouterModule.forChild(routes)],
//   exports: [RouterModule]
// })
// export class CustomersRoutingModule { }
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomerListComponent } from './customer-list/customer-list.component';


const routes: Routes = [
  {
    path: '',
    component: CustomerListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }

// First, import the component at the top of the file with the other JavaScript import statements. 
// Then, add the route to CustomerListComponent.

// Notice that the path is set to an empty string. 
// This is because the path in AppRoutingModule is already set to customers, so this route in the CustomersRoutingModule, is already within the customers context. 
// Every route in this routing module is a child route.