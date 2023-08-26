import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { IEmployee } from '../interface/IEmployee';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { EmployeeListComponent } from '../employee-list/employee-list.component';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  standalone: true,
  imports: [CommonModule, EmployeeListComponent]
})
export class EmployeeComponent implements OnInit {
  
  constructor(private employeeService: EmployeeService, private router: Router) { }
  listEmployee$!: Observable<IEmployee[]>;

 

  ngOnInit(): void {
    this.listEmployee$ = this.employeeService.findAllEmployees();
  }

  newUser(){
    this.router.navigateByUrl('employees/create');
  }
}
