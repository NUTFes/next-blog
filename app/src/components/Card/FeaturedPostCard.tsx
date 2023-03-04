import * as React from 'react'
import HackmdNote from '@components/HackmdNote.type'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardActionArea from '@mui/material/CardActionArea'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import { useMemo } from 'react'

interface Props {
  post: HackmdNote
}

const FeaturedPostCard = (props: Props) => {
  const { post } = props

  // const lastChangedAt = useMemo(() => {
  //   return new Date(post.lastChangedAt).toLocaleString()
  // }, [post.lastChangedAt])

  return (
    <Grid item xs={12} md={6}>
      <CardActionArea component="a" href={'/' + post.shortId}>
        <Card>
          <CardMedia
            component="img"
            sx={{ display: { xs: 'none', sm: 'block' } }}
            image={post.image ? post.image : 'https://source.unsplash.com/random'}
          />
          <CardContent sx={{ flex: 1 }}>
            <Typography component="h2" fontWeight="bold" variant="h5">
              {post.title}
            </Typography>
            {/* <Typography variant="subtitle1" color="text.secondary">
              {lastChangedAt}
            </Typography> */}
            <Typography variant="subtitle1" color="text.secondary" paragraph>
              {post.description}
            </Typography>
            <Typography variant="subtitle1" color="primary">
              続きを読む
            </Typography>
          </CardContent>
        </Card>
      </CardActionArea>
    </Grid>
  )
}

export default FeaturedPostCard
