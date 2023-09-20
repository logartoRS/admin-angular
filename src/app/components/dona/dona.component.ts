import { Component, Input } from '@angular/core';
import { ChartData, ChartEvent, ChartType } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styleUrls: []
})
export class DonaComponent {
  @Input() title: string = 'Sin título';
  
  @Input('data') doughnutChartData: ChartData<'doughnut'> = {
    labels: ['Label 1', 'Label 2', 'Label 3'],
    datasets: [
      { 
        data: [350, 450, 100],
        backgroundColor: ['#6857E6','#009FEE','#F02059'],
      },
    ],
  };

  public doughnutChartType: ChartType = 'doughnut';
}
