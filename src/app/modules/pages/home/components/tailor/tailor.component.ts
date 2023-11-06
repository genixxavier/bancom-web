import { Component } from '@angular/core';

@Component({
    selector: 'app-tailor',
    templateUrl: './tailor.component.html',
    styleUrls: ['./tailor.component.scss'],
})
export class TailorComponent {
    tailoritems = [
        {
            icon: 'icon1.svg',
            title: 'Robust workflow',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.',
        },
        {
            icon: 'icon2.svg',
            title: 'Flexibility',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.',
        },
        {
            icon: 'icon3.svg',
            title: 'User friendly',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.',
        },
        {
            icon: 'icon4.svg',
            title: 'Multiple layouts',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.',
        },
        {
            icon: 'icon5.svg',
            title: 'Better components',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.',
        },
        {
            icon: 'icon6.svg',
            title: 'Well organised',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.',
        },
    ];
}
