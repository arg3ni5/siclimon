import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-avatar-selector',
  templateUrl: './avatar-selector.component.html',
  styleUrls: ['./avatar-selector.component.scss'],
})
export class AvatarSelectorComponent implements OnInit {
  @Input() avatarActual: String;
  @Output() avatarSelected = new EventEmitter<string>();

  constructor() { }

  ngOnInit() { 
    this.avatars.forEach(av => av.selected = false);
    
    if (this.avatarActual) {
      for (const avatar of this.avatars){
        if (this.avatarActual == avatar.img){
          avatar.selected = true;
        }
      }
    }
  }

  avatarSlide = {
    slidesPerView: 3.5
  }

  avatars = [
    {
      img: 'av-1.png',
      selected: true
    },
    {
      img: 'av-2.png',
      selected: false
    },
    {
      img: 'av-3.png',
      selected: false
    },
    {
      img: 'av-4.png',
      selected: false
    },
    {
      img: 'av-5.png',
      selected: false
    },
    {
      img: 'av-6.png',
      selected: false
    },
    {
      img: 'av-7.png',
      selected: false
    },
    {
      img: 'av-8.png',
      selected: false
    },
  ];

  selectAvatar(avatar: any) {
    this.avatars.forEach(av => av.selected = false);
    avatar.selected = true;
    this.avatarSelected.emit(avatar.img);
  }

}
