import { Component, OnInit, Input } from '@angular/core';
import { Album } from '../../classes/Album';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  dataReady: boolean = false;

  album: Album = null;

  @Input() albums: Album[];

  @Input() nameToShow: string;

  constructor() { }

  ngOnInit() {  
  }

  setShowingPhotosForAlbum(index: number){
    this.album = this.albums[index];
  }

  backToAlbums(){
    this.album = null;
  }

}
