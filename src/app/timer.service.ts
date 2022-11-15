import { Injectable } from '@angular/core';
import { BitcoinService } from './bitcoin.service';

@Injectable()
export class TimerService {
  constructor(public BitcoinService: BitcoinService) {}

  private timer: any;
  private counterSegundos: number = 0;
  private counterMinutos: number = 0;

  start() {
    this.BitcoinService.update();
    if (!this.timer) {
      this.timer = setInterval(() => {
        this.counterSegundos++;
        if (this.counterSegundos == 60) {
          this.BitcoinService.update();
          this.counterSegundos = 0;
          this.counterMinutos++;
        }
      }, 1000);
    }
  }
  getCountSegundos() {
    return this.counterSegundos;
  }
  getCountMinutos() {
    return this.counterMinutos;
  }
}
