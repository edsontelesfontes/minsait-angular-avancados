import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { ReactiveFormsModule } from '@angular/forms';

import {HttpClientModule} from '@angular/common/http'; // add this line


@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        ReactiveFormsModule
    ]
})
export class AppModule { }
