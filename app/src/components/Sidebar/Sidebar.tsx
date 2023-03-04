import * as React from 'react'
import SidebarProps from './Sidebar.type'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'

const Sidebar = (props: SidebarProps) => {
  const { archives, description, social, title } = props

  return (
    <Paper elevation={0} sx={{ p: 2, bgcolor: 'grey.200', md: 'hidden' }}>
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <Typography>{description}</Typography>

      <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
        Archives
      </Typography>
      {archives.map((archive) => (
        <Link display="block" variant="body1" href={archive.url} key={archive.title}>
          {archive.title}
        </Link>
      ))}
      <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
        Social
      </Typography>
      {social.map((network) => (
        <Link display="block" variant="body1" href={network.url} key={network.name} sx={{ mb: 0.5 }}>
          <Stack direction="row" spacing={1} alignItems="center">
            <network.icon />
            <span>{network.name}</span>
          </Stack>
        </Link>
      ))}
    </Paper>
  )
}
export default Sidebar
