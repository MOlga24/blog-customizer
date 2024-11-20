import { createRoot } from 'react-dom/client';
import { StrictMode, CSSProperties } from 'react';
import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { Article } from './components/article/Article';
import { ArticleParamsForm } from './components/article-params-form/ArticleParamsForm';
import { defaultArticleState,defaultArticleState1, defaultArticleStateInit, modelType  } from './constants/articleProps';
import { OptionType } from './constants/articleProps';
import './styles/index.scss';
import styles from './styles/index.module.scss';
import { fontFamilyOptions, backgroundColors,contentWidthArr,fontSizeOptions,fontColors } from './constants/articleProps';
const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

const App = () => {
	const model={};
const [style, setStyle]=useState(model);

	return (
		<main
			className={clsx(styles.main)}
			style={

{
					'--font-family': defaultArticleState.fontFamilyOption.value,
					'--font-size': defaultArticleState.fontSizeOption.value,
					'--font-color': defaultArticleState.fontColor.value,
					'--container-width': defaultArticleState.contentWidth.value,
					'--bg-color': defaultArticleState.backgroundColor.value,
				}as CSSProperties
			}

			>
			<ArticleParamsForm active={true} onChange={(current)=>setStyle(current)}/>
			<Article />
		</main>
	);
};

root.render(
	<StrictMode>
		<App/>
	</StrictMode>
);
