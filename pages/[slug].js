import { getSinglePost } from '../api/posts'
import BaseLayout from '../src/Components/BaseLayout'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'

const useStyles = makeStyles(theme => ({
  root: {
    width: '80vw',
    marginLeft: theme.spacing(4),
    lineHeight: 1.5,
  },

  paper: {
    padding: theme.spacing(8),
    margin: '0 auto',
    marginTop: theme.spacing(4)
  }
}))

// PostPage component
const PostPage = props => {
  const classes = useStyles()
  // rendering variables from props
  return (
    <BaseLayout>
      <div className={classes.root}>
        <Paper className={classes.paper} elevation={10}>
          <h1>{props.post.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: props.post.html }} />
        </Paper>
      </div>
    </BaseLayout>
  )
}

PostPage.getInitialProps = async params => {
  const post = await getSinglePost(params.query.slug)
  return { post: post }
}

export default PostPage