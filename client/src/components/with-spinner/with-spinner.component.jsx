import React from 'react';

import { SpinnerContainer, SpinnerOverlay } from './with-spinner.styles';

export const withSpinner = WrappedComponent => ({ isLoading, ...otherProps }) => {
    return isLoading ? (
        <SpinnerOverlay>
            <SpinnerContainer />
        </SpinnerOverlay>
    ) : (
        <WrappedComponent { ...otherProps } />
    )
}

export default withSpinner;