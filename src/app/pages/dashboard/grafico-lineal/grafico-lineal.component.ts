import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart, ChartConfiguration, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { TotalesMesual } from 'src/app/models/req-dashboard';
import { DashboardService } from '../../../service/dashboard.service';
import { map, tap } from 'rxjs';

@Component({
  selector: 'app-grafico-lineal',
  templateUrl: './grafico-lineal.component.html',
  styleUrls: ['./grafico-lineal.component.css']
})
export class GraficoLinealComponent implements OnInit {
  totalesMensuales:TotalesMesual[] = []
  data!:any;
  constructor(private  totalesMesualService:DashboardService) { }

  ngOnInit(): void {
  this.initialData();
  }
  private initialData() {
    this.totalesMesualService.getTotalesMesual().subscribe(res => {
      console.log(res);
      this.totalesMensuales = res;
      console.log(this.totalesMensuales);
      this.lineChartData();
    }
    );
  }

  lineChartData() {
     this.data = {
      datasets: [
        {
          data: this.totalesMensuales.map((m: TotalesMesual)=> m.total),
          label: new Date().getFullYear().toString(),
          backgroundColor: 'rgba(148,159,177,0.2)',
          borderColor: 'rgba(148,159,177,1)',
          pointBackgroundColor: 'rgba(148,159,177,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(148,159,177,0.8)',
          fill: 'origin',
        },
      ],
      labels: this.totalesMensuales.map((m: TotalesMesual)=> new Date( new Date().getFullYear(), m.mes-1 ).toLocaleString('default', { month: 'long' }))
    }
  };


  public lineChartOptions: ChartConfiguration['options'] = {
    elements: {
      line: {
        tension: 0.5
      }
    },
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      x: {},
      'y-axis-0':
      {
        position: 'left',
      },
      'y-axis-1': {
        position: 'right',
        grid: {
          color: 'rgba(255,0,0,0.3)',
        },
        ticks: {
          color: 'red'
        }
      }
    },

    plugins: {
      legend: { display: true },
    }
  };

  public lineChartType: ChartType = 'line';


}
