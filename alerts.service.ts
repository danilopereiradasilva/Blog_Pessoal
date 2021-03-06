import { Injectable } from '@angular/core';
import { BsModalRef, BsModalService} from 'ngx-bootstrap/modal'
import { AlertComponent } from '../alert/alert.component';

@Injectable({
  providedIn: 'root'
})
export class AlertsService {

  constructor(
    private bsModalService: BsModalService //injecao do modal para o alerta
  ) { }

  private showAlert(message: string, type: String){
    const bsModalRef: BsModalRef = this.bsModalService.show(AlertComponent)
    bsModalRef.content.type = type
    bsModalRef.content.message = message
  }

  showAlertDanger(message: string){
    this.showAlert(message, 'Perigo!!!')
  }

  showAlertSuccess(message: string){
    this.showAlert(message, 'Sucesso!!!')
  }

  showAlertInfo(message: string){
    this.showAlert(message, 'info')
  }
}