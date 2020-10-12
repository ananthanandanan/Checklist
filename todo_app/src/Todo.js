import React, { useState } from 'react';
import { List, ListItemText, ListItem,  Modal, Button, FormControl, Input } from '@material-ui/core';
import db from './firebase';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

function Todo(props) {

    const classes = useStyles();
    //edit handler
    const [open, setOpen] = useState(false);
    const [input, setInput] = useState('');
    const updateTodo = () => {
        //update the todo with input text
        db.collection('todos').doc(props.todo.id).set({
            todo : input
        }, {merge: true})
        setOpen(false);
    };

    // basically the first statement in the open state helps you to montior the state of the modal. so when the open state is 
    // false it remains closed. And second like 
    return (
        <div>
            <>
                <Modal
                    open={open} // basically the first statement in the open state helps you to montior the state of the modal. so when the open state is 
                                // false it remains closed. And second like 
                    onClose={e => setOpen(false)}//handles what happens when it closes
                >
                    <div className={classes.paper}>
                    <h2> change here</h2>
                    <form>
                    <FormControl>
                    <Input placeholder={props.todo.todo} value={input} onChange={e => setInput(e.target.value)}/>
                    </FormControl>
                    <Button variant="contained" color="primary" onClick={updateTodo}>Update todo</Button>
                    </form>
                    </div>

                </Modal>
                <List className="todo_list">
                    <ListItem>
                        <ListItemText primary={props.todo.todo} secondary="alarm set off" ></ListItemText>
                    </ListItem>
                    <Button color="primary" variant="contained" onClick={e => setOpen(true)}>Edit me</Button>
                    <DeleteForeverIcon onClick={event => db.collection('todos')
                    .doc(props.todo.id).delete()}>Delete</DeleteForeverIcon>
                </List>
            </>

        </div>
    )
}

export default Todo
