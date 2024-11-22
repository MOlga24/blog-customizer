import { ArrowButton } from 'src/ui/arrow-button';
import { ReactElement, useRef, useState } from 'react';
import clsx from 'clsx';
import styles from './ArticleParamsForm.module.scss';
import { ArticleStateType } from 'src/constants/articleProps';
import { Form } from './form';
import { useOutsideClickClose } from 'src/ui/select/hooks/useOutsideClickClose';
export type propType = {
	options: ArticleStateType;
	onChange: (value: ArticleStateType) => void;
	
};
export const ArticleParamsForm = ({
	options,
	onChange,
}: propType): ReactElement => {
	const asideRef = useRef<HTMLFormElement>(null);
	const [isOpen, setIsOpen] = useState(false);
	useOutsideClickClose({ isOpen, rootRef: asideRef, onChange: setIsOpen });
	return (
		<>
			<ArrowButton
				isOpen={isOpen}
				onClick={() => {
					setIsOpen((current) => !current);
				}}
			/>
			<aside
				ref={asideRef}
				className={clsx(styles.container, {
					[styles.container_open]: isOpen,
				})}>
				{isOpen && <Form options={options} onChange={onChange} />}
			</aside>
		</>
	);
};
