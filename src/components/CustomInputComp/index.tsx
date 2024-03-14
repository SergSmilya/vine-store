import { Box, TextField } from "@mui/material";
import { secondary } from "../../theme/palette";
import { ChangeEvent, FocusEvent } from "react";

interface CustomInput {
    children: string;
    id: string;
    name: string;
    type: string;
    values: {[key: string]: string;};
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
    handleBlur: (e: FocusEvent<HTMLInputElement>) => void;
    // handleBlur: (e?: ChangeEvent<HTMLInputElement>) => void;
    touched: {[key: string]: boolean};
    errors: { [key: string]: string };
    placeholder: string;
    required?: boolean;
}

export default function CustomInputComp({
    children,
    id,
    name,
    type,
    values,
    handleChange,
    handleBlur,
    touched,
    errors,
    placeholder,
    required = true
    }: CustomInput) {
    
    const inputProps = {
        style: {
            padding: '16px',
            fontSize: '14px',
            fontWeight: 300,
            lineHeight: '170%',
            color: secondary.textStyle,
            fontFamily: 'Epilogue, sans-serif',    
        }
    }
    
    return (
        <Box sx={{
            display: ' flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'start',
            rowGap: '12px'
        }}>
            <label>{children}</label>
            <TextField
                inputProps={inputProps}
                fullWidth
                id={id}
                name={name}
                type={type}
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.name && Boolean(errors.name)}
                helperText={touched.name && errors.name}
                placeholder={placeholder}
                required={required}
            />
        </Box>
    )
}