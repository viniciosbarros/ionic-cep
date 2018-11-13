import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Cep} from "../../model/cep";
import {CepProvider} from "../../providers/cep/cep";

/**
 * Generated class for the CepPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-cep',
    templateUrl: 'cep.html',
})
export class CepPage {

    public cep: Cep;
    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                private cepProvider: CepProvider
    ) {
        this.cep = new Cep();
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad CepPage');
    }

    getCep($event) {

        console.log(this.cep);
        this.cepProvider.getCep(this.cep).subscribe((data) =>
            this.cep = data
        );
    }



}
