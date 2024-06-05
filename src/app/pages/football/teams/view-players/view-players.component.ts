import { Component, Input, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-view-players',
  templateUrl: './view-players.component.html',
  styleUrls: ['./view-players.component.css']
})
export class ViewPlayersComponent implements OnInit {

  @Input() param: any;
  
  constructor(public dialogRef: MatDialogRef<ViewPlayersComponent>,) { }

  ngOnInit(): void {
  }

  dismiss() {
    this.dialogRef.close();
  }

  close() {
    this.dialogRef.close(1);
  }

}
