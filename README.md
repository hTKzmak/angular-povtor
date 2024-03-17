глобальная установка:
npm install -g @angular/cli

создание проекта:
ng new название_проекта

переход в каталог проекта:
cd название_проекта

запуск:
ng serve

------------------------

создание компонента (несколько способов):
создаётся в папке app:
1)ng generate component название_компонента
2)ng generate component /components/название_компонента

создаётся в папке components:
3)ng g c /components/название_компонента
4)ng g c название_компонента

------------------------

Создание сервиса:
ng generate service /service/UserList
