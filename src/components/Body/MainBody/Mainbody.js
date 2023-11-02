import classes from './Mainbody.module.css';
import Banner from '../../../images/Banner.jpg';
import Deals from './DealsSection/Deals';
import imageOne from '../../../images/productImages/product1.jpeg'
import imageTwo from '../../../images/productImages/product2.jpeg'
import imageThree from '../../../images/productImages/product3.jpeg'
import imageFour from '../../../images/productImages/product4.jpeg'
import imageFive from '../../../images/productImages/product5.jpeg'
import imageSix from '../../../images/productImages/product6.jpeg'
import imageSeven from '../../../images/productImages/product7.jpeg'
import imageEight from '../../../images/productImages/product8.jpeg'
import imageNine from '../../../images/productImages/product9.jpeg'
import imageTen from '../../../images/productImages/product10.jpeg'
const dealOne={
  title:'Top Deal Products',
  productOneTitle:'Organic Products',
  productOneLink:'',
  productOneImage:imageOne,
  productTwoTitle:'Pulses',
  productTwoLink:'',
  productTwoImage:imageTwo,
  productThreeTitle:'Millets',
  productThreeLink:'',
  productThreeImage:imageThree,
  productFourTitle:'Masala',
  productFourLink:'',
  productFourImage:imageFour,
  productFiveTitle:'Food Oil',
  productFiveLink:'',
  productFiveImage:imageNine,
}
const dealTwo={
  title:'New Products',
  productOneTitle:'Pickles',
  productOneLink:'',
  productOneImage:imageFive,
  productTwoTitle:'Masala',
  productTwoLink:'',
  productTwoImage:imageSix,
  productThreeTitle:'Natural Oil',
  productThreeLink:'',
  productThreeImage:imageSeven,
  productFourTitle:'Millets',
  productFourLink:'',
  productFourImage:imageEight,
  productFiveTitle:'Spices',
  productFiveLink:'',
  productFiveImage:imageTen,
}
function Mainbody() {



  return (
    <div className={classes.MainbodyMain}>
      <div className={classes.bannerMain} >
        <div className={classes.Banner} >
          <a href="#/" className={classes.linkOne}>
            <img src={Banner} alt="" />
          </a>
        </div>
        <div className={classes.Banner}>
          <a href="#/" className={classes.linkOne}>
            <img src={Banner} alt="" />
          </a>
        </div>
      </div>
      <Deals deal={dealOne}/>
      <Deals deal={dealTwo}/>
    </div>
  );
}

export default Mainbody;
