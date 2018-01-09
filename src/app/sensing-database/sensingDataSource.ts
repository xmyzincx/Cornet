import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/startWith';

import { DataSource } from '@angular/cdk/collections';
import { MatSort } from '@angular/material';
import { Observable } from 'rxjs/Observable';

import { channelData } from './channelData';
import { SensingDatabase } from './sensingDatabase';


/**
 * Data source to provide what data should be rendered in the table. Note that the data source
 * can retrieve its data in any way. In this case, the data source is provided a reference
 * to a common data base, ExampleDatabase. It is not the data source's responsibility to manage
 * the underlying data. Instead, it only needs to take the data and send the table exactly what
 * should be rendered.
 */
export class SensingDataSource extends DataSource<any> {
    constructor(private _sensingDatabase: SensingDatabase) {
      super();
    }
  
    /** Connect function called by the table to retrieve one stream containing the data to render. */
    connect(): Observable<channelData[]> {
      return this._sensingDatabase.getAllChannelsData();
    }
  
    disconnect() { }
  }