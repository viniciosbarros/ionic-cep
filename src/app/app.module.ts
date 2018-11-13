import { BrowserModule } from '@angular/platform-browser';
import {ErrorHandler, Injectable, NgModule} from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule } from "@angular/common/http";

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CepProvider } from '../providers/cep/cep';
import { CepPage } from "../pages/cep/cep";
import {Cep} from "../model/cep";



@NgModule({
    declarations: [
        MyApp,
        HomePage,
        ListPage,
        CepPage
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp),
        HttpClientModule
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        HomePage,
        ListPage,
        CepPage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: ErrorHandler, useClass: IonicErrorHandler},
        CepProvider,
        Cep
    ]
})
export class AppModule {}
