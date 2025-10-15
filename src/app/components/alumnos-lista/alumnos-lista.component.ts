import { Component, OnInit } from '@angular/core';
import { Alumno } from '../../interfaces/alumno.interface';

@Component({
  selector: 'app-alumnos-lista',
  templateUrl: './alumnos-lista.component.html',
  styleUrl: './alumnos-lista.component.css',
  standalone: false
})
export class AlumnosListaComponent implements OnInit {
  alumnos: Alumno[] = [];
  displayedColumns: string[] = ['id', 'nombre', 'email', 'edad'];

  ngOnInit(): void {
    this.loadAlumnos();
  }

  private loadAlumnos(): void {
    // Mock data - en una aplicación real esto vendría de un servicio
    this.alumnos = [
      { id: 1, nombre: 'Juan', apellido: 'Pérez', email: 'juan.perez@email.com', edad: 20 },
      { id: 2, nombre: 'María', apellido: 'García', email: 'maria.garcia@email.com', edad: 22 },
      { id: 3, nombre: 'Carlos', apellido: 'López', email: 'carlos.lopez@email.com', edad: 19 },
      { id: 4, nombre: 'Ana', apellido: 'Martínez', email: 'ana.martinez@email.com', edad: 21 },
      { id: 5, nombre: 'Pedro', apellido: 'Rodríguez', email: 'pedro.rodriguez@email.com', edad: 23 }
    ];
  }

  onAlumnoAdded(alumno: Omit<Alumno, 'id'>): void {
    const newId = this.alumnos.length > 0 ? Math.max(...this.alumnos.map(u => u.id)) + 1 : 1;
    this.alumnos.push({ id: newId, ...alumno });
    console.log('Nuevo alumno agregado:', alumno);
  }
}