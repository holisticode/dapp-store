import { Component, ViewChild } from '@angular/core';
import { ModalDirective} from 'ngx-bootstrap';

import { SwarmApp } from './swarmapp';

const ALLAPPS: SwarmApp[] = [
  { id: 11, 
    name: "Photo Album", 
    thumb: "img/photoalbum-thumb.jpg", 
    shortDesc: "A simple photo album",
    categories: ["media","gallery","pictures"],
    repo: "https://github.com/ethereum/swarm-dapps/tree/master/examples/album",
    url: "/bzz:/photoalbum.eth/",
    images: [
        {img: "img/photoalbum1.jpg", caption:"Picture gallery"},
        {img: "img/photoalbum2.jpg", caption:"Basic operations"},
        {img: "img/photoalbum3.jpg", caption:"Upload pictures"},
   ]
  },
  { id: 21, 
    name: "Mark-Down Editor", 
    thumb: "img/md-thumb.jpg", 
    shortDesc: "An Editor which allows to create dynamic content and sites",
    categories: ["editor","content management","mark-down"],
    repo: "https://github.com/nagydani/swarm-dapps/tree/markdown-reader/examples/swarm-document-agent",
    url: "/bzz:/markdown-editor.eth/",
    images: [
        {img: "img/md-1.jpg", caption:"Basic styles"},
        {img: "img/md-2.jpg", caption:"Markdown"},
        {img: "img/md-3.jpg", caption:"Link styles"},
   ]
  },
  { id: 31, 
    name: "Swarm Explorer", 
    thumb: "img/explorer-thumb.jpg", 
    shortDesc: "A file explorer",
    categories: ["files","tools"],
    repo: "https://github.com/ethereum/swarm-dapps/tree/master/examples/filemanager",
    url: "/bzz:/swarm-explorer.eth/",
    images: [
        {img: "img/explorer1.jpg", caption:"Browse by hash"},
        {img: "img/explorer2.jpg", caption:"Create new folder"},
        {img: "img/explorer3.jpg", caption:"Internationalization"},
   ]
  }
]

@Component({
  selector: 'swarmapps',
  templateUrl: './swarmapps.html', 
  styleUrls: ['swarmapps.css'],
})

export class AppComponent { 
  @ViewChild('appDetailModal') public appDetailModal:ModalDirective;

  title = "Swarm DappStore";
  allSwarmApps = ALLAPPS;
  selectedApp: SwarmApp = this.allSwarmApps[0];
 
  moreInfo(s_app: SwarmApp): void {
    this.selectedApp = s_app;
    this.appDetailModal.show();
  }
}

