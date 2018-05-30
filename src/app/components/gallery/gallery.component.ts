import { Component, OnInit, Input } from '@angular/core';
import { ClientService } from '../../client.service';
import { Album } from '../../classes/Album';
import { User } from '../../classes/User';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  @Input() userGallery: User;
  dataReady: boolean = false;

  album: Album = null;

  albums: Album[];

  constructor(private clientService: ClientService) { }

  async ngOnInit() {
    this.albums = await this.clientService.getJSONDataPromise("albums?userId="+this.userGallery.id);
    this.dataReady = true;
  }

  setShowingPhotosForAlbum(index: number){
    this.album = this.albums[index];
  }

}
