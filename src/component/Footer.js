import React from 'react';
import '../component/Footer.css';
const altCoinShare = require('../image/altCoinshare.png');
const social = require('../image/socialMedia.png');
const Footer = () => {
    return(
        <span className="Footer">
            <span className='company'>Company
                <a href='/' className='about'> About us</a>
                <a href='/' className='how'>How it works</a>
                <a href='/' className='terms'>Terms of service</a>
                <a href='/' className='privacy'>Privacy</a>
                <a href='/' className='blog'>Blog</a>
            </span>
            <span className='features'>
                Features
                <a href='/' className='save'>Save with Friends</a>
                <a href='/' className='personal'> Personal Savings</a>
                <a href='/' className='group'>Group Savings (Thrift)</a>
                <a href='/' className='payment'>Payment (Coin-Pay)</a>
                <a href='/' className='loan'>Loan (Coming soon)</a>
                <a href='/' className='bill'>Bills payment</a>
            </span>
            <span className='business'>
                Business
                <a href='/' className='sell'>Sell with AjoMoney</a>
                <a href='/' className='paymentMethods'>Payment methods</a>
                <a href='/' className='developers'>Developers</a>
                <a href='/' className='ambassador'>Ambassador</a>
            </span>
            <span className='download'>
                Download
                <a href='/' className='google'>Google Play (Coming soon)</a>
                <a href='/' className='apple'>Apple App Store (Coming soon)</a>
                <a href='/' className='huawei'>Huawei App Gallery (Coming soon)</a>
                <a href='/' className='web'>Web</a>
                <img src={social} alt='social' className='socialMedia' />
            </span>
            <span>
                <img src={altCoinShare} alt='altCoin' className='altCoin'/>
                <hr/>
                <p className='cac'>CoinShare is a product of Achievers Financial Technology Limited registered under the Nigeria Corporate Affairs <br/> Commission (RC: 1780015). AjoMoney is not a bank and does not provide investment advice.</p>
            </span>
        </span>
    )
}

export default Footer;