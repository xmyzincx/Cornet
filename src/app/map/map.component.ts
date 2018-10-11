import { channelData } from '../sensing-database/channelData';
import { nodeData } from '../nodes-database/nodeData';
import { google } from '@agm/core/services/google-maps-types';
import { Observable, Subscription } from 'rxjs/Rx';
import { timer } from 'rxjs/observable/timer';
import { Component, Input, OnInit } from '@angular/core';
import { AgmCoreModule, AgmMap, GoogleMapsAPIWrapper } from '@agm/core';
import { DatabaseService } from '../database.service';


@Component({
	selector: 'app-map',
	templateUrl: './map.component.html',
	styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
	subscription: Subscription;

	title: string = 'Map';
	// Initial centering points for map.
	lat: number = 65.203277;
	lng: number = 24.8810778;

	zoom: number = 4;
	infoWindowOpened = null;

	nodeIcon: string = './assets/images/m1.png';
	sensorIcon: string = './assets/images/m2.png'

	nodesList: nodeData[];
	channelsList: channelData[];

	nodesMarkerList: nodeMarker[];
	channelsMarkerList: channelMarker[];

	nodesVisibility: boolean = true;
	channelsVisibility: boolean = true;

	nodeMarkerDetail: nodeMarker = {
		lat: 0,
		lng: 0,
		label: 'Oulu',
		icon: this.nodeIcon,
		visible: this.nodesVisibility,
		draggable: false
	};

	sensorMarkerDetail: channelMarker = {
		lat: 0,
		lng: 0,
		label: 'Oulu',
		icon: this.nodeIcon,
		visible: this.channelsVisibility,
		draggable: false
	};


	nodeClickedMarker(marker: nodeMarker) {
		this.nodeMarkerDetail = marker;
		// console.log(marker);
	}

	sensorClickedMarker(marker: channelMarker) {
		this.sensorMarkerDetail = marker;
		// console.log(marker);
	}

	constructor(private dbService: DatabaseService) { }


	ngOnInit() {
		this.dbService.allNodes.subscribe(tempNodesList => {
			this.nodesList = tempNodesList;
			this.nodeMapUpdate();
		});
		this.dbService.allChannels.subscribe(tempChannelsList => {
			this.channelsList = tempChannelsList;
			this.channelMapUpdate();
		});

		// let timer = Observable.timer(10000, 1000);
		// this.subscription = timer.subscribe(t => {
		// 	console.log('timer event fired');
		// 	this.stopTimer();
		// })
	}

	nodeMapUpdate() {
		this.nodesMarkerList = [];
		if (this.nodesList.length > 0) {
			for (var index = 0; index < this.nodesList.length; index++) {
				var node = this.nodesList[index];
				// This is just for init
				var tMarker: nodeMarker = {
					lat: 65.203277,
					lng: 24.8810778,
					label: 'Oulu',
					icon: this.nodeIcon,
					visible: this.nodesVisibility,
					draggable: false
				};

				tMarker.lat = parseFloat(node.latitude);
				tMarker.lng = parseFloat(node.longitude);
				tMarker.label = node.nodeName;
				tMarker.icon = this.nodeIcon;
				tMarker.visible = this.nodesVisibility;
				tMarker.draggable = false;
				tMarker.nodeId = node.nodeId;
				tMarker.nodeName = node.nodeName;
				tMarker.freq = node.freq;

				this.nodesMarkerList.push(tMarker);
			}
		}
	}


	channelMapUpdate() {
		this.channelsMarkerList = [];

		if (this.channelsList.length > 0) {
			let uniqueSensorIds = [...new Set(this.channelsList.map(item => item.sensorid))];
			for (var sensorId in uniqueSensorIds) {
				var filteredChannels = this.channelsList.filter((channel: channelData) => channel.sensorid === uniqueSensorIds[sensorId]);
				var tMarker: channelMarker = {
					lat: 65.203277,
					lng: 24.8810778,
					label: 'Oulu',
					icon: this.nodeIcon,
					visible: this.channelsVisibility,
					draggable: false
				};

				// Since it is assumed that sensorId will be unique and the filtered channels 
				// will be on the same location i.e. same latitude and longitude,
				// therefore taking 0th element of the filtered channel array.
				tMarker.lat = parseFloat(filteredChannels[0].latitude);
				tMarker.lng = parseFloat(filteredChannels[0].longitude);
				tMarker.label = uniqueSensorIds[sensorId];
				tMarker.icon = this.sensorIcon;
				tMarker.visible = this.channelsVisibility;
				tMarker.draggable = false;
				tMarker.sensorId = uniqueSensorIds[sensorId];
				tMarker.channel = filteredChannels.map(a => a.channel).toString();
				tMarker.timestamp = filteredChannels[0].timestamp;
				tMarker.antHeight = filteredChannels[0].antHeight;
				tMarker.antGain = filteredChannels[0].antGain;
				tMarker.areaType = filteredChannels[0].areaType;

				this.channelsMarkerList.push(tMarker);

			}
		}
	}

	stopTimer() {
		this.subscription.unsubscribe();
	}
}

export interface nodeMarker {
	lat: number;
	lng: number;
	label?: string;
	icon?: string;
	visible: boolean;
	draggable: boolean;
	nodeId?: string;
	nodeName?: string;
	freq?: string;
}

export interface channelMarker {
	lat: number;
	lng: number;
	label?: string;
	icon?: string;
	visible: boolean;
	draggable: boolean;
	sensorId?: string,
	channel?: string,
	timestamp?: string,
	antHeight?: string,
	antGain?: string,
	areaType?: string
}


