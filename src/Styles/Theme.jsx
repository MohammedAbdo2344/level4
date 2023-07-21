import { grey } from '@mui/material/colors';
import React from 'react';

const Theme = (mode) => ({
    palette: {
        mode,
        ...(mode === 'light'
            ? {
                // palette values for light mode
                backgroundButtons: {
                    main: grey[300],
                }
            }
            : {
                // palette values for dark mode
                backgroundButtons: {
                    main: grey[800],
                }
            }),
    },
  });
  

export default Theme;