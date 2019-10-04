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
  ) { }

  ngOnInit() {
  }

  register(form) {

  }

  async loginModal() {
    const loginModal = await this.modalController.create({
      component: LoginPage
    });
    return await loginModal.present();
  }
}
