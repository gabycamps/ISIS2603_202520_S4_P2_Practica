import { Component, Input } from '@angular/core';
import { Emprendedor } from '../emprendedor';
import { EmprendedorDetail } from '../emprendedor-detail';
import { EmprendedorService } from '../emprendedor.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-emprendedor-detail',
  standalone: false,
  templateUrl: './emprendedor-detail.component.html',
  styleUrl: './emprendedor-detail.component.css'
})
export class EmprendedorDetailComponent {
  
  // Lista de emprendedores detallados quemada, recuerden que tiene que crear un servicio para obtenerlos del API
  // Por lo tanto, el contenido de esta lista luego lo deben eliminar
  emprendedor: any;


  // Cuando el componente recibe un nuevo emprendedor, busca su detalle en la lista quemada
  // notese que esto es solo un placeholder hasta que implementen el servicio y el API
  constructor(private service: EmprendedorService, private route: ActivatedRoute) {}
  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.service.getEmprendedor(id).subscribe(data => {
      this.emprendedor = data;
    });
  }

}
