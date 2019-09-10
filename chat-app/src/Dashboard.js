import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
    root: {
        margin: '50px',
      padding: theme.spacing(3, 2),
    },
    flex: {
        display: 'flex',
        alignItems: 'center',
    },
    topicsWindow: {
        width: '30%',
        height: '300px',
        borderRight: '1px solid black'
    },
    chatWindow: {
        width: '70%',
        height: '300px',
        padding: '20px',
    },
    chatBox: {
        width: '85%'
    },
    button: {
        width: '15%'
    }
  }));

const Dashboard = (props) => {
    const classes=useStyles();
    return (
        <div>
            <Paper className={classes.root}>
                <Typography variant="h5" component="h3">
                    Chat App
                </Typography>
                <Typography component="p">
                   Topic Placeholder
                </Typography>
                <div className={classes.flex}>
                    <div className={classes.topicsWindow}>
                        {['topic'].map((topic, index) => {
                            return (
                            <List>
                                <ListItem button key={index}>
                                    <ListItemText primary={topic} />
                                </ListItem>
                            </List>
                            )
                        })}
                    </div>
                    <div className={classes.chatWindow}>
                        {
                            [{from: 'user', msg: 'hello'}].map((chat, index) => {
                                return (
                                    <div className={classes.flex} key={index}>
                                        <Chip label={chat.from} className={classes.chip} />
                                        <Typography variant="p">{chat.msg}</Typography>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className={classes.flex}>
                    <TextField
                        label="Send a Chat"
                        className={classes.chatBox}
                        // value={values.name}
                        // onChange={handleChange('name')} 
                    />
                    <Button variant="contained" color="primary">
                        Send
                    </Button>
                </div>
            </Paper>
        </div>
    )
}

export default Dashboard;