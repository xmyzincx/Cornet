import { DomSanitizer } from '@angular/platform-browser';
import { DatabaseService } from '../database.service';
import { Http } from '@angular/http';
import { NodesDataSource } from './nodesDataSource';
import { NodesDatabase } from './nodesDatabase';
import { Component, ViewChild, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { MatSort } from '@angular/material';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';

import { nodeData } from './nodeData'

@Component({
  selector: 'app-nodes-database',
  templateUrl: './nodes-database.component.html',
  styleUrls: ['./nodes-database.component.css']
})
export class NodesDatabaseComponent implements OnInit {

  title: string = 'Nodes Database'
  displayedColumns = ['nodeId', 'nodeName', 'freq', 'latitude', 'longitude'];
  nodesDatabase: NodesDatabase;
  nodesDataSource: NodesDataSource | null;

  @ViewChild(MatSort) sort: MatSort;

  constructor(http: Http, dbService: DatabaseService){
    this.nodesDatabase = new NodesDatabase(http, dbService);
    this.nodesDataSource = new NodesDataSource(this.nodesDatabase);
  }

  ngOnInit() {}
}