import { Kayit } from './../../models/kayit';
import { Soru } from './../../models/soru';
import { Router } from '@angular/router';
import { FbServisService } from './../../services/fbServis.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-soruekle',
  templateUrl: './soruekle.component.html',
  styleUrls: ['./soruekle.component.scss']
})
export class SoruekleComponent implements OnInit {
  secSoru: Soru = new Soru();
  constructor(
    public fbServis: FbServisService,
    public router: Router
  ) { }

  ngOnInit() {

  }
  Kaydet() {
    var user = JSON.parse(localStorage.getItem("user"));
    this.secSoru.uid = user.uid;
    var tarih = new Date();
    this.secSoru.kayTarih = tarih.getTime().toString();
    this.secSoru.duzTarih = tarih.getTime().toString();
    this.fbServis.SoruEkle(this.secSoru).then(d => {
      this.router.navigate(['/soru']);
    });
  }
}
