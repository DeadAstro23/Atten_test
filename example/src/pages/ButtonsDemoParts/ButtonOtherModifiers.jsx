import React from 'react';
import Button from '../../../../lib/buttons';

const ButtonOtherModifiers = () => (
	<div>
		<h2> Other modifiers </h2>
		<div className="flex spacing-outer-bottom-20 flex flex-direction_column half-width">
			<div className="spacing-right-20 spacing-outer-bottom-20 flex flex-direction_column space-between" style={{height: '250px'}}>
				<Button.B1Brand disabled={true}>
					Short
				</Button.B1Brand>

				<Button.B1Brand>
					Short
				</Button.B1Brand>

				<Button.B1Brand widthType="auto">
					Short
				</Button.B1Brand>

				<Button.B1Brand
					widthType="auto"
					noPaddings={true}
				>
					Long title for unpadded
				</Button.B1Brand>

				<Button.B1Brand widthType="full">
					Short
				</Button.B1Brand>
			</div>
		</div>
	</div>
);

export default ButtonOtherModifiers;
