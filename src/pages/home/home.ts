import {Component} from '@angular/core';
import {ModalController} from 'ionic-angular';
import {CreateItem} from './create-item/create-item'

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {
    public swipe: number = 0;
    public align: any = 'right';
    public items: any = [];
    public basket: any = [];
    public view: boolean = false;
    public edit: boolean = false;

    constructor(public modalCtrl: ModalController) {
        this.initItems()
    }

    initItems() {
        this.items = [
            {
                title: 'Milk 1l',
                status: false
            }
            , {
                title: 'Eggs Medium 12 pack',
                status: true
            },
            {
                title: 'Fresh Basil',
                status: false
            },
            {
                title: 'Wholegrain Bread 1 pkg',
                status: true
            },
            {
                title: 'Ground Coffee 200g',
                status: true
            },
            {
                title: 'Red Wine',
                status: false
            },
            {
                title: 'Mozzarella Cheese 150g',
                status: false
            },
            {
                title: 'Orange Juice 1l',
                status: true
            },
            {
                title: 'Tomatoes',
                status: false
            }
        ];

    }

    swipeEvent(item) {
        item.status = item.status ? false : true;
    }

    showBasket() {
        this.view = true;
        this.basket = this.items.filter((item) => {
            return (item.status == true);
        })
    } 

    showAllItems() {
        this.view = false;
        this.edit = false;
        this.basket = [];
    }

    editItems() {
        if (!this.view) {
            this.edit = this.edit ? false : true;
        }
    }

    createItem() {
        let myModal = this.modalCtrl.create(CreateItem, {});
        myModal.onDidDismiss(data => {
            if (data) {
                let item = {
                    title: data,
                    status: false
                };
                this.edit = false;
                this.items.push(item);
            }
        });
        myModal.present();
    }

    deleteItem(i) {
        this.items.splice(i, 1);
    }
}