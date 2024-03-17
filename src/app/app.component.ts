import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewComponentComponent } from './components/new-component/new-component.component';
import { UserFormComponent } from './components/user-form/user-form.component';

// ▣ 1 interface позволяет написать тип данных для массива данных
// info: ? означает не обязательные данные (относится не только к interface, но и к массиву с объектами)
interface UserItem {
  id: number
  name: string
  surname: string
  isJob?: boolean
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NewComponentComponent, UserFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'myapp';
  // ■ 1 создание массива с объектами 
  // ▣ 2 установка UserItem в наш массив
  public users: UserItem[] = [
    {id: 1, name: 'Mark', surname: 'Ryden'},
    {id: 2, name: 'Svt', surname: 'Mlnk'},
    {id: 3, name: 'No', surname: 'Name'},
  ];
}
