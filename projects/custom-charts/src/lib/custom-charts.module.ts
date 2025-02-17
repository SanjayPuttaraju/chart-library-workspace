import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgChartsModule } from 'ng2-charts';

// Import your chart components
import { PieChartComponent } from './components/pie-chart/pie-chart.component';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { LineChartComponent } from './components/line-chart/line-chart.component';

@NgModule({
  declarations: [
    PieChartComponent,
    BarChartComponent,
    LineChartComponent,
  ],
  imports: [
    CommonModule,
    NgChartsModule, // Import the Angular wrapper for Chart.js
  ],
  exports: [
    PieChartComponent,
    BarChartComponent,
    LineChartComponent,
  ]
})
export class CustomChartsModule {}
