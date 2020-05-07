import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
// import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
// import PlayArrowIcon from '@material-ui/icons/PlayArrow';
// import SkipNextIcon from '@material-ui/icons/SkipNext';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
  large: {
    width: theme.spacing(12),
    height: theme.spacing(12),
  },
}));


export default function MediaControlCard(props) {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Card className={classes.root}>
        <CardMedia>
                    <Avatar alt="Remy Sharp" src="data:image/jpeg;base64,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" className={classes.large} />
        </CardMedia>

      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            Carl Parm
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Location: Washington, D.C.
          </Typography>
          <Typography variant="subtitle2" color="textSecondary">
            Age: 27
          </Typography>
        </CardContent>
        <div className={classes.controls}>
        </div>
      </div>
    </Card>
  );
}