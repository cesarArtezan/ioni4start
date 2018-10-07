import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  id;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(c => console.log('params', c));
    this.route.queryParams.subscribe(p => console.log('qp', p));
    this.id = this.route.snapshot.queryParamMap.get('id');
  }
}
