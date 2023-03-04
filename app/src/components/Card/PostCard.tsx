import * as React from 'react'
import MuiMarkdown from 'mui-markdown'
import HackmdNote from '@components/HackmdNote.type'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'

interface Props {
  post: HackmdNote
}

const PostCard = (props: Props) => {
  const { post } = props

  return (
    <Paper
      sx={{
        position: 'relative',
        backgroundColor: 'grey.800',
        color: '#fff',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        mb: 2,
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: 'rgba(0,0,0,.3)',
        }}
      />

      <Box
        sx={{
          position: 'relative',
          p: { xs: 3, md: 6 },
          pr: { md: 0 },
        }}
      >
        <MuiMarkdown>{post.content}</MuiMarkdown>
      </Box>
    </Paper>
  )
}

export default PostCard
