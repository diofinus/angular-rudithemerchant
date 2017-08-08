import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent }   		from './home/home.component';
import { TravelListComponent }  from './travel-list/travel-list.component';
import { TravelDetailComponent }  from './travel-detail/travel-detail.component';
import { NotFoundComponent }   	from './not-found/not-found.component';

// import { DashboardComponent }   from './dashboard/dashboard.component';
// import { HeroesComponent }      from './heroes/heroes.component';
// import { HeroDetailComponent }  from './hero-detail/hero-detail.component';

const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: '404',  component: NotFoundComponent },
	{ path: 'travel/:country/list',  component: TravelListComponent },
	{ path: 'travel/:country/:articleID',  component: TravelDetailComponent },
	// { path: 'dashboard',  component: DashboardComponent },
	// { path: 'detail/:id', component: HeroDetailComponent },
	// { path: 'heroes',     component: HeroesComponent }
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}