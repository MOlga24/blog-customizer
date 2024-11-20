import { ArrowButton } from 'src/ui/arrow-button';
import { Button } from 'src/ui/button';
import { ChangeEvent, useState } from 'react';
import clsx from 'clsx';
import styles from './ArticleParamsForm.module.scss';
import style from '../../../src/ui/text/index.module.scss';
import { RadioGroup } from 'src/ui/radio-group';
import { defaultArticleStateInit, fontFamilyOptions, modelType, OptionType } from 'src/constants/articleProps';
import { fontFamilyClasses } from 'src/constants/articleProps';
import { defaultArticleState} from 'src/constants/articleProps';
import { Select } from 'src/ui/select';
import {
	fontColors,
	fontSizeOptions,
	backgroundColors,
	contentWidthArr,
} from 'src/constants/articleProps';
import { Separator } from 'src/ui/separator';
import { Text } from 'src/ui/text';
import { Option } from 'src/ui/radio-group/Option';
type formType = {
	active:boolean
	onChange?: (selected: modelType) => void;
	onClose?: () => void;

};
export const ArticleParamsForm = (props:formType) => {
	const [isShown, setIsShown] = useState(false);
	const [value, setValue] = useState("")
	const handleChange = (value:string) => {
		setValue(value)
		console.log(value,setValue)
	  }
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
				{isShown && <Form />}
			</aside>
		</>
	);
};

const Form= ()=> {
// const [value, setValue] = useState(true);
// const handleSubmit = () => {
// 	defaultArticleState.backgroundColor=backgroundColors[3];
// 	console.log(defaultArticleState.backgroundColor)
//   ;}
const [selected, setSelected] = useState(defaultArticleState.fontSizeOption);
const setHandle=(e:OptionType)=>{ setSelected(e);console.log(selected)}
	return (
		<form className={styles.form}>
			<Text family={'open-sans'} weight={800} size={31} uppercase>
				Задайте параметры
			</Text>
			<Select  {...defaultArticleStateInit[0]}
				/>
			<RadioGroup
				title={'размер шрифта'}
				name=''
				selected={selected}
				options={fontSizeOptions}
				onChange={(e)=>{setHandle(e)}}
				></RadioGroup>
<Select {...defaultArticleStateInit[1]}
				/>
				<Separator> </Separator>
				{defaultArticleStateInit.slice(2).map(item => <Select key={item.title} {...item}/>)}

			<div className={styles.bottomContainer}>
				<Button title='Сбросить' htmlType='reset'
				//  onClick={handleSubmit}
				  type='clear' />
				<Button title='Применить'htmlType='submit'  type='apply' />
			</div>
		</form>
	);
}
