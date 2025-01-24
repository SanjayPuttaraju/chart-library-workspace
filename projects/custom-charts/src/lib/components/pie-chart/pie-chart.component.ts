import { Component, Input } from '@angular/core';
import {
  ChartConfiguration,
  ChartOptions,
  ChartType,
} from 'chart.js';

@Component({
  selector: 'app-pie-chart',
  template: `
    <div style="display: block;">
      <canvas
        baseChart
        [data]="data"
        [labels]="labels"
        [options]="options"
        [type]="chartType">
      </canvas>
    </div>
  `,
})
export class PieChartComponent {
  @Input() data: number[] = []; // Data values for the pie chart
  @Input() labels: string[] = []; // Labels for the pie chart
  @Input() options: ChartOptions<'pie'> = {
    responsive: true,
  }; // Chart.js options
  chartType: ChartType = 'pie'; // Chart type
}
