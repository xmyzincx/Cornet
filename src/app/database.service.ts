import { BehaviorSubject } from 'rxjs/Rx';
import { nodeData } from './nodes-database/nodeData';
import 'rxjs/add/operator/catch';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { channelData } from './sensing-database/channelData';

@Injectable()
export class DatabaseService {

  private allNodesDataSource = new BehaviorSubject<nodeData[]>([]);
  allNodes = this.allNodesDataSource.asObservable();

  private allChannelsDataSource = new BehaviorSubject<channelData[]>([]);
  allChannels = this.allChannelsDataSource.asObservable();

  constructor() { }
  
    updateNodesList(tNodesList: nodeData[]){
      this.allNodesDataSource.next(tNodesList);
    }

    updateChannelsList(tChannelsList: channelData[]){
      this.allChannelsDataSource.next(tChannelsList);
    }

  }
