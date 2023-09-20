import { Component } from '@angular/core';
import { ChartData } from 'chart.js';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styleUrls: []
})
export class Grafica1Component {
  public data1: ChartData<'doughnut'> = {
    labels: ['Venta 1', 'Venta 2', 'Venta 3'],
    datasets: [
      {
        data: [10, 5, 45]
      }
    ]
  }
}
