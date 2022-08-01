import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListCustomersComponent } from './list-customers/list-customers.component';
import { ViewCustomerComponent } from './view-customer/view-customer.component';
import { AddAccountComponent } from './add-account/add-account.component';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule, MAT_SNACK_BAR_DEFAULT_OPTIONS} from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    ListCustomersComponent,
    ViewCustomerComponent,
    
    AddAccountComponent
   
  ],
  imports: [
    CommonModule, 
    RouterModule,
    MatCardModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatSnackBarModule,
    MatListModule
  ],
  providers:[
    {provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {duration: 3000}}
  ]
})
export class CustomersModule { }
