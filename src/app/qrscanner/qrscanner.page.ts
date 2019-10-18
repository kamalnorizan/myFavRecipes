import { Component, OnInit } from '@angular/core';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner/ngx';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-qrscanner',
  templateUrl: './qrscanner.page.html',
  styleUrls: ['./qrscanner.page.scss'],
})
export class QrscannerPage implements OnInit {

  constructor(
    public barcodeCtrl: BarcodeScanner,
    public authService: AuthService
    ) { }

  ngOnInit() {
  }



  scanCode() {
    const options: BarcodeScannerOptions = {
      preferFrontCamera: true,
      showFlipCameraButton: true,
      showTorchButton: true,
      torchOn: false,
      prompt: 'Place a barcode inside the scan area',
      resultDisplayDuration: 500,
      formats: 'QR_CODE,CODE_128,PDF_417',
      orientation: 'landscape',
    };

    this.barcodeCtrl.scan(options).then(
      barcodeData => {
        console.log('Barcode Data is:', barcodeData);
        // alert(barcodeData.text)
        this.authService.assignLog(barcodeData.text).subscribe(
          data => {
            alert(data);
          },
          error => {
            console.log(error);
          }
        );
      }
    );
  }

}
