import React from 'react';
import '../component/Landing.css';
// import Header from './Header';
// import WhyPage from './WhyPage';
// import Footer from './Footer';
const star = require("../image/Star.png");
    const laugh = require("../image/Laugh.png");
    const hello = require('../image/Hello.png');
    const starmini = require('../image/Starmini.png');
    const tears = require('../image/To tears.png');
    const birthday = require('../image/Birthday.png');
const Landing = () =>{
return (
    <div>
    <span className='Landing'>
    <span className='jumbroton'>
        We're here to help <br />
        you get the <span className='emphasis'>best out <br />of your life</span>
    </span>
    <span className='dare'>CoinShare helps you groom financial and savings discipline <br />
        through peer savings and funds sharing. Get started today! <img className='star' src={star} alt='emoji'/>
    </span>
            <span>
            <a className='getStartedNow' href='www.google.com'>Get Started</a>
            <span className='learnMore'><a href="/">Learn more about us</a></span>
            </span>
            <span className='emoji_one'><img  src={laugh} alt='laugh'/>Easy Savings</span>
            <span className='emoji_two'><img  src={hello} alt='hello'/> Backup Cash</span>
            <span className='emoji_three'><img  src={birthday} alt='birthday'/>Achieve Goals</span>
            <span className='emoji_four'><img  src={tears} alt='To tears'/>Pay Bills</span>
            <span className='emoji_five'><img  src={starmini} alt='starmini'/>Plan Ahead</span>
    </span>
    </div>
    ) 
}

export default Landing;