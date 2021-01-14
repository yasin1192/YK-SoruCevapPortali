import { FbServisService } from './../../services/fbServis.service';
import { Soru } from './../../models/soru';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-soruduzenle',
  templateUrl: './soruduzenle.component.html',
  styleUrls: ['./soruduzenle.component.scss']
})
export class SoruduzenleComponent implements OnInit {
  key: string;
  secSoru: Soru = new Soru();
  uid: string;
  constructor(
    public route: ActivatedRoute,
    public fbServis: FbServisService,
    public router: Router
  ) { }

  ngOnInit() {
    var user = JSON.parse(localStorage.getItem("user"));
    this.uid = user.uid;
    this.route.params.subscribe(p => {
      this.key = p.key;
      this.KayitGetir();
    });
  }
  KayitGetir() {
    this.fbServis.SoruByKey(this.key).snapshotChanges().subscribe(data => {
      const y = { ...data.payload.toJSON(), key: this.key };
      this.secSoru = (y as Soru);

    });
  }

  Kaydet() {
    var tarih = new Date();
    this.secSoru.duzTarih = tarih.getTime().toString();
    this.fbServis.SoruDuzenle(this.secSoru).then(d => {
      this.router.navigate(['/soru']);
    });
  }
}
