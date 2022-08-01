import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAccountComponent } from './customers/add-account/add-account.component';
import { ListCustomersComponent } from './customers/list-customers/list-customers.component';
import { ViewCustomerComponent } from './customers/view-customer/view-customer.component';

const routes: Routes = [


 {path:'customers',
children:[
  {path:'',component:ListCustomersComponent},
  {path:'list',component:ListCustomersComponent},
  {path:'view/:id',component:ViewCustomerComponent},
  {path:'create',component:AddAccountComponent},
]
}
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
