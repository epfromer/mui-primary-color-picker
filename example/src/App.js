import React from 'react'
import PrimaryColorPicker from 'mui-primary-color-picker'
import AppBar from '@material-ui/core/AppBar'
import Container from '@material-ui/core/Container'
import {
  createMuiTheme,
  makeStyles,
  ThemeProvider,
} from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
}))

export default function App() {
  const classes = useStyles()
  const [primaryColor, setPrimaryColor] = React.useState('#2196f3')
  const customTheme = createMuiTheme({
    palette: {
      primary: { main: primaryColor },
    },
  })
  return (
    <ThemeProvider theme={customTheme}>
      <div className="App">
        <AppBar position="absolute">
          <Toolbar className={classes.toolbar}>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              className={classes.title}
            >
              mui-primary-color-picker
            </Typography>
          </Toolbar>
        </AppBar>
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Container maxWidth="lg" className={classes.container}>
            <PrimaryColorPicker
              defaultColor={primaryColor}
              onChange={(color) => setPrimaryColor(color)}
            />
          </Container>
        </main>
      </div>
    </ThemeProvider>
  )
}
