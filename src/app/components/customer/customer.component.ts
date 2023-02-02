import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Customer } from 'src/app/models/entities/customer';
import { CustomerService } from 'src/app/services/customer/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent {
customers:Customer[] = [];

constructor(private customerService:CustomerService,private httpClient:HttpClient)
{

}

getCustomers()
{
  this.customerService.getCustomers().subscribe((response) =>
  {
    this.customers = response.data;
  })
}

}
