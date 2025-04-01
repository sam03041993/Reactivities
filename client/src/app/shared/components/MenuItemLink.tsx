import { MenuItem } from '@mui/material'
import { ReactNode } from 'react'
import { NavLink } from 'react-router'

export default function MenuItemLink({ children, to }: { children: ReactNode, to: string }) {
    return (
        <MenuItem
            component={NavLink}
            to={to}
            sx={{
                textTransform: 'upper',
                fontSize: '1.2rem',
                fontWeight: 'bold',
                color: 'inherit',
                '&.active': {
                    color: 'yellow'
                }
            }}
        >
            {children}
        </MenuItem>
    )
}
