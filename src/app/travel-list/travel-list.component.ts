import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Router } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
	selector: 'travel-list',
	templateUrl: './travel-list.component.html',
	styleUrls: [ './travel-list.component.css' ]
})

export class TravelListComponent implements OnInit {
	country = '';

	articles: FirebaseListObservable<any[]>;

	constructor(
		private router: Router,
		private route: ActivatedRoute,
		public db: AngularFireDatabase) { }

	ngOnInit(): void {
		this.getChatData();
	}

	getChatData() {
		var self = this;
		this.route.paramMap
			.subscribe((params: ParamMap) => this.country = params.get('country'));

		this.articles = this.db.list('travel/' + this.country + '/content');

		this.articles.subscribe(articles => {
			console.log(articles);
			if(articles.length <= 0){
				self.router.navigate(['/404']);
			}
		})
	}

	gotoDetail(travelID): void {
		console.log('asdasd');
		this.router.navigate(['/travel/' + this.country , travelID]);
	}
}