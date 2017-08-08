import { Component } from '@angular/core';
declare var $: any;

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.css' ]
})

export class AppComponent{
	title = 'Tour of Heroes';

	ngAfterViewInit() {
		$('.ui.dropdown').dropdown();
	 	$('#navbar').css({
	 		'background-color': 'rgba(251, 251, 251, 0.8)' //'#FBFBFB'
	 	});
	 	$('.white-item').removeClass('white-item').addClass('black-item');
    }
}