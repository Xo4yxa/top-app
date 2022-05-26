import { TopLevelCategory, TopPageModal } from '../../interfaces/page.interface';
import { ProductModel } from '../../interfaces/product.interface';

export interface TopPageComponentProps {
	firstCategory: TopLevelCategory;
	page: TopPageModal;
	products: ProductModel[];
}