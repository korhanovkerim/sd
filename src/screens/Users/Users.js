import React, {useState} from 'react'
import{
    CssBaseline,
    Container,
    Grid,
    AppBar,
    Toolbar,
    Typography,
    Button,
    IconButton
} from '@mui/material'
import PenIcon from "@mui/icons-material/Create"
import AddForm from '../../components/AddForm'


const Users = () =>{
    const [open, setOpen] = useState(false)

    const handleOpen = () =>{
        setOpen(true)
    }
    const handleClose = () =>{
        setOpen(false)
    }

    return(
        <div>
            <Button color='primary' variant='outlined' startIcon={<PenIcon />} onClick={handleOpen}>
                Yeni yaz
            </Button>
            <AddForm open={open} handleClose={handleClose} />
        </div>
    )
}


export default Users