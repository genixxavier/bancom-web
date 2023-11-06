import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  menuFooter = [
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

  listWhatsApps = [
    {
      text: '978 566 567',
      number: '+978566567'
    },
    {
      text: '967 567 565',
      number: '+967567565'
    }
  ]

  listApps = [
    {
      icon: 'btn-app-store.png',
      url: 'https://apple.com'
    },
    {
      icon: 'btn-google-play.png',
      url: 'https://gogle.com'
    }
  ]
}
