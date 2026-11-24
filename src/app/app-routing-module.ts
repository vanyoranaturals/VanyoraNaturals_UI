import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPage } from './components/landing-page/landing-page';
import { Products } from './components/products/products';
import { AboutUs } from './components/about-us/about-us';
import { ContactUs } from './components/contact-us/contact-us';
import { Faq } from './components/faq/faq';

const routes: Routes = [
  { path: 'home', component: LandingPage, pathMatch: 'full' },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'products', component: Products, pathMatch: 'full' },
  { path: 'about-us', component: AboutUs, pathMatch: 'full' },
  { path: 'contact-us', component: ContactUs, pathMatch: 'full' },
  { path: 'faq', component: Faq, pathMatch: 'full' },
  { path: '**', redirectTo: '/home', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
