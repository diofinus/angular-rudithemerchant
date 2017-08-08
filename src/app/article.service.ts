import { Injectable } from '@angular/core';

import { Article } from './article';
import { ARTICLES } from './article-data';

@Injectable()
export class ArticleService {
	getArticles(): Promise<Article[]> {
		return Promise.resolve(ARTICLES);
	}
	getArticle(id: number): Promise<Article> {
		return this.getArticles()
			.then(articles => articles.find(article => article.id === id));
	}
}