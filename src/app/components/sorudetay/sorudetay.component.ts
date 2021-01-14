import { Kayit } from './../../models/kayit';
import { FbServisService } from './../../services/fbServis.service';
import { Soru } from './../../models/soru';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sorudetay',
  templateUrl: './sorudetay.component.html',
  styleUrls: ['./sorudetay.component.scss']
})
export class SorudetayComponent implements OnInit {

  key: string;
  secSoru: Soru = new Soru();


  constructor(
    public route: ActivatedRoute,
    public fbServis: FbServisService,
    public router: Router
  ) { }

  ngOnInit() {

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

}
