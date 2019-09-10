import React, { useState } from 'react';
import {CTX} from './Store';

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

    //CTX store
    const {allChats, sendChatAction, user} = React.useContext(CTX);
    const topics = Object.keys(allChats);

    //local state
    const [activeTopic, setActiveTopic] = useState(topics[0]);
    const [text, setText] = useState('');
    return (
        <div>
            <Paper className={classes.root}>
                <Typography variant="h4" component="h4">
                    Chat App
                </Typography>
                <Typography variant="h5" component="h5">
                  {activeTopic}
                </Typography>
                <div className={classes.flex}>
                    <div className={classes.topicsWindow}>
                        {topics.map((topic, index) => {
                            return (
                            <List>
                                <ListItem button key={index} onClick={(e) => setActiveTopic(e.target.innerText)}>
                                    <ListItemText primary={topic} />
                                </ListItem>
                            </List>
                            )
                        })}
                    </div>
                    <div className={classes.chatWindow}>
                        {
                            allChats[activeTopic].map((chat, index) => {
                                return (
                                    <div className={classes.flex} key={index}>
                                        <Chip label={chat.from} className={classes.chip} />
                                        <Typography variant="body1" gutterBottom>{chat.msg}</Typography>
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
                        value={text}
                        onChange={(e) => setText(e.target.value)} 
                    />
                    <Button variant="contained" color="primary" onClick={()=> {
                        sendChatAction({from: user, msg: text, topic: activeTopic})
                        setText('')
                    }}>
                        Send
                    </Button>
                </div>
            </Paper>
        </div>
    )
}

export default Dashboard;