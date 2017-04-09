import React from 'react';
import Button from '../../../../lib/buttons';

const ButtonColorsAndStates = () => (
	<div>
		<h2> Colors & States </h2>
		<div className="flex spacing-outer-bottom-20 flex flex-direction_column half-width">
			<div className="spacing-right-20 spacing-outer-bottom-20 flex space-between">
				<Button.B1Brand>
					Brand
				</Button.B1Brand>

				<Button.B1Neutral>
					Neutral
				</Button.B1Neutral>

				<Button.B1Success>
					Success
				</Button.B1Success>

				<Button.B1Warning>
					Warning
				</Button.B1Warning>

				<Button.B1Danger>
					Danger
				</Button.B1Danger>
			</div>

			<div className="spacing-right-20 spacing-outer-bottom-20 flex space-between">
				<Button.B1Brand>
					.
				</Button.B1Brand>

				<Button.B1Neutral>
					.
				</Button.B1Neutral>

				<Button.B1Success>
					.
				</Button.B1Success>

				<Button.B1Warning>
					.
				</Button.B1Warning>

				<Button.B1Danger>
					.
				</Button.B1Danger>

			</div>

			{/** DISABLED BUTTONS **/}

			<div className="spacing-right-20 spacing-outer-bottom-20 flex space-between">
				<Button.B1Brand disabled={true}>
					Disabled
				</Button.B1Brand>

				<Button.B1Neutral disabled={true}>
					Disabled
				</Button.B1Neutral>

				<Button.B1Success disabled={true}>
					Disabled
				</Button.B1Success>

				<Button.B1Warning disabled={true}>
					Disabled
				</Button.B1Warning>

				<Button.B1Danger disabled={true}>
					Disabled
				</Button.B1Danger>
			</div>

			{/** INVERTED BUTTONS **/}

			<div className="spacing-right-20 spacing-outer-bottom-20 flex space-between">
				<Button.B1BrandInverted>
					Brand
				</Button.B1BrandInverted>

				<Button.B1NeutralInverted>
					Neutral
				</Button.B1NeutralInverted>

				<Button.B1SuccessInverted>
					Success
				</Button.B1SuccessInverted>

				<Button.B1WarningInverted>
					Warning
				</Button.B1WarningInverted>

				<Button.B1DangerInverted>
					Danger
				</Button.B1DangerInverted>
			</div>

			<div className="spacing-right-20 spacing-outer-bottom-20 flex space-between">
				<Button.B1BrandInverted>
					.
				</Button.B1BrandInverted>

				<Button.B1NeutralInverted>
					.
				</Button.B1NeutralInverted>

				<Button.B1SuccessInverted>
					.
				</Button.B1SuccessInverted>

				<Button.B1WarningInverted>
					.
				</Button.B1WarningInverted>

				<Button.B1DangerInverted>
					.
				</Button.B1DangerInverted>
			</div>

			{/** INVERTED DISABLED BUTTONS **/}

			<div className="spacing-right-20 spacing-outer-bottom-20 flex space-between">
				<Button.B1BrandInverted disabled={true}>
					Disabled
				</Button.B1BrandInverted>

				<Button.B1NeutralInverted disabled={true}>
					Disabled
				</Button.B1NeutralInverted>

				<Button.B1SuccessInverted disabled={true}>
					Disabled
				</Button.B1SuccessInverted>

				<Button.B1WarningInverted disabled={true}>
					Disabled
				</Button.B1WarningInverted>

				<Button.B1DangerInverted disabled={true}>
					Disabled
				</Button.B1DangerInverted>
			</div>
		</div>
	</div>
);

export default ButtonColorsAndStates;
