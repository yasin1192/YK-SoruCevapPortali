import { Soru } from './../../models/soru';
import { Sonuc } from './../../models/sonuc';
import { Kayit } from './../../models/kayit';
import { FbServisService } from './../../services/fbServis.service';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  secKayit: Kayit = new Kayit();
  secSoru: Soru = new Soru();
  sonuc: Sonuc = new Sonuc();
  ekleduzenle: boolean = false;
  detay: boolean = false;
  silme: boolean = false;
  adsoyad: string;
  uid: string;
  kayitlar: Kayit[];
  sorular: Soru[];
  constructor(
    public fbServis: FbServisService,
    public router: Router,
    public route: ActivatedRoute
  ) { }

  ngOnInit() {
    var user = JSON.parse(localStorage.getItem("user"));
    this.uid = user.uid;
    this.adsoyad = user.displayName;

    this.KayitLislele();
  }

  KayitLislele() {
    this.fbServis.KayitListele().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(data => {
      this.kayitlar = data;

    });
  }
  Kaydet() {
    var tarih = new Date();
    if (this.secKayit.key == null) {
      this.secKayit.kayTarih = tarih.getTime().toString();
      this.secKayit.duzTarih = tarih.getTime().toString();
      this.secKayit.islem = false;
      this.fbServis.CevapEkle(this.secKayit).then(d => {
        this.sonuc.islem = true;
        this.sonuc.mesaj = "Kayıt Eklendi";
      });
    } else {
      this.secKayit.duzTarih = tarih.getTime().toString();
      this.secKayit.islem = false;
      this.fbServis.KayitDuzenle(this.secKayit).then(d => {
        this.sonuc.islem = true;
        this.sonuc.mesaj = "Kayıt Güncellendi";
      });
    }
  }

  KayitSec(k: Kayit) {
    Object.assign(this.secKayit, k);

  }

  Sil() {

    this.fbServis.KayitSil(this.secKayit.key).then(d => {
      this.sonuc.islem = true;
      this.sonuc.mesaj = "Kayıt Silindi";
      this.silme = false;
    });
  }

  TamamlaIptal(k: Kayit, islem: boolean) {
    var tarih = new Date();
    k.duzTarih = tarih.getTime().toString();
    k.islem = islem;
    this.fbServis.KayitDuzenle(k).then(d => {
      this.sonuc.islem = true;
      this.sonuc.mesaj = "Kayıt Güncellendi";
    });

  }
  OturumuKapat() {
    this.fbServis.OturumKapat().then(() => {
      localStorage.removeItem("user");
      this.router.navigate(['/login']);
    });
  }
}
