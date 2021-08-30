import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor() { }
  pages: any = {
    'home': { title: 'Our Services', subtitle: 'Welcome Home!', content: 'Some home content.', image: 'assets/bgg.jpg', services: ['service1', 'service2', 'service3'] },
    'about': { title: 'About', subtitle: 'About Us', content: 'Some content about us.', image: 'assets/bgg.jpg', services: [] },
    'contact': { title: 'Contact', subtitle: 'Contact Us', content: 'How to contact us.', image: 'assets/bgg.jpg', services: [] },
    'personalInformation': { title: 'Your Information', subtitle: 'Tell us about yourself', content: 'Your Info', image: 'assets/bgg.jpg', services: [] }
  };
}
