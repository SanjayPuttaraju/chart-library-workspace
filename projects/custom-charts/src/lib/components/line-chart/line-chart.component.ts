import { Component, Input } from '@angular/core';
import {
  ChartConfiguration,
  ChartOptions,
  ChartType,
} from 'chart.js';

@Component({
  selector: 'app-line-chart',
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
export class LineChartComponent {
  @Input() datasets: ChartConfiguration<'line'>['data']['datasets'] = [];
  @Input() labels: string[] = []; // Labels for line chart
  @Input() options: ChartOptions<'line'> = {
    responsive: true,
  }; // Chart.js options
  chartType: ChartType = 'line'; // Chart type
}
