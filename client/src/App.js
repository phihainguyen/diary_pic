import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';

import { getPosts } from './actions/posts';
import memories from './images/CameraVector.svg';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import useStyles from './styles';

const App = () => {
	const [ currentId, setCurrentId ] = useState(null);
	const classes = useStyles();
	const dispatch = useDispatch();

	useEffect(
		() => {
			dispatch(getPosts());
		},
		[ currentId, dispatch ]
	);

	return (
		<Container maxWidth="lg">
			<AppBar position="static" color="inherit" className={classes.appBar}>
				<Typography variant="h2" align="center" className={`${classes.heading} ${classes.titleSm}`}>
					Memories
				</Typography>
				<img className={classes.imgSm} src={memories} alt="memories" height="60" />
			</AppBar>
			<Grow in>
				<Container>
					<Grid
						className={classes.mainContainer}
						container
						justify="space-between"
						alignItems="stretch"
						spacing={3}
					>
						<Grid item xs={12} sm={7}>
							<Posts setCurrentId={setCurrentId} />
						</Grid>
						<Grid item xs={12} sm={4}>
							<Form currentId={currentId} setCurrentId={setCurrentId} />
						</Grid>
					</Grid>
				</Container>
			</Grow>
		</Container>
	);
};

export default App;
