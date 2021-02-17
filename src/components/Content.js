import React, { useState, useEffect } from 'react';
import { Grid, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Card from './Card';
import firebase from '../firebase/firebase';
import 'firebase/database';

const useStyles = makeStyles(theme => ({
  root: {
    justifyContent: 'center',
  },
}));

export default function Content() {
  const classes = useStyles();
  const [products, setProducts] = useState([]);
  const [limit, setLimit] = useState(3);
  useEffect(() => {
    const db = firebase.database();
    db.ref('products')
      .limitToFirst(limit)
      .get()
      .then(function (snapshot) {
        if (snapshot.exists()) {
          setProducts(snapshot.val());
        }
      });
  }, [limit]);

  return (
    <>
      <Grid container spacing={5} className={classes.root}>
        {products.map(product => (
          <Grid item key={product.id} xs={12} md={4}>
            <Card
              name={product.name}
              description={product.description}
              price={product.price}
              img={product.image}
            ></Card>
          </Grid>
        ))}
        <Button
          className={classes.button}
          color='primary'
          size='large'
          variant='contained'
          onClick={() => setLimit(limit + 2)}
        >
          Poka więcej
        </Button>
      </Grid>
    </>
  );
}
