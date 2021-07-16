import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor() { }
  pages: any = {
    'home': {title: 'Home', subtitle: 'Welcome Home!', content: 'Some home content.', image: 'assets/bg00.jpg', services : ['service1','service2','service3']},
    'about': {title: 'About', subtitle: 'About Us', content: 'Some content about us.', image: 'assets/bg01.jpg'},
    'contact': {title: 'Contact', subtitle: 'Contact Us', content: 'How to contact us.', image: 'assets/bg02.jpg'}
  };
}
