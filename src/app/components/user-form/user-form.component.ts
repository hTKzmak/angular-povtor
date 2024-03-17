import { Component, inject } from '@angular/core';
import { UserListService } from '../../service/user-list.service';
import { UserItemComponent } from '../user-item/user-item.component';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [UserItemComponent],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css'
})
export class UserFormComponent {
  // ▦ 2 получаем пользователей с service
  // inject - функция, которая подтягивает данные с компонента
  public users = inject(UserListService).users
}
