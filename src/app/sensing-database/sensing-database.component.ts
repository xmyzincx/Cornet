import { DomSanitizer } from '@angular/platform-browser';
import { Http } from '@angular/http';
import { channelData } from './channelData';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/startWith';

import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material';

import { DatabaseService } from '../database.service';
import { SensingDatabase } from './sensingDatabase';
import { SensingDataSource } from './sensingDataSource';

@Component({
  selector: 'app-sensing-database',
  templateUrl: './sensing-database.component.html',
  styleUrls: ['./sensing-database.component.css'],
})

export class SensingDatabaseComponent implements OnInit {

  title: string = 'Sensors Database'
  displayedColumns = ['sensorid', 'channel', 'power', 'earfcn', 'freq', 'ch_scan_bw', 'timestamp', 'latitude', 'longitude', 'antHeight', 'antGain', 'areaType'];
  sensingDatabase: SensingDatabase;
  sensingDataSource: SensingDataSource | null;

  @ViewChild(MatSort) sort: MatSort;

  constructor(http: Http, dbService: DatabaseService, sanitizer: DomSanitizer) {
    this.sensingDatabase = new SensingDatabase(http, dbService, sanitizer);
    this.sensingDataSource = new SensingDataSource(this.sensingDatabase);
  }

  ngOnInit() {    
  }

}








