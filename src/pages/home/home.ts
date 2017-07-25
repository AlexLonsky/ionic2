import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {
    public swipe: number = 0;
    public align: any = 'right';
    public items:any = [];
    public basket:any = [];
    public view:boolean = false;
    public edit:boolean = false;

    constructor(public navCtrl: NavController) {
        this.initItems()
    }
    initItems(){
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
    showAllItems(){
        this.view = false;
        this.basket = [];
    }
    editItems(){
        console.log('edit')
    this.edit = true;
    }
}