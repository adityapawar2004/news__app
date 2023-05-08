import React from 'react';
import {Card,CardActions,CardActionArea,CardContent,CardMedia,Button,Typography} from '@material-ui/core';
import useStyles from './styles'
import classNames from 'classnames';
const Newscard = ({article:{description,publishedAt,source,title,url,urlToImage},activeArticle,i}) => {
  const classes=useStyles();

  return (
    <Card className={classNames(classes.card,activeArticle===i ? classes.activeCard:null)}>
      <CardActionArea href={url} target='_blank'>
        <CardMedia className={classes.media} image={urlToImage ||'https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png'}/>
        <div>
        <Typography variant='body2' color="black" component="h2">{(new Date(publishedAt)).toDateString()}</Typography>
        <Typography variant='body2' color="black" component="h2">{source.name}</Typography>
        </div>
        <Typography gutterBottom variant='h5' className={classes.title}>{title}</Typography>
        <CardContent>
          <Typography variant='body2' color='textSecondary' component='p'>{description}</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.cardActions}>
        <Button size='small' color='blue'>Read More...</Button>
        <Typography variant='h5' color='textSecondary'>{i+1}</Typography>
      </CardActions>
    </Card>
  )
}

export default Newscard