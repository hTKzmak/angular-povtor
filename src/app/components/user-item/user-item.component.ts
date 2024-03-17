import { Component, Input, inject } from '@angular/core';
import { UserListService } from '../../service/user-list.service';

@Component({
  selector: 'app-user-item',
  standalone: true,
  imports: [],
  templateUrl: './user-item.component.html',
  styleUrl: './user-item.component.css'
})
export class UserItemComponent {
  // ▦ 3 получаем данные
  @Input() public id: number = 0;
  @Input() public name: string = '';
  @Input() public surname: string = '';

// inject - функция, которая подтягивает данные с компонента
  public TodoService = inject(UserListService)
  
  public deleteUser():void{
    this.TodoService.deleteUser(this.id)
  }
}
