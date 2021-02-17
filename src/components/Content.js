import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import Card from './Card';
import firebase from '../firebase/firebase';
import 'firebase/database';

export default function Content() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const db = firebase.database();
    db.ref('products')
      .get()
      .then(function (snapshot) {
        if (snapshot.exists()) {
          console.log(snapshot.val());
          setProducts(snapshot.val());
        }
      });
  }, []);

  return (
    <Grid container spacing={5}>
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
    </Grid>
  );
}
