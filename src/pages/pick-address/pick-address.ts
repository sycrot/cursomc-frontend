import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EnderecoDTO } from '../../models/endereco.dto';

@IonicPage()
@Component({
  selector: 'page-pick-address',
  templateUrl: 'pick-address.html',
})
export class PickAddressPage {

  items: EnderecoDTO[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    
    this.items = [
      {
        id: "1",
        logradouro: "RUa tutut",
        numero: "345",
        complemento: "Apto 23",
        bairro: "Sao sebastian",
        cep: "420000999",
        cidade: {
          id: "1",
          nome: "Uberlandia",
          estado: {
            id: "1",
            nome: "Minas gerals"
          }
        }
      },
      {
        id: "2",
        logradouro: "RUa tirutiru",
        numero: "234",
        complemento: "Apto 12",
        bairro: "Sao miheul",
        cep: "420000999",
        cidade: {
          id: "1",
          nome: "Sao Paulo",
          estado: {
            id: "1",
            nome: "Sao Paulo"
          }
        }
      }
    ]

  }

}
