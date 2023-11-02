import React from 'react'
import Dealwhite from './Dealwhite'
import classes from './deals.module.css'
const Deals = (props) => {

  return (
    <div className={classes.dealMain}>
      <h1 className={classes.MainpageProductsTitle}>{props.deal.title}</h1>
      <Dealwhite deal={props.deal}/>
    </div>
  )
}

export default Deals;
