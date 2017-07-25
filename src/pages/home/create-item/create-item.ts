/**
 * Created by lonik on 25.07.2017.
 */
import {Component} from '@angular/core';
import {ViewController, LoadingController} from 'ionic-angular';



@Component({
    selector: 'page-create-item',
    templateUrl: 'create-item.html'

})
export class CreateItem {
        public counterCharacters:number = 27;

    constructor(public viewCtrl: ViewController, public loadingCtrl: LoadingController) {

    }
    cancel() {
        this.viewCtrl.dismiss();
    }
    done(t){
        if(t.value){
            this.viewCtrl.dismiss(t.value);
            this.presentLoading();
        }else{
            console.log('Write text or press cancel!')
        }
    }
    getText(e){
         this.counterCharacters = 27 - e.value.length;
    }
    presentLoading() {
        let loader = this.loadingCtrl.create({
            content: "Please wait...",
            duration: 3000
        });
        loader.present();
    }


}
