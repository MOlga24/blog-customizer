import { ArrowButton } from 'src/ui/arrow-button';
import { Button } from 'src/ui/button';
import { ReactElement, useState } from 'react';
import clsx from 'clsx';
import styles from './ArticleParamsForm.module.scss';
import {
	fontColors,
	fontFamilyOptions,
	backgroundColors,
	contentWidthArr,
	defaultArticleState,
} from 'src/constants/articleProps';
import { RadioGroup } from 'src/ui/radio-group';
import { OptionType } from 'src/constants/articleProps';
import { Select } from 'src/ui/select';
import { ArticleStateType, fontSizeOptions } from 'src/constants/articleProps';
import { Separator } from 'src/ui/separator';
import { Text } from 'src/ui/text';
type propType = {
	options: ArticleStateType;
	onChange: (value: ArticleStateType) => void;
};

export const ArticleParamsForm = ({ options, onChange }: propType): ReactElement => {
	const [selectArticleState, setSelectArticleState] =
		useState<ArticleStateType>(options);
	const handleChange1 = (key: string, value: OptionType) => {
		setSelectArticleState({ ...selectArticleState, [key]: value });
	};
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
				{isShown && (
					<form
						className={styles.form}
						onSubmit={(e) => {console.log(selectArticleState);
							e.preventDefault();
							onChange(selectArticleState);
						}}>
						<Text family={'open-sans'} weight={800} size={31} uppercase>
							Задайте параметры
						</Text>
						<Select
							selected={selectArticleState.fontFamilyOption}
							options={fontFamilyOptions}
							onChange={(option) => handleChange1('fontFamilyOption', option)}
							title='Шрифт'
						/>
						<RadioGroup
							title={'размер шрифта'}
							name='fontSizeOptions'
							selected={selectArticleState.fontSizeOption}
							options={fontSizeOptions}
							onChange={(option) =>
								handleChange1('fontSizeOption', option)
							}></RadioGroup>
						<Select
							selected={selectArticleState.fontColor}
							options={fontColors}
							onChange={(option) => handleChange1('fontColor', option)}
							title='Цвет'
						/>

						<Separator> </Separator>
						<Select
							selected={selectArticleState.backgroundColor}
							options={backgroundColors}
							onChange={(option) => handleChange1('backgroundColor', option)}
							title='Цвет фона'
						/>
						<Select
							selected={selectArticleState.contentWidth}
							options={contentWidthArr}
							onChange={(option) => handleChange1('contentWidth', option)}
							title='Ширина контента'
						/>

						<div className={styles.bottomContainer}>
							<Button
								title='Сбросить'
								htmlType='reset'
								type='clear'
								onClick={() => setSelectArticleState(defaultArticleState)}
							/>
							<Button title='Применить' htmlType='submit' type='apply' />
						</div>
					</form>
				)}
			</aside>
		</>
	);
};
// <Select  {...defaultArticleStateInit[0]}
// const Form= ()=> {
// 	const [value1, setValue] = useState(defaultArticleState);
// 	const handleSubmit = (newValue:typeof defaultArticleState) => {
// 		setValue(newValue)
// 			console.log(defaultArticleState.backgroundColor)
// 		  ;}

// const [selected, setSelected] = useState(defaultArticleState.fontSizeOption);
// const setHandle=(e:OptionType)=>{ setSelected(e);console.log(selected)}
// 	return (
// 		<form className={styles.form}>
// 			<Text family={'open-sans'} weight={800} size={31} uppercase>
// 				Задайте параметры
// 			</Text>
// 			<Select  {...defaultArticleStateInit[0]}
// 				/>
// 			<RadioGroup
// 				title={'размер шрифта'}
// 				name=''
// 				selected={selected}
// 				options={fontSizeOptions}
// 				onChange={(e)=>{setHandle(e)}}
// 				></RadioGroup>
// <Select {...defaultArticleStateInit[1]}
// 				/>
// 				<Separator> </Separator>
// 				{defaultArticleStateInit.slice(2).map(item => <Select key={item.title} {...item}/>)}

// 			<div className={styles.bottomContainer}>
// 				<Button title='Сбросить' htmlType='reset'
// 				 onClick={()=> updateState(defaultArticleState)}
// 				  type='clear' />
// 				<Button title='Применить'htmlType='submit'  type='apply' />
// 			</div>
// 		</form>
// 	);
// }
