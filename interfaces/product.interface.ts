export interface ProductCharacteristic {
	value: string;
	name: string;
}

export interface ReviewModel {
	_id: string;
	name: string;
	title: string;
	description: string;
	rating: number;
	createdAt: Date;
}

export interface ProductModel {
	_id: string;
	categories: string[];
	tags: string[];
	price: number;
	link: string;
	title: string;
	image: string;
	initialRating: number;
	description: string;
	characteristics: ProductCharacteristic[];
	createdAt: Date;
	updatedAt: Date;
	__v: number;
	credit: number;
	oldPrice: number;
	html: string;
	reviews: ReviewModel[];
	reviewCount: number;
	reviewAvg?: number;
	advantages?: string;
	disadvantages?: string;
}