import React from 'react';
import { List, ListItemText, ListItem } from '@material-ui/core';

function Todo(props) {
    return (
        <div>
            <List>
                <ListItem>
                    <ListItemText primary="Todo" secondary={props.text}></ListItemText>
                </ListItem>
            </List>

        </div>
    )
}

export default Todo
