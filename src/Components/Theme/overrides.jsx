import { alpha } from '@mui/material/styles';

// ----------------------------------------------------------------------

export function overrides(theme) {
    return {
        MuiCssBaseline: {
            
            styleOverrides: {
                '*': {
                    boxSizing: 'border-box',
                },
                '*::-webkit-scrollbar-thumb': {
                    backgroundColor: 'red',
                    borderRadius: '10px',
                },
                '*::-webkit-scrollbar-thumb:hover': {
                    backgroundColor: '#000',
                },
            },
            html: {
                margin: 0,
                padding: 0,
                width: '100%',
                height: '100%',
                WebkitOverflowScrolling: 'touch',
            },
            body: {
                margin: 0,
                padding: 0,
                width: '100%',
                height: '100%',
            },
        },
        
        MuiButton: {
            styleOverrides: {
                root: {
                    "&:hover": {
                        boxShadow: "none",
                    },
                },
                sizeLarge: {
                    height: 48,
                },
                sizeMedium: {
                    height: 40,
                },
                sizeSmall: {
                    height: 32,
                },
                // Inherit Color Start
                containedInherit: {
                    backgroundColor: "#DFE3E8",
                    color: theme.palette.grey[900],
                    borderRadius: "8px",
                    boxShadow: "none",
                    "&:hover": {
                        boxShadow: "none",
                        backgroundColor: alpha(theme.palette.grey[500], 0.32),
                    },
                },
                outlinedInherit: {
                    backgroundColor: "none",
                    color: theme.palette.grey[900],
                    borderRadius: "8px",
                    border: "1px solid",
                    borderColor: theme.palette.grey[500],
                    boxShadow: "none",
                    "&:hover": {
                        boxShadow: "none",
                        backgroundColor: alpha(theme.palette.grey[500], 0.08),
                    },
                },
                softInherit: {
                    backgroundColor: alpha(theme.palette.grey[500], 0.08),
                    color: theme.palette.grey[900],
                    borderRadius: "8px",
                    boxShadow: "none",
                    "&:hover": {
                        boxShadow: "none",
                        backgroundColor: alpha(theme.palette.grey[500], 0.16),
                    },
                },
                // Inherit Color End

                // Primary Color Start
                containedPrimary: {
                    backgroundColor: theme.palette.primary,
                    color: "white",
                    borderRadius: "8px",
                    boxShadow: "none",
                    "&:hover": {
                        boxShadow: "0px 8px 16px 0px rgba(0, 174, 96, 0.24)",
                        backgroundColor: theme.palette.primary.dark,
                    },
                },
                outlinedPrimary: {
                    color: theme.palette.primary.main,
                    border: "1px solid",
                    borderRadius: "8px",
                    borderColor: theme.palette.primary.main,
                    boxShadow: "none",
                    "&:hover": {
                        boxShadow: "none",
                        backgroundColor: alpha(theme.palette.primary.main, 0.08),
                    },
                },
                softPrimary: {
                    backgroundColor: alpha(theme.palette.primary.main, 0.16),
                    color: theme.palette.primary.main,
                    boxShadow: "none",
                    borderRadius: "8px",
                    "&:hover": {
                        boxShadow: "none",
                        backgroundColor: alpha(theme.palette.primary.main, 0.32),
                    },
                },
                // Primary Color End

            },
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    color: theme.palette.grey[900],
                    borderRadius: "8px",
                    borderColor: theme.palette.grey[500],
                },
            },
        },
    };
}