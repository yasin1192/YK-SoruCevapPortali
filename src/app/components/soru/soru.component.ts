import { Sonuc } from './../../models/sonuc';
import { Soru } from './../../models/soru';
import { Router } from '@angular/router';
import { FbServisService } from './../../services/fbServis.service';
import { Kayit } from './../../models/kayit';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-soru',
  templateUrl: './soru.component.html',
  styleUrls: ['./soru.component.scss']
})
export class SoruComponent implements OnInit {
  title = 'Soru-Cevap-Portal';
  adsoyad: string;
  uid: string;
  kayitlar: Kayit[];
  sorular: Soru[];
  secSoru: Soru;

  constructor(
    public fbServis: FbServisService,
    public router: Router
  ) { }

  ngOnInit() {
    var user = JSON.parse(localStorage.getItem("user"));
    this.uid = user.uid;
    this.adsoyad = user.displayName;
    this.SoruListele();
  }
  OturumKapat() {
    this.fbServis.OturumKapat().then(d => {
      localStorage.removeItem("user");
      this.router.navigate(['/login']);
    });

  }
  SoruListele() {
    this.fbServis.SoruListele().snapshotChanges().subscribe(data => {
      this.sorular = [];
      data.forEach(satir => {
        const y = { ...satir.payload.toJSON(), key: satir.key };
        this.sorular.push(y as Soru);
      });
    });
  }

}
