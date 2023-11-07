import React from 'react'
import classes from './dealwhite.module.css'
const Dealwhite = (props) => {
  return (
    <div className={classes.dealwhiteMain}>
      <a href={props.deal.productOneLink} className={ `${classes.imageSet} ${classes.spaceImage} ` } >
        <img src={props.deal.productOneImage} alt="" />
        <h3 className={classes.productNameInsideWhite}>{props.deal.productOneTitle}</h3>
      </a>
      <a href={props.deal.productTwoLink} className={classes.imageSet}>
        <img src={props.deal.productTwoImage} alt="" />
        <h3 className={classes.productNameInsideWhite} >{props.deal.productTwoTitle}</h3>
      </a>
      <a href={props.deal.productThreeLink} className={classes.imageSet}>
        <img src={props.deal.productThreeImage} alt="" />
        <h3 className={classes.productNameInsideWhite}>{props.deal.productThreeTitle}</h3>
      </a>
      <a href={props.deal.productFourLink} className={classes.imageSet}>
        <img src={props.deal.productFourImage} alt="" />
        <h3 className={classes.productNameInsideWhite}>{props.deal.productFourTitle}</h3>
      </a>
      <a href={props.deal.productFiveLink} className={classes.imageSet}>
        <img src={props.deal.productFiveImage} alt="" />
        <h3 className={classes.productNameInsideWhite}>{props.deal.productFiveTitle}</h3>
      </a>
    </div>
  )
}

export default Dealwhite
