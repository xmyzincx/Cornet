import { DomSanitizer } from '@angular/platform-browser';
import { OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/startWith';
import { Http, Response } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { DatabaseService } from '../database.service';
import { channelData } from './channelData';


/** An example database that the data source uses to retrieve data for the table. */
export class SensingDatabase {
    url: string = 'http://localhost:3000/api/allChannels';

    pollingInterval: number = 3000;
    
    constructor(private http: Http, private dbService: DatabaseService, private sanitizer: DomSanitizer) { }

    getAllChannelsData(): Observable<any> {
        return Observable.interval(this.pollingInterval).flatMap(() => {
            return this.http.get(this.url)
                // ...and calling .json() on the response to return data
                .map((res: Response) => {
                    this.dbService.updateChannelsList(res.json().channels);
                    return (res.json().channels)
                })
                //...errors if any
                .catch((error: any) => Observable.throw(error || 'Server error'));
        })
    }

}