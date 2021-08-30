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
    services: ['', '']
  };

  linuxImage = 'assets/linux.png';
  cloudImage = 'assets/cloud.png';
  enterpriseImage = 'assets/enterprise.png';

  constructor(private route: ActivatedRoute,
    private contentService: ContentService) { }

  ngOnInit() {
    const pageData = this.route.snapshot.data['page'];
    this.page = this.contentService.pages[pageData];
  }

  LoadPersonalInfo() {
    this.page = { title: 'Your Information', subtitle: 'Tell us about yourself', content: 'Your Info', image: 'assets/bgg.jpg', services: [] };
  }

  LoadHomePage() {
    this.page = { title: 'Our Services', subtitle: 'Welcome Home!', content: 'Some home content.', image: 'assets/bgg.jpg', services: ['service1', 'service2', 'service3'] };
  }


}
