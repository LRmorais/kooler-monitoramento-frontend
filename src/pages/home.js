import React, {useState } from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';


// icones 
import MapIcon from '@material-ui/icons/Map';
import SpeedIcon from '@material-ui/icons/Speed';
import ViewListIcon from '@material-ui/icons/ViewList';
import BatteryCharging90Icon from '@material-ui/icons/BatteryCharging90';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
// componentes a serem renderizados
import Maps from '../components/maps';
import KoolerList from '../components/koolerList';
import Teste from '../components/testes';
import Chart from './temp';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function MiniDrawer() {
  // component define qual componente sera renderizado no Main
  const [component, setComponent] = useState('Mapa')

  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  
// função para abrir site externo
  function siteExterno(props) {
    return window.open(props,"_blank")
  }
  
  
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Kooler of dashboard
          </Typography>
          

        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          {['Mapa', 'Temperatura', 'Lista de Koolers', 'Informações'].map((text, index) => (
            <ListItem 
            button key={text} 
            // setando os nomes na variavel auxiliar
            onClick={ () => {
              if(text === 'Mapa'){
                setComponent('Mapa')
              }else if(text === 'Temperatura'){
                setComponent('Gauge')
              }else if( text === 'Lista de Koolers'){
                setComponent('Lista')
              }else if( text === 'Informações'){
                setComponent('info')
              }
              } }>
              <ListItemIcon>
                {/* If aninhado para organizar icons e textos respectivos */}
                {
                  ( () => {
                    if(index === 0){return <MapIcon />}
                    else if(index === 1) {return <SpeedIcon />}
                    else if(index === 2) {return <ViewListIcon />}
                    else {return <BatteryCharging90Icon/>}
                  } )()
                }
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['Facebook', 'Instagram', 'Whatsapp'].map((text, index) => (
            <ListItem 
            button key={text}
            onClick={ () => {
              if(text === 'Facebook'){
                siteExterno('https://www.facebook.com/Laborat%C3%B3rio-de-Engenhocas-UFPA-174121902675318/')
              }else if(text === 'Instagram'){
                siteExterno('https://www.instagram.com/labengenhocasufpa/')
              }
              } }
            >
              <ListItemIcon>
                {
                  ( () => {
                    if(index === 0){return <FacebookIcon />}
                    else if(index === 1) {return <InstagramIcon />}
                    else {return <WhatsAppIcon />}
                  } )()
                }
                </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {/* Estrutura condicional para selecionar componentes em main */}
        {
          ( () => {
            if (component === 'Mapa'){
              return <Maps />
            }else if(component === 'Gauge'){
              return <Chart />
            }else if(component === 'Lista'){
              return <KoolerList />
            }else if(component === 'info'){
              return <Teste />
            }
          })()
        }
        
      </main>
    </div>
  );
}