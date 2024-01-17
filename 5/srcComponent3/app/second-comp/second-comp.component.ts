import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-second-comp',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './second-comp.component.html',
  styleUrl: './second-comp.component.css'
})
export class SecondCompComponent {

}
