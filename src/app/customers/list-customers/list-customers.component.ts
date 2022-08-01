import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-list-customers',
  templateUrl: './list-customers.component.html',
  styleUrls: ['./list-customers.component.scss']
})
export class ListCustomersComponent implements OnInit {

  listUsers:any;
  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.customerService.listUsers().subscribe(data =>{
      this.listUsers=data;
    });

    //this.listUsers = ["Dory","samir"];
  }

}
