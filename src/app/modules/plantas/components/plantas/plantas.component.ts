import { Component, OnDestroy, OnInit } from '@angular/core';
import { map, Subscription } from 'rxjs';
import { Planta } from '../../../../data/models/planta.model';
import { PlantasService } from '../../../../data/services/plantas.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-plantas',
  standalone: true,
  imports: [NgFor],
  templateUrl: './plantas.component.html',
  styleUrl: './plantas.component.scss'
})
export class PlantasComponent implements OnInit, OnDestroy {

  plantas!: Planta[];
  contador: {interior: number, exterior: number};
  subscription: Subscription = new Subscription();

  constructor(private plantasService: PlantasService){
    this.contador = {
      exterior: 0,
      interior: 0
    };
  }

  ngOnInit(): void {
    this.subscription.add(this.plantasService.getAll()
    .pipe(
      map((plantas: Planta[]) => {
        return plantas.reduce(
          (acumulador, planta) => {
          if(planta.tipo == 'Interior') {
            acumulador.interior.push(planta);
          } else if(planta.tipo == 'Exterior') {
            acumulador.exterior.push(planta);
          }
          return acumulador;
        }, {interior: [] as Planta[], exterior: [] as Planta[]}
      )
      })
    )
    .subscribe(
      plantas => {
        this.contador.exterior = plantas.exterior.length;
        this.contador.interior = plantas.interior.length;
        this.plantas =[...plantas.exterior, ...plantas.interior];

      }
    ));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
