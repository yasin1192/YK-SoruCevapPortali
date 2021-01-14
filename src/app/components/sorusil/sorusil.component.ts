import { Soru } from './../../models/soru';
import { FbServisService } from './../../services/fbServis.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sorusil',
  templateUrl: './sorusil.component.html',
  styleUrls: ['./sorusil.component.scss']
})
export class SorusilComponent implements OnInit {
  uid: string;
  key: string;
  secSoru: Soru = new Soru();
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

  Sil() {
    this.fbServis.SoruSil(this.key).then(d => {
      this.router.navigate(['/soru']);
    });
  }
}
