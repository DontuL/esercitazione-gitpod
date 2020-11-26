import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent implements OnInit {
 name: string; // <-- aggiunta la proprietà name
  constructor() {
    this.name = 'Mario'; // setta il nome nel costruttore
  }
  ngOnInit(): void {
  }

}
