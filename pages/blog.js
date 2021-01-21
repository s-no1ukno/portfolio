import { getPosts } from '../api/posts'
import { makeStyles } from '@material-ui/core/styles'
import Link from 'next/link'
import BaseLayout from '../src/Components/BaseLayout'
import Container from '@material-ui/core/Container'

import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'


const useStyles = makeStyles(theme => ({

  media: {
    height: 200,
  },

  pageTitle: {
    margin: theme.spacing(4, 2, 0, 2)
  },

  card: {
    width: '80vw',
    margin: '0 auto',
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
    borderRadius: '20px',


    [theme.breakpoints.up('sm')]: {
      display: 'grid',
      gridTemplateColumns: '180px auto',
      gridColumnGap: '1em',
      height: '200px'
    },

  },
  
}));

const blog = props => {
  const classes = useStyles()
  // <Container>
  //       {props.posts.map(post => (
  //         <Card>
  //           <Link href={`/[slug]`} as={`/${post.slug}`}>
  //             <h5>{post.title}</h5>
  //           </Link>
  //           <p>{post.custom_exerpt}</p>
  //         </Card>
  //       ))}
  //     </Container>
  
  return (
    <BaseLayout className={classes.root}>
      <h1>This area is in development...</h1>
      <Typography
        component='h1'
        variant='h4'
        className={classes.pageTitle}
      >
        Latest Blog Posts
      </Typography>
      {props.posts.map(post => (
        <Card className={classes.card} key={post.id}>
          <CardMedia
            className={classes.media}
            image={post.feature_image}
            title={post.title}
            />
          <CardActionArea>
            <Link href={`/[slug]`} as={`/${post.slug}`}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {post.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {post.excerpt}
                </Typography>
              </CardContent>
            </Link>
          </CardActionArea>
        </Card>
      ))}
    </BaseLayout>
  )  
}

// provide posts to the blog page to make app fast
blog.getInitialProps = async () => {
  const posts = await getPosts()

  posts.map(post => {
    const options = {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    }

    post.dateFormatted = new Intl.DateTimeFormat('en-US', options)
      .format(new Date(post.published_at))
  })

  return { posts: posts }
}

export default blog