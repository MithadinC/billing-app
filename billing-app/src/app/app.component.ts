import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DataService } from './data.service';
import { DialogDataComponent } from './dialog-data/dialog-data.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'billing-app';
  constructor(public dialog: MatDialog, private dataServcie: DataService) { }

  openDialog() {
    const dialogRef = this.dialog.open(DialogDataComponent, {
      data: {
        name: "Mith"
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }
}
