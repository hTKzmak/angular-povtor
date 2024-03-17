import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-new-component',
  standalone: true,
  imports: [],
  templateUrl: './new-component.component.html',
  styleUrl: './new-component.component.css'
})
export class NewComponentComponent {
  // ■ 4 обозначение полученного массива с родительского компонента
  @Input() users: any;
  
  // ▣ 4 получение данных с пропа
  @Input() public id: number = 0;
  @Input() public name: string = '';
  @Input() public surname: string = '';
}
