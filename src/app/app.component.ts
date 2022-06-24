import { Component } from '@angular/core';
import { UsuarioService } from './usuario.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  imagenPadre = 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/2019_Tesla_Model_3_Performance_AWD_Front.jpg/300px-2019_Tesla_Model_3_Performance_AWD_Front.jpg';

  datos = [
    {
      id:1,
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/2019_Tesla_Model_3_Performance_AWD_Front.jpg/300px-2019_Tesla_Model_3_Performance_AWD_Front.jpg',
      description: 'Desc 1'
    },
    {
      id:2,
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/2019_Tesla_Model_3_Performance_AWD_Front.jpg/300px-2019_Tesla_Model_3_Performance_AWD_Front.jpg',
      description: 'Desc 2'
    },
    {
      id:3,
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/2019_Tesla_Model_3_Performance_AWD_Front.jpg/300px-2019_Tesla_Model_3_Performance_AWD_Front.jpg',
      description: 'Desc 3'
    }
  ];

  constructor(private usuarioService: UsuarioService) { }

  save(id: any) {
    console.log('El elemento que seleccionaste es: ', id);
    this.usuarioService.saveFav();
  }

}
