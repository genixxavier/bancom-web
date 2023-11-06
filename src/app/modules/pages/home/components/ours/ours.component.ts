import { Component } from '@angular/core';

@Component({
  selector: 'app-ours',
  templateUrl: './ours.component.html',
  styleUrls: ['./ours.component.scss']
})
export class OursComponent {
  oursItems = [
    {
      icon: 'icon1.svg',
      title: '10,000+',
      text: 'Downloads per day'
    },
    {
      icon: 'icon4.svg',
      title: '2 Million',
      text: 'Users'
    },
    {
      icon: 'icon5.svg',
      title: '500+',
      text: 'Clients'
    },
    {
      icon: 'icon7.svg',
      title: '140',
      text: 'Countries'
    }
  ]
}
