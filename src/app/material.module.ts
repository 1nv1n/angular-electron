import { NgModule } from '@angular/core';

import { MatButtonModule, MatMenuModule, MatToolbarModule, MatIconModule, MatCardModule } from '@angular/material';
import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
  imports: [MatButtonModule, MatMenuModule, MatToolbarModule, MatIconModule, MatCardModule, MatSidenavModule],
  exports: [MatButtonModule, MatMenuModule, MatToolbarModule, MatIconModule, MatCardModule, MatSidenavModule]
})
export class MaterialModule {}
