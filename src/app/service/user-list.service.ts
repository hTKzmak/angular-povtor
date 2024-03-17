import { Injectable } from '@angular/core';

// ▦ 1 создаём service

interface UserItem {
  id: number
  name: string
  surname: string
  isJob?: boolean
}

@Injectable({
  providedIn: 'root'
})
export class UserListService {
  
  public users: UserItem[] = [
    { id: 1, name: 'Mark', surname: 'Ryden' },
    { id: 2, name: 'Svt', surname: 'Mlnk' },
    { id: 3, name: 'No', surname: 'Name' },
  ];

  public deleteUser(id: number) :void{
    let index = this.users.findIndex(el => el.id === id)
    this.users.splice(index, 1)
  }
}
