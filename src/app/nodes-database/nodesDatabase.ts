import { DomSanitizer } from '@angular/platform-browser';
import { DatabaseService } from '../database.service';
import { OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/startWith';
import { Http, Response } from '@angular/http';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { nodeData } from './nodeData';
import { SafeUrl } from '@angular/platform-browser/src/security/dom_sanitization_service';


/** An example database that the data source uses to retrieve data for the table. */
export class NodesDatabase implements OnInit{
    url: string = 'http://193.166.161.18/api/api/allNodes';

    pollingInterval: number = 3000;

    constructor(private http: Http, private dbService: DatabaseService) { }

    getAllNodesData(): Observable<any> {
        // this.sanitizer.bypassSecurityTrustUrl(this.url)
        return Observable.interval(this.pollingInterval).flatMap(() => {
            return this.http.get(this.url)
                // ...and calling .json() on the response to return data
                .map((res: Response) => {
                    this.dbService.updateNodesList(<nodeData[]>res.json().nodes);
                    return <nodeData[]>res.json().nodes; 
                })
                //...errors if any
                .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
        })
    }

    ngOnInit(){}
}