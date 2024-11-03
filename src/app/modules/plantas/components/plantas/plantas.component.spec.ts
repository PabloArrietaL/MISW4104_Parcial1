import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { PlantasComponent } from './plantas.component';
import { PlantasService } from '../../../../data/services/plantas.service';
import { Planta } from '../../../../data/models/planta.model';
import { By } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';

describe('PlantasComponent', () => {
  let component: PlantasComponent;
  let fixture: ComponentFixture<PlantasComponent>;
  let plantasService: jasmine.SpyObj<PlantasService>;

  beforeEach(async () => {
    const plantasServiceSpy = jasmine.createSpyObj('PlantasService', ['getAll']);

    await TestBed.configureTestingModule({
      imports: [PlantasComponent],
      declarations: [],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        { provide: PlantasService, useValue: plantasServiceSpy }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(PlantasComponent);
    component = fixture.componentInstance;
    plantasService = TestBed.inject(PlantasService) as jasmine.SpyObj<PlantasService>;
  });

  it('should create a table with 3 rows and a header', () => {
    const mockPlantas: Planta[] = [
      new Planta(1, 'Planta 1', 'Nombre Científico 1', 'Interior', 1.5, 'Tropical', 'Sustrato 1'),
      new Planta(2, 'Planta 2', 'Nombre Científico 2', 'Exterior', 2.0, 'Desértico', 'Sustrato 2'),
      new Planta(3, 'Planta 3', 'Nombre Científico 3', 'Interior', 1.2, 'Templado', 'Sustrato 3')
    ];

    plantasService.getAll.and.returnValue(of(mockPlantas));

    fixture.detectChanges();

    const tableRows = fixture.debugElement.queryAll(By.css('tbody tr'));
    const tableHeader = fixture.debugElement.query(By.css('thead tr'));

    expect(tableHeader).toBeTruthy();
    expect(tableRows.length).toBe(3);
  });
});
