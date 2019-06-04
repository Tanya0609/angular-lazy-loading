import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// 1. Create a feature module: customers
// 2. Add a component to the feature module: customer-list
// 3. Configure the routes
//      - In the AppRoutingModule, you configure the routes to the feature modules, in this case OrdersModule and CustomersModule.
//      - The feature module then connects the AppRoutingModule to the CustomersRoutingModule or the OrdersRoutingModule. Those routing modules tell the router where to go to load relevant components.