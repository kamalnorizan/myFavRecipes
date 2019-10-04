import { Component, OnInit } from '@angular/core';
import { LoginPage } from '../login/login.page';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(
    private modalController: ModalController
  ) {
  }


  ngOnInit() {
    console.log('Register : NgOnInit');
  }

  dismissRegister() {
    this.modalController.dismiss();
  }

  register(form) {

  }

  async loginModal() {
    this.dismissRegister();
    const loginModal = await this.modalController.create({
      component: LoginPage
    });
    return await loginModal.present();
  }
}
