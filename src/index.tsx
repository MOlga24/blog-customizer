import { createRoot } from 'react-dom/client';
import { StrictMode, CSSProperties, ReactElement } from 'react';
import clsx from 'clsx';
import {  useState } from 'react';
import { Article } from './components/article/Article';
import { ArticleParamsForm } from './components/article-params-form/ArticleParamsForm';
import { defaultArticleState } from './constants/articleProps';
import './styles/index.scss';
import styles from './styles/index.module.scss';
import { ArticleStateType } from './constants/articleProps';
const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

const App = (): ReactElement => {
	const [currentArticleState, setCurrentArticleState] =
		useState<ArticleStateType>(defaultArticleState);
	const handleChange = (value: ArticleStateType) => {
		setCurrentArticleState(value);
		console.log(value);
	};
	return (
		<main
			className={clsx(styles.main)}
			style={
				{
					'--font-family': currentArticleState.fontFamilyOption.value,
					'--font-size': currentArticleState.fontSizeOption.value,
					'--font-color': currentArticleState.fontColor.value,
					'--container-width': currentArticleState.contentWidth.value,
					'--bg-color': currentArticleState.backgroundColor.value,
				} as CSSProperties
			}>
			<div>
				<ArticleParamsForm
					options={currentArticleState}
					onChange={(value) => {
						handleChange(value);
					}}
				/>
				<Article />
			</div>
		</main>
	);
};

root.render(
	<StrictMode>
		<App />
	</StrictMode>
);
