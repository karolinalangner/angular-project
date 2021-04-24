import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  name =''

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.name = this.route.snapshot.params['name']
    this.name = this.name[0].toUpperCase() + this.name.slice(1);
  }

  goToTodos() {
    this.router.navigate(['todos'])
  }

}
