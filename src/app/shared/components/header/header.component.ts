import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  menuMain = [
    {
      text: 'About',
      url: '/about'
    },
    {
      text: 'Feature',
      url: '/feature'
    },
    {
      text: 'Pricing',
      url: '/pricing'
    },
    {
      text: 'News',
      url: '/news'
    },
    {
      text: 'Help',
      url: '/help'
    },
    {
      text: 'Contact',
      url: '/contact'
    }
  ]
}
