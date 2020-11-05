import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: []
})
export class FormComponent implements OnInit {

  private cliente: Cliente = new Cliente();
  private titulo:string = "Crear cliente"

  constructor() { }

  ngOnInit(): void {
  }

  public create(): void {

    console.log("clicked!");
    console.log(this.cliente);
  }

}
