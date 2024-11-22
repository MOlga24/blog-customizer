import {
	fontColors,
	fontFamilyOptions,
	backgroundColors,
	contentWidthArr,
	defaultArticleState,
	ArticleStateType,
	fontSizeOptions,
} from 'src/constants/articleProps';
import { Button } from 'src/ui/button';
import { RadioGroup } from 'src/ui/radio-group';
import { OptionType } from 'src/constants/articleProps';
import { Select } from 'src/ui/select';
import { useState } from 'react';
import { Separator } from 'src/ui/separator';
import { Text } from 'src/ui/text';
import { propType } from './ArticleParamsForm';
import styles from './ArticleParamsForm.module.scss';

export const Form = ({ options, onChange }: propType) => {
	const [selectArticleState, setSelectArticleState] =
		useState<ArticleStateType>(options);
	const handleChange = (key: string, value: OptionType) => {
		setSelectArticleState({ ...selectArticleState, [key]: value });
	};
	const formData = [
		{
			title: 'шрифт',
			selected: selectArticleState.fontFamilyOption,
			options: fontFamilyOptions,
			key: 'fontFamilyOption',
			index: 0,
			onChange: (option: OptionType) =>
				handleChange('fontFamilyOption', option),
		},
		{
			title: 'размер шрифта',
			selected: selectArticleState.fontSizeOption,
			options: fontSizeOptions,
			onChange: (option: OptionType) => handleChange('fontSizeOption', option),
			name: 'размер шрифта',
		},
		{
			title: 'цвет',
			selected: selectArticleState.fontColor,
			options: fontColors,
			onChange: (option: OptionType) => handleChange('fontColor', option),
		},
		{
			title: 'сепаратор',
			selected: selectArticleState.fontColor,
			options: fontColors,
			onChange: (option: OptionType) => handleChange('fontColor', option),
		},
		{
			title: 'цвет фона',
			selected: selectArticleState.backgroundColor,
			options: backgroundColors,
			onChange: (option: OptionType) => handleChange('backgroundColor', option),
		},
		{
			title: 'ширина контента',
			selected: selectArticleState.contentWidth,
			options: contentWidthArr,
			onChange: (option: OptionType) => handleChange('contentWidth', option),
		},
	];

	return (
		<form
			className={styles.form}
			onSubmit={(e) => {
				e.preventDefault();
				onChange(selectArticleState);
			}}>
			<Text family={'open-sans'} weight={800} size={31} uppercase>
				Задайте параметры
			</Text>
			<>
				{formData.map((item) =>
					!(item.name == 'размер шрифта') ? (
						item.title == 'сепаратор' ? (
							< Separator />
						) : (
							< Select {...item} />
						)
					) : (
						< RadioGroup {...item} />
					)
				)}
			</>
			<div className={styles.bottomContainer}>
				<Button
					title='Сбросить'
					htmlType='reset'
					type='clear'
					onClick={() => {
						setSelectArticleState(defaultArticleState);
						onChange(defaultArticleState);
					}}
				/>
				<Button title='Применить' htmlType='submit' type='apply' />
			</div>
		</form>
	);
};
