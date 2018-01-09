// Importand Note: Seems like ng2-charts is not very good in error handling.
// So if you get Cannot read property 'data' of undefined at charts.js:90,
// then open charts.js from the modulefolder and go to line 90, and 
// wrape it in if condition for checking undefined.
// For more info, read "https://github.com/valor-software/ng2-charts/issues/806"

import { channelData } from '../sensing-database/channelData';
import { Component, OnInit, SimpleChanges } from '@angular/core';
import { DatabaseService } from '../database.service';
import { ViewChild } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts/ng2-charts';


@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})


export class ChartComponent implements OnInit {

  @ViewChild('myChart')
  myChart: BaseChartDirective;

  title: string = 'Sensor chart';
  updateCounter: number = 0;
  totalSensors: number = 0;
  public barChartLabels: string[] = ['2750', '2800', '2850', '2900', '2950', '3000', '3050', '3100', '3150', '3200', '3250', '3300', '3350', '3400'];
  public channelsList: channelData[];
  public sensorsList: string[] = [];
  public barChartType: string = 'rangeBar';
  public barChartLegend: boolean = true;
  public barChartData: barChartDataSet[];

  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true,
    scales: {
      yAxes: [{
        stacked: false,
        scaleLabel: {
          display: true,
          labelString: 'Power (dBm)'
        },
        ticks: {
          beginAtZero: false,
          stepValue: 4,
          max: -10,
          min: -110,
        }
      }],
      xAxes: [{
        scaleLabel: {
          display: true,
          labelString: 'LTE Band 7 DL EARFCN (2620-2690 MHz)'
        }
      }]
    }
  };

  private colors = [
    {
      backgroundColor: 'rgb(230, 25, 75)'
    },
    {
      backgroundColor: 'rgb(60, 180, 75)'
    },
    {
      backgroundColor: 'rgb(255, 225, 25)'
    },
    {
      backgroundColor: 'rgb(0, 130, 200)'
    },
    {
      backgroundColor: 'rgb(245, 130, 48)'
    },
    {
      backgroundColor: 'rgb(145, 30, 180)'
    },
    {
      backgroundColor: 'rgb(70, 240, 240)'
    },
    {
      backgroundColor: 'rgb(240, 50, 230)'
    },
    {
      backgroundColor: 'rgb(210, 245, 60)'
    },
    {
      backgroundColor: 'rgb(250, 190, 190)'
    },
    {
      backgroundColor: 'rgb(0, 128, 128)'
    },
    {
      backgroundColor: 'rgb(128, 0, 0)'
    },
    {
      backgroundColor: 'rgb(128, 128, 0)'
    },
    {
      backgroundColor: 'rgb(0, 0, 128)'
    },
  ];

  // events
  public chartClicked(e: any): void {
  }

  public chartHovered(e: any): void {
  }

  constructor(private dbService: DatabaseService) { }

  public ngOnInit() {
    this.dbService.allChannels.subscribe(tempChannelsList => {
      this.channelsList = tempChannelsList;
      this.barChartData = [];
      this.sortChannelData();
    });

    this.barChartData = [
      {
        data: [{
          min: 0,
          max: 0
        }, {
          min: 0,
          max: 0
        }, {
          min: 0,
          max: 0
        }],
        label: '',
      },
    ]

  }

  sortChannelData() {
    this.barChartData = [];

    // Sort this list if neccessary. Currently it is unsorted.
    let uniqueSensorIds = [...new Set(this.channelsList.map(item => item.sensorId))];

    for (var sensorId in uniqueSensorIds) {
      var channelPowerList: channelMinMax[] = [{
        min: 0,
        max: 0,
      }, {
        min: 0,
        max: 0,
      }, {
        min: 0,
        max: 0,
      }, {
        min: 0,
        max: 0,
      }, {
        min: 0,
        max: 0,
      }, {
        min: 0,
        max: 0,
      }, {
        min: 0,
        max: 0,
      }, {
        min: 0,
        max: 0,
      }, {
        min: 0,
        max: 0,
      }, {
        min: 0,
        max: 0,
      }, {
        min: 0,
        max: 0,
      }, {
        min: 0,
        max: 0,
      }, {
        min: 0,
        max: 0,
      }, {
        min: 0,
        max: 0,
      }];

      var tempChartDataSet: barChartDataSet = {
        label: "",
        data: [{
          min: 0,
          max: 0,
        }, {
          min: 0,
          max: 0,
        }, {
          min: 0,
          max: 0,
        }, {
          min: 0,
          max: 0,
        }, {
          min: 0,
          max: 0,
        }, {
          min: 0,
          max: 0,
        }, {
          min: 0,
          max: 0,
        }, {
          min: 0,
          max: 0,
        }, {
          min: 0,
          max: 0,
        }, {
          min: 0,
          max: 0,
        }, {
          min: 0,
          max: 0,
        }, {
          min: 0,
          max: 0,
        }, {
          min: 0,
          max: 0,
        }, {
          min: 0,
          max: 0,
        }],
      };

      tempChartDataSet.label = 'Sensor-' + uniqueSensorIds[sensorId];
      var filteredChannels = this.channelsList.filter((channel: channelData) => channel.sensorId === uniqueSensorIds[sensorId]);

      for (var channel in filteredChannels) {
        if (parseFloat(filteredChannels[channel].power) < 0) {
          channelPowerList[parseInt(filteredChannels[channel].channel) - 1].max = parseFloat(filteredChannels[channel].power);
          channelPowerList[parseInt(filteredChannels[channel].channel) - 1].min = -110;
        }
      }

      tempChartDataSet.data = channelPowerList;
      this.barChartData.push(tempChartDataSet);

    }

    // Below two conditions are just bubble gum fixes. There is some issue
    // and bugs with ng2-chart module that does not update the chart if new
    // dataset is added or removed from the array.
    if (this.updateCounter <= 2) {

      this.myChart.ngOnChanges({} as SimpleChanges);
      this.updateCounter++;
    }
    if (this.totalSensors != uniqueSensorIds.length) {
      this.updateCounter = 2;
      this.totalSensors = uniqueSensorIds.length;
      console.log('New sensors detected.')
    }
  }
}

export interface barChartDataSet {
  label?: string;
  data?: channelMinMax[];
}

export interface channelMinMax {
  min: number;
  max: number;
}
