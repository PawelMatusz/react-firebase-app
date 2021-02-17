import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Container,
  Button,
  Modal,
  FormGroup,
  FormControl,
  Input,
  InputLabel,
  FormHelperText,
} from '@material-ui/core';

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    width: '80%',
    maxWidth: 500,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(5, 4, 5),
  },
  button: {
    marginTop: 50,
    width: 120,
  },
  h2: {
    textAlign: 'center',
  },
}));

export default function SimpleModal() {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <Container>
      <FormGroup style={modalStyle} className={classes.paper}>
        <h2 className={classes.h2} id='simple-modal-title'>
          Login
        </h2>
        <FormControl>
          <InputLabel htmlFor='email'>Email address</InputLabel>
          <Input id='email' aria-describedby='my-helper-text' required />
          <FormHelperText id='my-helper-text'>
            We'll never share your email.
          </FormHelperText>
        </FormControl>
        <FormControl>
          <InputLabel htmlFor='password'>Password</InputLabel>
          <Input id='password' required type='password' />
        </FormControl>
        <Button
          className={classes.button}
          size='medium'
          variant='contained'
          color='primary'
        >
          Login
        </Button>
      </FormGroup>
    </Container>
  );

  return (
    <div>
      <Button type='button' onClick={handleOpen} color='inherit'>
        Login
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='simple-modal-title'
        aria-describedby='simple-modal-description'
      >
        {body}
      </Modal>
    </div>
  );
}
