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
import { useState, useRef} from 'react';
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
	const selectChange=(option:OptionType) => {console.log(option);handleChange('fontSizeOption', option)};

	const arr=[{title:"шрифт",selected:selectArticleState.fontFamilyOption,options:fontFamilyOptions,onChange:selectChange},
		 {title:"размер шрифта",selected:selectArticleState.fontSizeOption,options:fontSizeOptions,onChange:selectChange, name:'размер шрифта'},
		 {title:"цвет",selected:selectArticleState.fontColor,options:fontColors,onChange:selectChange},
		 {title:"цвет фона",selected:selectArticleState.backgroundColor,options:backgroundColors,onChange:selectChange},
		{title:"ширина контента",selected:selectArticleState.contentWidth,options:contentWidthArr,onChange:selectChange}];

	const A={
	selected:defaultArticleState.fontFamilyOption,
	options:fontFamilyOptions,
	onChange:selectChange,
	title:'Шрифт'}
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
{arr.map(item=>(!(item.name=='размер шрифта')? (
(<Select {...item}
			/> )):(<RadioGroup {...item}/> )))}</>




			{/* <Select
				selected={selectArticleState.fontFamilyOption}
				options={fontFamilyOptions}
				onChange={selectChange}
				title='Шрифт'
			/>
			<RadioGroup
				title={'размер шрифта'}
				name='fontSizeOptions'
				selected={selectArticleState.fontSizeOption}
				options={fontSizeOptions}
				onChange={(option) =>
					{handleChange('fontSizeOption', option);console.log(selectArticleState)}
				}></RadioGroup>
			<Select
				selected={selectArticleState.fontColor}
				options={fontColors}
				onChange={(option) => handleChange('fontColor', option)}
				title='Цвет'
			/>

			<Separator> </Separator>
			<Select
				selected={selectArticleState.backgroundColor}
				options={backgroundColors}
				onChange={(option) => handleChange('backgroundColor', option)}
				title='Цвет фона'
			/>
			<Select
				selected={selectArticleState.contentWidth}
				options={contentWidthArr}
				onChange={(option) => handleChange('contentWidth', option)}
				title='Ширина контента'
			/> */}

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
