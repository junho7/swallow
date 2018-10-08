import { Component, OnInit } from '@angular/core';
import { AppService } from '../../services/app.service';
import { SwallowTestService } from '../../services/swallow/swallow.test.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(public a: AppService, public st: SwallowTestService) {}

  ngOnInit() {}
}
