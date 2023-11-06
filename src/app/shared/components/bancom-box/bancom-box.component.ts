import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bancom-box',
  templateUrl: './bancom-box.component.html',
  styleUrls: ['./bancom-box.component.scss']
})
export class BancomBoxComponent {
  @Input() style: 'box-style-one' | 'box-style-two' = 'box-style-one'
  @Input() icon = ''
  @Input() title = ''
  @Input() text = ''
}
