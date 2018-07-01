import { Component, OnInit, HostBinding } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';
import { ElectronService } from '../../providers/electron.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(public overlayContainer: OverlayContainer, public electronService: ElectronService) {}

  @HostBinding('class') componentCssClass;

  ngOnInit() {}

  onSetTheme(theme) {
    this.overlayContainer.getContainerElement().classList.add(theme);
    this.componentCssClass = theme;
  }

  minimizeApp() {
    this.electronService.ipcRenderer.send('app-minimize', true);
  }

  maximizeApp() {
    this.electronService.ipcRenderer.send('app-maximize', true);
  }

  closeApp() {
    this.electronService.ipcRenderer.send('app-close', true);
  }
}
