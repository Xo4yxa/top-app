import { useEffect, useState } from 'react';
import { Button, Htag, Input, P, Rating, Tag, Textarea } from '../components';
import { withLayout } from '../Layout/Layout';
import axios from 'axios';
import { GetStaticProps } from 'next';
import { MenuItem } from '../interfaces/menu.interface';
import { API } from '../helpers/api';

function Home({ menu }: HomeProps): JSX.Element {
	const [rating, setRating] = useState<number>(0);

	return (
		<>
			<Htag tag='h1'>Текст</Htag>
			<Button appearance='primary' arrow='right'>Кнопка</Button>
			<Button appearance='ghost' arrow='down'>Кнопка</Button>
			<P size='l'>Большой</P>
			<P>Средний</P>
			<P size='s'>Маленький</P>
			<Tag size='s'>Ghost</Tag>
			<Tag size='m' color='green'>Green</Tag>
			<Tag size='m' color='red'>Red</Tag>
			<Tag color='primary'>Primary</Tag>
			<Rating rating={rating} isEditable setRating={setRating} />
			<Input placeholder='Тест' />
			<Textarea placeholder='Тест area' />
		</>
	)
};

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
	const firstCategory = 0;
	const { data: menu } = await axios.post<MenuItem[]>(API.topPage.find, {
		firstCategory
	});
	return {
		props: {
			menu,
			firstCategory
		}
	};
};

interface HomeProps extends Record<string, unknown> {
	menu: MenuItem[],
	firstCategory: number;
}