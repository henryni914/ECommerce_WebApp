import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AddIcon from '@material-ui/icons/Add';
import CreateIcon from '@material-ui/icons/Create';
import AssignmentIcon from '@material-ui/icons/Assignment';
import ChatIcon from '@material-ui/icons/Chat';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
        flexGrow: 1,
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export default function NestedList(props) {
    console.log(props);
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);

    // const handleClick = () => {
    //     setOpen(!open);
    // };

    return (

        <List
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                    Account Information
        </ListSubheader>
            }
            className={classes.root}
        >
            <ListItem button selected={props.page === "AddItem"} onClick={() => props.handlePageChange("AddItem")}>
                <ListItemIcon>
                    <AddIcon />
                </ListItemIcon>
                <ListItemText primary="Add a product to sell" />
            </ListItem>
            <ListItem button selected={props.page === "AddBlog"} onClick={() => props.handlePageChange("AddBlog")}>
                <ListItemIcon>
                    <ChatIcon />
                </ListItemIcon>
                <ListItemText primary="Write a blog" />
            </ListItem>
            <ListItem button selected={props.page === "ManageItems"}onClick={() => props.handlePageChange("ManageItems")}>
                <ListItemIcon>
                    <AssignmentIcon/>
                </ListItemIcon>
                <ListItemText primary="Manage your inventory" />
            </ListItem>
            <ListItem button selected={props.page === "ManageBlogs"}onClick={() => props.handlePageChange("ManageBlogs")}>
                <ListItemIcon>
                    <CreateIcon/>
                </ListItemIcon>
                <ListItemText primary="Manage your blogs" />
            </ListItem>
        </List>
    )
}