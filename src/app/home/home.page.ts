
import { Component, ElementRef, ViewChildren, ViewChild } from '@angular/core';
import { Firestore, doc, setDoc  } from '@angular/fire/firestore';
import type { Animation } from '@ionic/angular';
import { AnimationController, IonButton, IonCardContent } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private db:Firestore) {}
  estado: boolean=true;
  ledstate:any;
  estado1: boolean=true;
  ledstate1:any;
  estado2: boolean=true;
  ledstate2:any;
  ledap:any;
  async toogle() {
      this.estado=!this.estado;
      this.ledstate = doc(this.db,'controlLED','webLEDS');
      await setDoc(this.ledstate, { led1: !this.estado});
    }
    async toogle1() {
      this.estado1=!this.estado1;
      this.ledstate1 = doc(this.db,'controlLED','webLEDS1');
      await setDoc(this.ledstate1, {led2: !this.estado1});
    }
    async toogle2() {
      this.estado2=!this.estado2;
      this.ledstate2 = doc(this.db,'controlLED','webLEDS2');
      await setDoc(this.ledstate2, {led3: !this.estado2 });
    }
    async apagar() {
      
      if(this.estado){
        this.estado=false;
        this.ledap = doc(this.db,'controlLED','webLEDS');
      await setDoc(this.ledap, { led1: !false });
      }else{
        this.estado=true;
        this.ledap = doc(this.db,'controlLED','webLEDS');
      await setDoc(this.ledap, { led1: !true });
      }
      if(this.estado1){
        this.estado1=false;
        this.ledap = doc(this.db,'controlLED','webLEDS1');
      await setDoc(this.ledap, { led2: !false });
      }else{
        this.estado1=true;
        this.ledap = doc(this.db,'controlLED','webLEDS1');
        await setDoc(this.ledap, { led2: !true });
      }
      if(this.estado2){
        this.estado2=false;
        this.ledap = doc(this.db,'controlLED','webLEDS2');
      await setDoc(this.ledap, { led3: !false });
      }else{
        this.estado2=true;
        this.ledap = doc(this.db,'controlLED','webLEDS2');
      await setDoc(this.ledap, { led3: !true });
      }
    }
  }

