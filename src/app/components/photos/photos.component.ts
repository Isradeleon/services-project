import { Component, OnInit, Input } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { Picture } from '../../classes/Picture';
import { Album } from '../../classes/Album';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
  @Input() album: Album;
  dataReady: boolean = false;

  pictures: Picture[];

  constructor(private clientService: ClientService) { }

  ngOnInit() {
    this.clientService.getJSONData("photos?albumId="+this.album.id).subscribe(res => {
      this.pictures = res;
      this.dataReady = true;
    });
  }

}
