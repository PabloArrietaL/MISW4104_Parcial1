import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Planta } from '../../../../data/models/planta.model';
import { PlantasService } from '../../../../data/services/plantas.service';
import { AsyncPipe, NgFor } from '@angular/common';

@Component({
  selector: 'app-plantas',
  standalone: true,
  imports: [NgFor, AsyncPipe],
  templateUrl: './plantas.component.html',
  styleUrl: './plantas.component.scss'
})
export class PlantasComponent implements OnInit {

  plantas$!: Observable<Planta[]>;

  constructor(private plantasService: PlantasService){}

  ngOnInit(): void {
    this.plantas$ = this.plantasService.getAll();
  }

}
