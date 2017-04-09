import React from 'react';
import Button from '../../../../lib/buttons';

const ButtonSizesAndIcons = () => (
	<div>
		<h2> Sizes & Icons </h2>

		{/** LARGE BUTTONS **/}
		<div className="flex spacing-outer-bottom-20 flex flex-direction_row half-width" style={{height: '300px'}}>
			<div className="spacing-right-20 spacing-outer-bottom-20 flex-direction_column flex space-between">
				<Button.B1Brand buttonSize="large">
					L Button
				</Button.B1Brand>

				<Button.B1Brand
					buttonSize="large"
					leftIcon="circle-success"
				>
					Icon L
				</Button.B1Brand>

				<Button.B1Brand
					buttonSize="large"
					rightIcon="circle-success"
				>
					Icon R
				</Button.B1Brand>

				<Button.B1Brand
					buttonSize="large"
					leftIcon="circle-success"
					rightIcon="circle-success"
				>
					Icons both
				</Button.B1Brand>

				<Button.B1Brand
					buttonSize="large"
					widthType="square"
					leftIcon="circle-success"
				/>
			</div>

			{/** MEDIUM BUTTONS **/}
			<div className="spacing-right-20 spacing-outer-bottom-20 flex flex-direction_column space-between">
				<Button.B1Brand buttonSize="medium">
					M Button
				</Button.B1Brand>

				<Button.B1Brand
					buttonSize="medium"
					leftIcon="circle-success"
				>
					Icon L
				</Button.B1Brand>

				<Button.B1Brand
					buttonSize="medium"
					rightIcon="circle-success"
				>
					Icon R
				</Button.B1Brand>

				<Button.B1Brand
					buttonSize="medium"
					widthType="auto"
					leftIcon="circle-success"
					rightIcon="circle-success"
				>
					Icon both
				</Button.B1Brand>

				<Button.B1Brand
					buttonSize="medium"
					widthType="square"
					leftIcon="circle-success"
				/>
			</div>

			{/** SMALL BUTTONS **/}
			<div className="spacing-right-20 spacing-outer-bottom-20 flex flex-direction_column space-between">
				<Button.B1Brand buttonSize="small">
					S Button
				</Button.B1Brand>

				<Button.B1Brand
					buttonSize="small"
					leftIcon="circle-success"
				>
					Icon L
				</Button.B1Brand>

				<Button.B1Brand
					buttonSize="small"
					rightIcon="circle-success"
				>
					Icon R
				</Button.B1Brand>

				<Button.B1Brand
					buttonSize="small"
					widthType="auto"
					leftIcon="circle-success"
					rightIcon="circle-success"
				>
					Icon both
				</Button.B1Brand>

				<Button.B1Brand
					buttonSize="small"
					widthType="square"
					leftIcon="circle-success"
				/>
			</div>

			{/** EXTRA SMALL BUTTONS **/}
			<div className="spacing-right-20 spacing-outer-bottom-20 flex flex-direction_column space-between">
				<Button.B1Brand buttonSize="xsmall">
					XS Button
				</Button.B1Brand>

				<Button.B1Brand
					buttonSize="xsmall"
					leftIcon="circle-success"
				>
					Icon L
				</Button.B1Brand>

				<Button.B1Brand
					buttonSize="xsmall"
					rightIcon="circle-success"
				>
					Icon R
				</Button.B1Brand>

				<Button.B1Brand
					buttonSize="xsmall"
					widthType="auto"
					leftIcon="circle-success"
					rightIcon="circle-success"
				>
					Icon both
				</Button.B1Brand>

				<Button.B1Brand
					buttonSize="xsmall"
					widthType="square"
					leftIcon="circle-success"
				/>
			</div>
		</div>
	</div>
);

export default ButtonSizesAndIcons;
