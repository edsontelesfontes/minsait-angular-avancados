import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeService } from '../services/employee.service';
import { Router } from '@angular/router';
import { IEmployee } from '../interface/IEmployee';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor(private employeeService: EmployeeService, private router: Router) { }
  listEmployee$!: Observable<IEmployee[]>;

 

  ngOnInit(): void {
    this.listEmployee$ = this.employeeService.findAllEmployees();
  }

}
