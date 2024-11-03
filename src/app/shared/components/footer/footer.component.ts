import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  text: string = 'Contact us: +57 3102105253 - info@viveroelotono.com - @viveroelotono';

}
