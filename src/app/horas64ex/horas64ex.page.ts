import { Component, OnInit } from '@angular/core';
import {AlertController} from '@ionic/angular';
import {NavController} from '@ionic/angular';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-horas64ex',
  templateUrl: './horas64ex.page.html',
  styleUrls: ['./horas64ex.page.scss'],
})
export class Horas64exPage implements OnInit {

  constructor(public alertCtrl: AlertController, public navCtrl: NavController, public toast: ToastController) { }
  
    EPE1 : any;
    EPE2 : any;
    EPE3 : any;
    Eva1 : any;
    Eva2 : any;
    Eva3 : any;
    Examen: any;

    np:any;
    evas:any;

    form:any;
    na:any;
    nm:any;

  async alerta64(){
    this.np= ((this.EPE1*0.07)+(this.EPE2*0.14)+(this.EPE3*0.21)+(this.Eva1*0.07)+(this.Eva2*0.07)+(this.Eva3*0.14)+(this.Examen*0.3));

    if (this.EPE1 <= 7.0 && this.EPE2 <= 7.0 && this.EPE3 <= 7.0 && this.Eva1 <= 7.0 && this.Eva2 <= 7.0 && this.Eva3 <= 7.0 && this.Examen <=7.0 && this.EPE1 >= 1.0 && this.EPE2 >= 1.0 && this.EPE3 >= 1.0 && this.Eva1 >= 1.0 && this.Eva2 >= 1.0 && this.Eva3 >= 1.0 && this.Examen >=1.0){
    if(this.np>=4.0){
      const alert = await this.alertCtrl.create({
        header : 'Concentracion de NOTAS',
        subHeader : 'Resultados:',
        message : 'Promedio Final:'+ this.np.toFixed(1)+'<br>'+'Aprobado',
        buttons :  ['Ok']
      });
      alert.present();
    }else{
  const alert = await this.alertCtrl.create({
    header : 'Concentracion de NOTAS',
    subHeader : 'Resultados:',
    message : 'Promedio Final:'+ this.np.toFixed(1)+'<br>'+'Reprobado',
    buttons :  ['Ok']
  });
  alert.present();
}
}else{
  const toast = await this.toast.create({
    message: 'Las notas no pueden ser mas altas que 7.0 ni mas bajas que 1.0',
    showCloseButton: true,
    position: "middle",
    closeButtonText: "OK"
  });
  toast.present();
}
  }
   
  volverinicio(){
    this.navCtrl.navigateForward("home")
  }

  ngOnInit() {
  }

}
