import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Router } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
	selector: 'travel-detail',
	templateUrl: './travel-detail.component.html',
	styleUrls: [ './travel-detail.component.css' ]
})

export class TravelDetailComponent implements OnInit {
	country = '';
	articleID = '';

	articles: FirebaseListObservable<any[]>;

	constructor(
		private router: Router,
		private route: ActivatedRoute,
		public db: AngularFireDatabase) { }

	ngOnInit(): void {
		this.getChatData();
	}

	getChatData() {
		this.route.paramMap
			.subscribe((params: ParamMap) => {
				this.country = params.get('country');
				this.articleID = params.get('articleID');
			});

		this.articles = this.db.list('travel/' + this.country + '/content', {
			query: {
				orderByChild: 'id',
			    equalTo: this.articleID,
			}
		});

		this.articles.subscribe(articles => {
			console.log(articles);
		})
	}

	gotoDetail(travelID): void {
		this.router.navigate(['/detail', travelID]);
	}
}