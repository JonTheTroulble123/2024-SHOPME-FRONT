import * as React from 'react';
import Stack from '@mui/material/Stack';
import * as style from '../../style/Forget&Reset/Style';
import MuiAlert, { AlertProps } from '@mui/material/Alert';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
	return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />;
});

const ErrorMessages = ({ errors }: any) => {
	return (
		<>
			<Stack spacing={2} sx={style.errorsContainerStyle}>
				{errors.length > 0 ? (
					<Alert severity='error' sx={{ width: '400px' }}>
						{errors}
					</Alert>
				) : null}
			</Stack>
		</>
	);
};

export default ErrorMessages;
