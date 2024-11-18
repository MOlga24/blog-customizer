import { ArrowButton } from 'src/ui/arrow-button';
import { Button } from 'src/ui/button';
import { useState } from 'react';
import clsx from 'clsx';
import styles from './ArticleParamsForm.module.scss';
import style from '../../../src/ui/text/index.module.scss';
import { RadioGroup } from 'src/ui/radio-group';
import { fontFamilyOptions } from 'src/constants/articleProps';
import { fontFamilyClasses } from 'src/constants/articleProps';
import { defaultArticleState } from 'src/constants/articleProps';
import { Select } from 'src/ui/select';
import {
	fontColors,
	fontSizeOptions,
	backgroundColors,
	contentWidthArr,
} from 'src/constants/articleProps';
import { Separator } from 'src/ui/separator';
import { Text } from 'src/ui/text';
export const ArticleParamsForm = () => {
	const [isShown, setIsShown] = useState(false);
	return (
		<>
			<ArrowButton
				isOpen={isShown}
				onClick={() => {
					setIsShown((current) => !current);
				}}
			/>
			<aside
				className={clsx(styles.container, {
					[styles.container_open]: isShown,
				})}>
				{isShown && <Box />}
			</aside>
		</>
	);
};

 function Box() {const [fontsizevalue, setfontsizevalue] = useState<string>("");
	return (
		<form className={styles.form}>
			<Text family={'open-sans'} weight={800} size={31} uppercase>
				Задайте параметры
			</Text>
			<Select
				title={'Шрифт'}
				selected={defaultArticleState.fontFamilyOption}
				options={fontFamilyOptions}
				onChange={(e) => {
					defaultArticleState.fontFamilyOption.title = e.title;
					defaultArticleState.fontFamilyOption.className = e.className;
					defaultArticleState.fontFamilyOption.value = e.value;
				}}
				data-selected={'e.title'}></Select>

			<RadioGroup

				title={'размер шрифта'}
				name=''
				selected={defaultArticleState.fontSizeOption}
				options={fontSizeOptions}

				onChange={(e) => {
					//defaultArticleState.fontSizeOption.title = e.title;
					defaultArticleState.fontSizeOption.title = e.value
					//defaultArticleState.fontSizeOption.className = e.className;

				}}
				></RadioGroup>
			<Separator> </Separator>
			<Select
				title={' цвет шрифта'}
				selected={defaultArticleState.fontColor}
				options={fontColors}
				onChange={(e) => {
					defaultArticleState.fontColor.title = e.title;
					defaultArticleState.fontColor.className = e.className;
					defaultArticleState.fontColor.value = e.value;
					defaultArticleState.fontColor.optionClassName=e.optionClassName;
				}}
				></Select>
			<Select
				title={'цвет фона'}
				selected={defaultArticleState.backgroundColor}
				options={backgroundColors}
				onChange={(e) => {
					defaultArticleState.backgroundColor.title = e.title;
					defaultArticleState.backgroundColor.className = e.className;
					defaultArticleState.backgroundColor.value = e.value;
					defaultArticleState.backgroundColor.optionClassName=e.optionClassName;
				}}
				></Select>
			<Select
				title={'Ширина контента'}
				selected={defaultArticleState.contentWidth}
				options={contentWidthArr}
				onChange={(e) => {

					defaultArticleState.contentWidth.title= e.title;
					defaultArticleState.contentWidth.className = e.className;
					defaultArticleState.contentWidth.value = e.value;
					defaultArticleState.contentWidth.optionClassName=e.optionClassName;
				}}
				></Select>
			<div className={styles.bottomContainer}>
				<Button title='Сбросить' htmlType='reset' type='clear' />
				<Button title='Применить' htmlType='submit' type='apply' />
			</div>
		</form>
	);
}
