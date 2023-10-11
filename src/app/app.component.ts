import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  btnDisabled = true;

  person = {
    name: 'Andres',
    age: 25,
    avatar: 'https://pyxis.nymag.com/v1/imgs/cd8/804/e0f612fa12d17e68e3d68ccf55f93cac4f-06-rick-morty.rhorizontal.w700.jpg',
  }

  names: string[] = [
    'Andres',
    'Tatiana',
    'Tetis'
  ]

  products = [
    {
      name: 'EL mejor juguete',
      price: 565,
      image: './assets/images/toy.webp',
      category: 'all',
    },
    {
      name: 'Bicicleta casi nueva',
      price: 356,
      image: './assets/images/bike.webp'
    },
    {
      name: 'Colleción de albumnes',
      price: 34,
      image: './assets/images/album.jpg'
    },
    {
      name: 'Mis libros',
      price: 23,
      image: './assets/images/books.png'
    },
    {
      name: 'Casa para perro',
      price: 34,
      image: './assets/images/house.jpg'
    },
    {
      name: 'Gafas',
      price: 3434,
      image: './assets/images/glasses.png'
    }
  ]
  newName = '';

  toggleButton = () => {
    this.btnDisabled = !this.btnDisabled;
  }

  addAge = () => {
    this.person.age = this.person.age + 1;
  }

  onScroll = (event: Event) => {
    const element = event.target as HTMLElement;
  }

  changeName = (event: Event) => {
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;
  }

  addName = () => {
    this.names.push(this.newName);
  }

  removeName = (index: number) => {
    this.names.splice(index, 1)
  }
}
