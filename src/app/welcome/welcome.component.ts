import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  name =''
  welcomeMessageFromService:string 

  constructor(private router: Router, private route: ActivatedRoute, private service: WelcomeDataService) { }

  ngOnInit() {
    this.name = this.route.snapshot.params['name']
  }

  goToTodos() {
    this.router.navigate(['todos'])
  }

  getWelcomeMessageWithParameter() {
    console.log(this.service.executeHelloWorldBeanService());
    this.service.executeHelloWorldBeanServiceWithPathService(this.name).subscribe(
      response => this.handleSuccessfulResponse(response)
    );
  }

  handleSuccessfulResponse(response){
    this.welcomeMessageFromService = response.message;
  }

}
