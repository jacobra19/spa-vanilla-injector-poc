import React from 'react';
import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Button,
} from '@material-ui/core';

import { Link } from 'react-router-dom';

const TopBar = () => {
    return (
        <AppBar position="static">
            <Toolbar
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }}>
                <Link to="/">
                    <Typography
                        variant="h6" //className={classes.title}
                    >
                        @spa-vanilla-injector-poc/vite-react
                    </Typography>
                </Link>
                <Button color="inherit">
                    <Link to="/vanilla">vanilla</Link>
                </Button>
            </Toolbar>
        </AppBar>
    );
};

export default TopBar;
