import { Component, OnInit } from '@angular/core';
import { ContentService } from '../shared/services/content.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {

  page = {
    title: 'Home',
    subtitle: 'Welcome Home!',
    content: 'Some home content.',
    image: 'assets/bg00.jpg',
    services : ['','']
  };

  constructor(private route: ActivatedRoute,
    private contentService: ContentService) { }

  ngOnInit() {
    const pageData = this.route.snapshot.data['page'];
    this.page = this.contentService.pages[pageData];
  }

  LoadPersonalInfo(){
    this.page = {title:'Your Information', subtitle : 'Tell us about yourself', content:'Your Info', image:'assets/bg1.jpg', services : []};
  }
  
  LoadHomePage(){
    this.page = {title: 'Our Services', subtitle: 'Welcome Home!', content: 'Some home content.', image: 'assets/bg1.jpg', services : ['service1','service2','service3']};
  }


}
