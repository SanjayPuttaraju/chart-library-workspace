import { Component, Input } from '@angular/core';
import {
  ChartConfiguration,
  ChartOptions,
  ChartType,
} from 'chart.js';

@Component({
  selector: 'app-bar-chart',
  template: `
    <div style="display: block;">
      <canvas
        baseChart
        [data]="datasets"
        [labels]="labels"
        [options]="options"
        [type]="chartType">
      </canvas>
    </div>
  `,
})
export class BarChartComponent {
  @Input() datasets: ChartConfiguration<'bar'>['data']['datasets'] = [];
  @Input() labels: string[] = []; // Labels for bar chart
  @Input() options: ChartOptions<'bar'> = {
    responsive: true,
  }; // Chart.js options
  chartType: ChartType = 'bar'; // Chart type
}
