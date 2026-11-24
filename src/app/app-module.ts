import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { provideHttpClient } from '@angular/common/http';
import { Navbar } from './components/navbar/navbar';
import { Footer } from './components/footer/footer';
import { LandingPage } from './components/landing-page/landing-page';
import { Products } from './components/products/products';
import { AboutUs } from './components/about-us/about-us';
import { ContactUs } from './components/contact-us/contact-us';
import { Faq } from './components/faq/faq';

@NgModule({
  declarations: [App, Navbar, Footer, LandingPage, Products, AboutUs, ContactUs, Faq],
  imports: [BrowserModule, AppRoutingModule, FontAwesomeModule],
  providers: [provideBrowserGlobalErrorListeners(), provideHttpClient()],
  bootstrap: [App],
})
export class AppModule {}
