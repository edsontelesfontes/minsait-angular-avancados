import { Component, OnInit } from '@angular/core';
import { IEmployee } from '../interface/IEmployee';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../services/employee.service';
import Swal from "sweetalert2"
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent {

  constructor(private employeeService: EmployeeService, private router: Router) { }

  formNewEmployee = new FormGroup<IEmployee>({
    nome: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    
    sobrenome: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),

    idade: new FormControl(18, {
      nonNullable: true,
      validators: [Validators.required],
    }),

    salario: new FormControl(1330, {
      nonNullable: true,
      validators: [Validators.required],
    }),

    genero: new FormControl('', {
      nonNullable: false
    }),

    telefone: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),

    endereco: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),

    corCabelo: new FormControl('', {
      nonNullable: false
    }),

    foto: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),

  });

  sendNewEmployee(){
    const newEmployee = this.formNewEmployee.value as unknown as IEmployee;

    this.employeeService.createEmployee(newEmployee).subscribe(rest =>  {
      Swal.fire(
        'Cadastrado',
        'Funcionário cadastrado com sucesso.',
        'success'
      )
      this.router.navigate(["/employees"]);
    });;
  
  }
}
