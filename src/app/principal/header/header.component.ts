import { Component, OnInit, OnDestroy, EventEmitter, Output } from '@angular/core';
import { PrincipalServices } from '../../servicios/principal.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
  }



}
