import React from "react";
import { makeStyles } from '@mui/styles'
import { useDispatch } from "react-redux"
import {
    Button,
    TextField,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle
} from "@mui/material"
import {useForm, Controller} from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { createUsers } from "../actions/users";

const postSchema = yup.object().shape({
    surname: yup.string(),
    name: yup.string(),
    fatherName: yup.string()
})

const AddForm = ({open, handleClose}) =>{
    const dispatch = useDispatch()
    const {register, handleSubmit, control, errors, reset} = useForm({
        resolver: yupResolver(postSchema)
    })

    const onSubmit = (data) => {
        dispatch(createUsers({...data}))
        console.log(data);
        
    }

    const clearForm = () =>{
        reset();
        handleClose();
    }

    return(
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>
                Yeni Yazi olustur
            </DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Yeni bir
                </DialogContentText>

                <div >
                    <form noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" 
                            {...register('surname')} 
                            />
                    <input type="text" 
                            {...register('name')} 
                            />
                    <input type="text" 
                            {...register('fatherName')}  
                            />
                        {/* <TextField 
                            id="surname"
                            label="surname"
                            name="surname"
                            variant="outlined"
                            size="small"
                            inputRef={{...register('surname')}}
                            fullWidth
                        />
                        <TextField 
                            id="name"
                            label="name"
                            name="name"
                            variant="outlined"
                            size="small"
                            inputRef={{...register('name')}}
                            fullWidth
                        />
                        <TextField 
                            id="fatherName"
                            label="fatherName"
                            name="fatherName"
                            variant="outlined"
                            size="small"
                            inputRef={{...register('fatherName')}}
                            fullWidth
                        /> */}
                    </form>
                </div>
            </DialogContent>
            <DialogActions>
                <Button color="inherit" onClick={clearForm}>Vazgec</Button>
                <Button type="submit" 
                        variant="outlined"
                        color="inherit"
                        onClick={() => handleSubmit(onSubmit) ()}>Yayinla</Button>
            </DialogActions>
        </Dialog>
    )
}

export default AddForm