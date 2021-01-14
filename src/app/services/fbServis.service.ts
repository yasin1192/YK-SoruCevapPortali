import { Uye } from './../models/uye';
import { Soru } from './../models/soru';
import { Kayit } from './../models/kayit';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database'
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class FbServisService {

  private dbKayit = '/Cevaplar';
  private dbSoru = '/Sorular';
  private dbUye = '/Uyeler';
  kayitRef: AngularFireList<Kayit> = null;
  SorukayitRef: AngularFireList<Soru> = null;
  uyeRef: AngularFireList<Uye> = null;

  constructor(
    public db: AngularFireDatabase,
    public afAuth: AngularFireAuth
  ) {
    this.kayitRef = db.list(this.dbKayit);
    this.SorukayitRef = db.list(this.dbSoru);
    this.uyeRef = db.list(this.dbUye)
  }

  OturumAc(mail: string, parola: string) {
    return this.afAuth.signInWithEmailAndPassword(mail, parola);
  }
  OturumKapat() {
    return this.afAuth.signOut();
  }
  OturumKontrol() {
    if (localStorage.getItem("user")) {
      return true;
    } else {
      return false;
    }
  }
  UyeOl(uye: Uye) {
    return this.afAuth.createUserWithEmailAndPassword(uye.mail, uye.parola);
  }

  UyeEkle(uye: Uye) {
    return this.uyeRef.push(uye);
  }
  KayitListele() {
    return this.kayitRef;
  }
  CevapEkle(k: Kayit) {
    return this.kayitRef.push(k);
  }
  KayitDuzenle(k: Kayit) {
    return this.kayitRef.update(k.key, k);
  }
  KayitSil(key: string) {
    return this.kayitRef.remove(key);
  }
  SoruListeleByUID(uid: string) {
    return this.db.list("Sorular", q => q.orderByChild("uid").equalTo(uid));
  }
  SoruByKey(key: string) {
    return this.db.object("Sorular/" + key);
  }
  CevapByKey(key: string) {
    return this.db.object("Cevaplar/" + key);
  }

  //*Soru için Servis*//
  SoruEkle(soru: Soru) {
    return this.SorukayitRef.push(soru);
  }
  SoruDuzenle(soru: Soru) {
    return this.SorukayitRef.update(soru.key, soru);
  }
  SoruSil(key: string) {
    return this.SorukayitRef.remove(key);
  }
  SoruListele() {
    return this.SorukayitRef;
  }
}