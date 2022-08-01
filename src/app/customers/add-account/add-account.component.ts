import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.scss']
})
export class AddAccountComponent implements OnInit {
  addAccountForm: FormGroup = new FormGroup({});
 
  constructor(private formbuilder: FormBuilder,
              private customerService: CustomerService, 
              private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.addAccountForm = this.formbuilder.group({
      'id': new FormControl('',[Validators.required]),
      'initialcredit': new FormControl('',[Validators.required])
    })
  }

  createAccount(){
    
    this.customerService.addAccount(this.addAccountForm.value).subscribe(data =>{
     this.snackBar.open("Account created successfully");
    },err =>{
      this.snackBar.open("Unable to create Account");
    })
   
  }

}
