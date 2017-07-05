"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var ngx_bootstrap_1 = require("ngx-bootstrap");
var ALLAPPS = [
    { id: 11,
        name: "Photo Album",
        thumb: "img/photoalbum-thumb.jpg",
        shortDesc: "A simple photo album",
        categories: ["media", "gallery", "pictures"],
        repo: "https://github.com/ethereum/swarm-dapps/tree/master/examples/album",
        url: "/bzz:/photoalbum.eth/",
        images: [
            { img: "img/photoalbum1.jpg", caption: "Picture gallery" },
            { img: "img/photoalbum2.jpg", caption: "Basic operations" },
            { img: "img/photoalbum3.jpg", caption: "Upload pictures" },
        ]
    },
    { id: 21,
        name: "Mark-Down Editor",
        thumb: "img/md-thumb.jpg",
        shortDesc: "An Editor which allows to create dynamic content and sites",
        categories: ["editor", "content management", "mark-down"],
        repo: "https://github.com/nagydani/swarm-dapps/tree/markdown-reader/examples/swarm-document-agent",
        url: "/bzz:/markdown-editor.eth/",
        images: [
            { img: "img/md-1.jpg", caption: "Basic styles" },
            { img: "img/md-2.jpg", caption: "Markdown" },
            { img: "img/md-3.jpg", caption: "Link styles" },
        ]
    },
    { id: 31,
        name: "Swarm Explorer",
        thumb: "img/explorer-thumb.jpg",
        shortDesc: "A file explorer",
        categories: ["files", "tools"],
        repo: "https://github.com/ethereum/swarm-dapps/tree/master/examples/filemanager",
        url: "/bzz:/swarm-explorer.eth/",
        images: [
            { img: "img/explorer1.jpg", caption: "Browse by hash" },
            { img: "img/explorer2.jpg", caption: "Create new folder" },
            { img: "img/explorer3.jpg", caption: "Internationalization" },
        ]
    }
];
var AppComponent = (function () {
    function AppComponent() {
        this.title = "Swarm DappStore";
        this.allSwarmApps = ALLAPPS;
        this.selectedApp = this.allSwarmApps[0];
    }
    AppComponent.prototype.moreInfo = function (s_app) {
        this.selectedApp = s_app;
        this.appDetailModal.show();
    };
    return AppComponent;
}());
__decorate([
    core_1.ViewChild('appDetailModal'),
    __metadata("design:type", ngx_bootstrap_1.ModalDirective)
], AppComponent.prototype, "appDetailModal", void 0);
AppComponent = __decorate([
    core_1.Component({
        selector: 'swarmapps',
        templateUrl: './swarmapps.html',
        styleUrls: ['swarmapps.css'],
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map