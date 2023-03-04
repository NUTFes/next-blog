import * as React from 'react'
import HackmdNote from '@components/HackmdNote.type'
import CssBaseline from '@mui/material/CssBaseline'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import GitHubIcon from '@mui/icons-material/GitHub'
import Masonry from '@mui/lab/Masonry'
import TwitterIcon from '@mui/icons-material/Twitter'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import MainHeader from '@components/Header/MainHeader'
import Sidebar from '@components/Sidebar/Sidebar'
import MainFooter from '@components/Footer/MainFooter'
import { get } from '@utils/api_methods'

interface Props {
  children?: React.ReactNode
}

export const getStaticProps = async () => {
  const getUrl = process.env.API_BASE_URL + '/notes/'
  const json = await get(getUrl)
  return {
    props: {
      posts: json,
    },
  }
}

const sections = [
  { title: 'About', url: '#' },
  { title: 'Blog', url: '/' },
  { title: 'Contact', url: '#' },
]

const sidebar = {
  title: 'About',
  description: 'あいうえお',
  archives: [
    { title: 'March 2020', url: '#' },
    { title: 'February 2020', url: '#' },
  ],
  social: [
    { name: 'GitHub', icon: GitHubIcon, url: 'https://github.com/TsubasaOura' },
    { name: 'Twitter', icon: TwitterIcon, url: 'https://twitter.com/Osupa283' },
  ],
}

const theme = createTheme()

const MainLayout = (props: Props) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <MainHeader title="O2 Blog" sections={sections} />
        <main>{props.children}</main>
        <Sidebar
          title={sidebar.title}
          description={sidebar.description}
          archives={sidebar.archives}
          social={sidebar.social}
        />
      </Container>
      <MainFooter title="Footer" description="Something here to give the footer a purpose!" />
    </ThemeProvider>
  )
}

export default MainLayout
