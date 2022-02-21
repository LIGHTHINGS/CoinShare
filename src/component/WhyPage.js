import '../component/WhyPage.css';
const WhyPage = () => {
    const secure = require('../image/security-safe.png');
    const trusted = require('../image/like.png');
    const speed = require('../image/share.png');
    const support = require('../image/24-support.png');
    const phone = require('../image/image.png');
    const fadeCoin = require('../image/fade1.png');
    const fadeCoin_2 = require('../image/faded2.png');
    const fadeCoin_3 = require('../image/faded3.png');
    const dash = require('../image/Vector 930.png');
    const googleApp = require('../image/google app.png');
    const appleApp = require('../image/apple app.png')
    return (
        <><div className='whypage'>
            <h1 className="lead">Why CoinShare?</h1>
            <img src={fadeCoin} alt="fadedCoin" className='faded_1'/>
            <img src={fadeCoin_2} alt="fadedCoin2" className='faded_2'/>
            <img src={fadeCoin_3} alt="fadedCoin3" className='faded_3'/>

            <span className='platform'> Our platform is a digitalised improvement to the thrift contribution system. it allows for <br/>
                individual, as well as joint savings. At CoinShare, we're building a global savings infrastructure
            </span>
            <>
                <span className='secure'><img className='imgSecure' src={secure} alt='secure' />
                    </span><span className='secureText'>Secure</span><p className='provide'>We provide high level security for your money.</p>
            </>
            <>
                <span className='trusted'><img className='imgtrusted' src={trusted} alt='trusted' />
                    </span><span className='trustedText'>Trusted</span><p className='trust'>We rely on bank-grade security with all your monies fully insured by NDIC</p>
            </>
            <>
                <span className='speed'><img className='imgspeed' src={speed} alt='speed' />
                    </span><span className='speedText'>Speed</span><p className='openAccText'>Open an account from anywhere in 10 minutes</p>
            </>
            <>
                <span className='support'><img className='imgsupport' src={support} alt='support' />
                    </span><span className='supportText'>Support</span><p className='asupportText'>Open an account from anywhere in 10 minutes</p>
            </>
                <div>
                    <h1 className='rainy'>Don't just save for rainy days, save for everyday</h1>
                    <p className='rainyText'>Become financially free by elevating your savings game. Diversify your savings in a rotating savings group (ajo), and get access to money to meet up early needs.</p>
                </div>
                <div>
                    <h1 className='mission'>Our Mission</h1>
                    <p className='missionText'>CoinShare is a digitalized platform of the (Ajo/Esusu/Adashe) to help millions of Africans save and access credit the better way. We believe that if you can afford something later, you should be able to get it now.</p>
                </div>
                <span className='step'>
                    <h5 className='steps'>GETTING STARTED</h5>
                    <span className='steps_2'>How to start saving with <span style={{color:'#0052FF', position:'absolute',left:'540px'}}><strong>CoinShare</strong></span></span>
                    <span className='stepContainer'>
                        <img src={dash} alt='dash' className='dash1'/>
                        <img src={dash} alt='dash' className='dash2'/>
                        <span className='oOne'>1</span>
                            <span className='stepsText1'>
                                <strong>Register in minutes</strong>
                                <p>Create your free CoinShare <br/>account in minutes.</p>
                            </span>
                        <span className='oTwo'>2</span>
                            <span className='stepsText2'>
                                <strong>Verify your identity</strong>
                                <p>You will need to provide a valid email <br/>address, phone number</p>
                            </span>
                        <span className='oThree'>3</span>
                        <span className='stepsText3'>
                                <strong>Top up your Wallet</strong>
                                <p>Create your free CoinShare<br/> account in minutes.</p>
                            </span>
                        <a href='/' className='createTwo'>Create an account in minutes</a>
                    </span>
                </span>
                
                <span className='mobile'>
                <span className='circle'></span>
                    <im src={phone} alt="Phone"  className='phone'/>
                    <span className='comingSoon'>Coming soon</span>
                    <span className='mobileText'>Be the first to know when we launch our Mobile App </span>
                    <img src={googleApp} alt='google app' className='Join'/><img src={appleApp} alt='apple app' className='Join2'/>
                </span>
        </div>
        </>
    );
};

export default WhyPage;