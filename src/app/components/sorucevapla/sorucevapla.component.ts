import { Sonuc } from './../../models/sonuc';
import { Kayit } from './../../models/kayit';
import { FbServisService } from './../../services/fbServis.service';
import { Soru } from './../../models/soru';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sorucevapla',
  templateUrl: './sorucevapla.component.html',
  styleUrls: ['./sorucevapla.component.scss']
})
export class SorucevaplaComponent implements OnInit {

  ekleduzenle: boolean = false;
  adsoyad: string;
  uid: string;
  kayitlar: Kayit[];
  sorular: Soru[];
  secSoru: Soru = new Soru();
  secKayit: Kayit = new Kayit();
  sonuc: Sonuc;
  key: string;
  constructor(
    public fbServis: FbServisService,
    public router: Router,
    public route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe(p => {
      this.key = p.key;

      this.KayitGetir();

    });
    this.SoruListele();

  }
  SoruListele() {
    this.fbServis.SoruListele().snapshotChanges().subscribe(data => {
      this.sorular = [];
      data.forEach(satir => {
        const y = { ...satir.payload.toJSON(), key: satir.key };
        this.sorular.push(y as Soru);
        this.secKayit.soru = this.secSoru.soru;
      });
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
    if (this.secKayit.key == null) {
      this.secKayit.kayTarih = tarih.getTime().toString();
      this.secKayit.duzTarih = tarih.getTime().toString();
      this.secKayit.islem = false;
      this.fbServis.CevapEkle(this.secKayit).then(d => {
        this.secKayit.islem = true;
        this.secKayit.mesaj = "Cevap Eklendi";
      });
    } else {
      this.secKayit.duzTarih = tarih.getTime().toString();
      this.secKayit.islem = false;
      this.fbServis.KayitDuzenle(this.secKayit).then(d => {
        this.sonuc.islem = true;
        this.sonuc.mesaj = "Cevap Güncellendi";
      });
    }
    this.key = null;

  }

}
