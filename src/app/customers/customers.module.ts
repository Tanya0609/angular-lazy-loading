import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomerListComponent } from './customer-list/customer-list.component';

@NgModule({
  declarations: [CustomerListComponent],
  imports: [
    CommonModule,
    CustomersRoutingModule
  ]
})
export class CustomersModule { }

// The customers.module.ts file imports the CustomersRoutingModule and CustomerListComponent 
// so the CustomersModule class can have access to them. 
//
// CustomersRoutingModule is then listed in the @NgModule imports array giving CustomersModule access to its own routing module, 
// and CustomerListComponent is in the declarations array, which means CustomerListComponent belongs to the CustomersModule.