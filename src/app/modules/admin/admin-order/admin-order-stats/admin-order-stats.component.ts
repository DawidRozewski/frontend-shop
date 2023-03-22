import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart, ChartData, registerables } from 'chart.js';
import { AdminOrderService } from '../admin-order.service';

@Component({
  selector: 'app-admin-order-stats',
  templateUrl: './admin-order-stats.component.html',
  styleUrls: ['./admin-order-stats.component.scss']
})
export class AdminOrderStatsComponent implements AfterViewInit {

  @ViewChild("stats") private stats!: ElementRef;
  chart!: Chart;
  ordersCount: number = 0;
  salesSum: number = 0;


  private data = {
    labels: [],
    datasets: [
      {
        label: 'Zamówienia',
        data: [3, 2, 1, 4],
        borderColor: '#FF3F7C',
        backgroundColor: '#FF7A9F',
        order: 1,
        yAxisID: 'y'
      },
      {
        label: 'Sprzedaż',
        data: [8, 15, 12, 17],
        borderColor: '#0088FF',
        backgroundColor: '#00A1FF',
        order: 0,
        type:'line',
        yAxisID: 'y1'
      },
    ]
  } as ChartData;

  constructor(private adminOrderService: AdminOrderService) { 
    Chart.register(...registerables);
  }

  ngAfterViewInit(): void {
    this.setupChart();
    this.getSalesStatistics();
  }

  getSalesStatistics() {
    this.adminOrderService.getSalesStatistics()
    .subscribe(stats => {
      this.data.labels = stats.label;
      this.data.datasets[0].data = stats.order;
      this.data.datasets[1].data = stats.sale;
      this.chart.update();
      this.ordersCount = stats.ordersCount;
      this.salesSum = stats.salesSum;
    });
  }

  setupChart() {
    this.chart = new Chart(this.stats.nativeElement, {
      type: 'bar',
      data: this.data,
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Wykres sprzedaży'
          }
        },
        scales: {
          y: {
            type: 'linear',
            display: true,
            position: 'left',
          },
          y1: {
            type: 'linear',
            display: true,
            position: 'right',
            grid: {
              drawOnChartArea: false, 
            },
          }
        }
      },
    });
  }
}
