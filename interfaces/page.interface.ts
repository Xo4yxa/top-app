export enum TopLevelCategory {
	Courses,
	Service,
	Books,
	Products
}

export interface TopPageAdvantage {
	_id: string;
	title: string;
	description: string;
}

export interface HhData {
	count: number;
	juniorSalary: number;
	middleSalary: number;
	seniorSalary: number;
	updatedAt: Date;
	_id: string;
}

export interface Blog {
	h1: string;
	metaTitle: string;
	metaDescription: string;
	views: number;
	_id: string;
}

export interface SravnikusData {
	metaTitle: string;
	metaDescription: string;
	qas: any[];
	_id: string;
}

export interface TopPageModal {
	_id: string;
	tags: string[];
	firstCategory: TopLevelCategory;
	secondCategory: string;
	alias: string;
	title: string;
	category: string;
	seoText?: string;
	tagsTitle: string;
	metaTitle: string;
	metaDescription: string;
	categoryOn: string;
	advantages?: TopPageAdvantage[];
	qas: any[];
	addresses: any[];
	createdAt: Date;
	updatedAt: Date;
	__v: number;
	hh?: HhData;
	blog: Blog;
	sravnikus: SravnikusData;
}