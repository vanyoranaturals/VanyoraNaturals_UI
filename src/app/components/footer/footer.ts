import { Component } from '@angular/core';

interface FooterLink {
  label: string;
  path: string;
}

interface SocialLink {
  name: string;
  url: string;
  iconClass: string;
}

@Component({
  selector: 'app-footer',
  standalone: false,
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  currentYear = new Date().getFullYear();

  productLinks: FooterLink[] = [
    { label: 'All Products', path: '/products' },
    { label: 'Plant-Based Nutrition', path: '/products/plant-based-nutrition' },
    { label: 'Superfoods', path: '/products/superfoods' },
    { label: 'Herbal Wellness', path: '/products/herbal-wellness' }
  ];

  quickLinks: FooterLink[] = [
    { label: 'Home', path: '/home' },
    { label: 'About Us', path: '/about-us' },
    { label: 'FAQ', path: '/faq' },
    { label: 'Contact Us', path: '/contact-us' }
  ];

  socialLinks: SocialLink[] = [
    { name: 'Instagram', url: 'https://instagram.com', iconClass: 'fa-brands fa-instagram' },
    { name: 'Facebook', url: 'https://facebook.com', iconClass: 'fa-brands fa-facebook-f' },
    { name: 'YouTube', url: 'https://youtube.com', iconClass: 'fa-brands fa-youtube' },
    { name: 'WhatsApp', url: 'https://whatsapp.com', iconClass: 'fa-brands fa-whatsapp' }
  ];
}
