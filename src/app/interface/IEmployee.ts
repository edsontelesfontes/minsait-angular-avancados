import { FormControl } from "@angular/forms";
export interface IEmployee{
    // id: FormControl<string>;


    nome: FormControl<string>;
    sobrenome: FormControl<string>;
    salario: FormControl<Number>;
    idade: FormControl<Number>;
    genero: FormControl<string | null>;
    telefone: FormControl<string>;
    endereco: FormControl<string>;
    corCabelo: FormControl<string | null>;
    foto: FormControl<string>;
 }

// FormControl<string | null>;
//   email: FormControl<string>;
//   mensagem?: FormControl<string | null>;
//   aceitoTermos: FormControl<boolean>