import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

import { AppComponent }         from './app/app.component';
import { HomeComponent }        from './home/home.component';
import { TravelListComponent }   from './travel-list/travel-list.component';
import { TravelDetailComponent }  from './travel-detail/travel-detail.component';
import { NotFoundComponent }	from './not-found/not-found.component';
// import { ArticleService }          from './article.service';

// import { DashboardComponent }   from './dashboard/dashboard.component';
// import { HeroDetailComponent }  from './hero-detail/hero-detail.component';
// import { HeroesComponent }      from './heroes/heroes.component';
// import { HeroService }          from './hero.service';

import { AppRoutingModule }     from './app-routing.module';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
// import { AngularFireAuthModule } from 'angularfire2/auth';

export const environment = {
	production: false,
	firebase: {
		apiKey: "AIzaSyBhrIIcwjznlylSYqdM04Ugo_gzULITZPA",
		authDomain: "rudithemerchant-c5849.firebaseapp.com",
		databaseURL: "https://rudithemerchant-c5849.firebaseio.com",
		projectId: "rudithemerchant-c5849",
		storageBucket: "",
		messagingSenderId: "207871875649"
	}
};

@NgModule({
	imports: [
		BrowserModule,
		FormsModule,
		AppRoutingModule,
		AngularFireModule.initializeApp(environment.firebase),
	    AngularFireDatabaseModule,
	    // AngularFireAuthModule
	],
	declarations: [
		AppComponent,
		HomeComponent,
		TravelListComponent,
		TravelDetailComponent,
		NotFoundComponent,
		// DashboardComponent,
		// HeroDetailComponent,
		// HeroesComponent
	],
	providers: [ ], //HeroService, ArticleService ],
	bootstrap: [ AppComponent ]
})

export class AppModule { }