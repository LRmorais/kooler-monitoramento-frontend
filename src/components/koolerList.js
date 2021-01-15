import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';

import CruzIcon from '@material-ui/icons/LocalHospitalRounded';
import TextField from '@material-ui/core/TextField';

import Button from '@material-ui/core/Button';
import Send from '@material-ui/icons/SendOutlined';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        maxWidth: '100%',
    },
    demo: {
        backgroundColor: theme.palette.background.paper,
    },
    title: {
        margin: theme.spacing(4, 0, 2),
    },
    button: {
        margin: theme.spacing(1),
    },
}));


export default function InteractiveList() {
    const classes = useStyles();
    const [geleira, setGeleira] = React.useState([{ id: '0', name: '' }])
    const [apelido, setApelido] = React.useState('')
    const [contador, setContador] = React.useState(1)

    const deletar = (id) => {
        console.log(id)
        const newList = geleira.filter((item) => item.id !== id)
        setGeleira(newList);
    }
    const inserir = () => {
        setContador(contador + 1);
        setGeleira([...geleira, { id: contador, name: apelido }])
        setApelido('')
    }
    

    return (
        <div className={classes.root}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Typography variant="h6" className={classes.title}>
                        Lista de Geleiras cadastradas
                    </Typography>
                    <div className={classes.demo}>
                        <List dense={false}>
                            {geleira.map((text) => (
                                <div>
                                    {
                                        (() => {
                                            if (text.id !== '0') {
                                                return (
                                                    <ListItem button key={text.id}
                                                    // função onClick vai mudar o estado que define qual vacina estamos buscando no banco de dados
                                                    >
                                                        <ListItemAvatar>
                                                            <Avatar>
                                                                <CruzIcon />
                                                            </Avatar>
                                                        </ListItemAvatar>
                                                        <ListItemText
                                                            primary={text.name}
                                                            secondary={text.name}
                                                        />
                                                        <ListItemSecondaryAction>
                                                            <IconButton edge="end" aria-label="delete" onClick={() => { deletar(text.id) }}>
                                                                <DeleteIcon />
                                                            </IconButton>
                                                        </ListItemSecondaryAction>

                                                    </ListItem>
                                                )
                                            }
                                        })()
                                    }
                                </div>

                            ))}
                        </List>
                    </div>
                </Grid>

            </Grid>
            <form className={classes.root} noValidate autoComplete="off" >
                <TextField label="Digite um nome"
                    variant="outlined" value={apelido}
                    onChange={(event) => { setApelido(event.target.value) }}
                />
            </form>
            
            <Button
                variant="contained"
                color="primary"
                className={classes.button}
                endIcon={<Send />}
                onClick={() => inserir()}
                >
                Send
            </Button>

        </div>
    );
}
