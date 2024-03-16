import { common } from "@mui/material/colors";
import { success } from "../../theme/palette";

export const inputProps = {
    style: {
        padding: '16px',
        fontSize: '14px',
        fontWeight: 300,
        lineHeight: '170%',
        color: success.dark,
        fontFamily: 'Epilogue, sans-serif',
        backgroundColor: common.white,
        borderRadius: '4px',
    }
}

export const labelProps = {
    shrink: true,
    sx: {
        position: 'static',
        lineHeight: 'normal',
        letterSpacing: '0.4px',
        color: success.dark,
        marginBottom: '12px',
        transform: 'translate(0, 0) scale(1)'
    }
}