import React, { useEffect, useState } from 'react'
import './styles.css';

const index = () => {

    // create a slider value that takes values between 20 to 80

    const [sliderValue, setSliderValue] = useState(25);

    const sliderMin = 25, sliderMax = 85; 

    const handleChangeWidthOfSlider = (e) => {
        let value = e.target.value;

        // tie the value between 20 and 80
        if (value < sliderMin) {
            value = sliderMin;
        } else if (value > sliderMax) {
            value = sliderMax;
        }
        setSliderValue(e.target.value);
    }

    const [sliderWidth, setSliderWidth] = useState();

    useEffect(() => {
        let value = document.getElementsByClassName('width-for-slider')[0].clientWidth;
        console.log(value);

        setSliderWidth(value);
    }, []);

  return (
    <div>
        <div style={{ display: 'flex',justifyContent: 'center' }}>
            <div style={{ maxWidth: '1440px', width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
                <h1 className='animated-text hero-text'  >
                    Time Line<span className='word' style={{ color: '#0cff9a' }}>.</span>
                </h1>
                    
            </div>
        </div>

        {/* create a slider that has full width and can take values between 20-80 and just has a ball that can move forward and backward where it's slider part is invisible */}

        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '40px', transform: 'translateY(1rem)' }}>
            <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginLeft: `${sliderMin - 2.5}%`, marginRight: `${97.5 - sliderMax}%` }}>
                <input type="range" min={sliderMin} max={sliderMax} value={sliderValue} onChange={handleChangeWidthOfSlider} style={{  }} />
            </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{filter: 'grayscale(1)', marginLeft: "-4px"}} className="">
                <div style={{display:'flex',justifyContent:'center', marginTop:'40px',paddingBottom:'20px',borderBottom:'1px solid'}} className="">
                    <div style={{maxWidth:'1440px',width:'100%'}} className="">
                        <div style={{display:'flex', }} className="">
                            <div style={{maxWidth:'200px',width:'100%', fontSize:'24px'}} className="">
                                <p>Autumn</p>
                            </div>
                            <div style={{display:'flex',flexWrap:'wrap',maxWidth:'700px',width:'100%', gap:'10px',justifyContent:'center'}} className="">
                                <div style={{position: 'relative', display: 'inline-block'}} className="scribble purple">
                                    <img style={{height: '80px'}} src="https://a.storyblok.com/f/198185/166x54/988ff09003/purple1-before-dark.svg/m/0x0/" alt="" />
                                    <p className='lable' style={{position: 'absolute',top: '50%',left: '50%',transform: 'translate(-50%, -50%)',margin: 0,color: 'white', /* Adjust text color as needed *//* Adjust font size as needed */textAlign: 'center' /* Center text if it spans multiple lines */
                                    }}>
                                        Discovery
                                    </p>
                                </div>
                                <div style={{position: 'relative', display: 'inline-block'}} className="scribble purple">
                                    <img style={{height: '80px'}} src="https://a.storyblok.com/f/198185/166x54/988ff09003/purple1-before-dark.svg/m/0x0/" alt="" />
                                    <p className='lable'  style={{position: 'absolute',top: '50%',left: '50%',transform: 'translate(-50%, -50%)',margin: 0,color: 'white', /* Adjust text color as needed */ /* Adjust font size as needed */textAlign: 'center' /* Center text if it spans multiple lines */
                                    }}>
                                        Definition
                                    </p>
                                </div>
                                <div style={{position: 'relative', display: 'inline-block'}} className="scribble purple">
                                    <img style={{height: '80px'}} src="https://a.storyblok.com/f/198185/166x54/988ff09003/purple1-before-dark.svg/m/0x0/" alt="" />
                                    <p className='lable'  style={{position: 'absolute',top: '50%',left: '50%',transform: 'translate(-50%, -50%)',margin: 0,color: 'white', /* Adjust text color as needed *//* Adjust font size as needed */textAlign: 'center' /* Center text if it spans multiple lines */
                                    }}>
                                        UI/UX
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div style={{display:'flex',justifyContent:'center', marginTop:'40px',paddingBottom:'40px',borderBottom:'1px solid'}} className="">
                    <div style={{maxWidth:'1440px',width:'100%'}} className="">
                        <div style={{display:'flex', }} className="">
                            <div style={{maxWidth:'200px',width:'100%', fontSize:'24px'}} className="">
                                <p>Spring</p>
                            </div>
                            <div style={{maxWidth:'200px', width:'100%'}} className=""></div>   
                            <div style={{display:'flex',alignItems:'center',flexWrap:'wrap',maxWidth:'800px',width:'100%', gap:'10px',justifyContent:'center'}} className="">
                                <div style={{position: 'relative', display: 'inline-block'}} className="scribble purple">
                                    <img style={{height: '80px'}} src="https://a.storyblok.com/f/198185/133x56/daf3a41938/orange1-before-dark.svg/m/0x0/" alt="" />
                                    <p className='lable'  style={{position: 'absolute',top: '50%',left: '50%',transform: 'translate(-50%, -50%)',margin: 0,color: 'white', /* Adjust text color as needed */ /* Adjust font size as needed */textAlign: 'center' /* Center text if it spans multiple lines */
                                    }}>
                                        Wire frame
                                    </p>
                                </div>
                                <div style={{position: 'relative', display: 'inline-block'}} className="scribble purple">
                                    <img style={{height: '80px'}} src="https://a.storyblok.com/f/198185/133x56/daf3a41938/orange1-before-dark.svg/m/0x0/" alt="" />
                                    <p className='lable'  style={{position: 'absolute',top: '50%',left: '50%',transform: 'translate(-50%, -50%)',margin: 0,color: 'white', /* Adjust text color as needed */ /* Adjust font size as needed */textAlign: 'center' /* Center text if it spans multiple lines */
                                    }}>
                                        User Testing
                                    </p>
                                </div>
                                <div style={{position: 'relative', display: 'inline-block'}} className="scribble purple">
                                    <img style={{height: '80px'}} src="https://a.storyblok.com/f/198185/166x54/988ff09003/purple1-before-dark.svg/m/0x0/" alt="" />
                                    <p className='lable'  style={{position: 'absolute',top: '50%',left: '50%',transform: 'translate(-50%, -50%)',margin: 0,color: 'white', /* Adjust text color as needed *//* Adjust font size as needed */textAlign: 'center' /* Center text if it spans multiple lines */
                                    }}>
                                        Look and Feel
                                    </p>
                                </div>
                                <div  style={{position: 'relative', display: 'inline-block'}} className="scribble purple">
                                    <img style={{height: '80px'}} src="https://a.storyblok.com/f/198185/133x56/daf3a41938/orange1-before-dark.svg/m/0x0/    " alt="" />
                                    <p className='lable'  style={{position: 'absolute',top: '50%',left: '50%',transform: 'translate(-50%, -50%)',margin: 0,color: 'white', /* Adjust text color as needed *//* Adjust font size as needed */textAlign: 'center' /* Center text if it spans multiple lines */
                                    }}>
                                        Final Design
                                    </p>
                                </div>
                                <div style={{position: 'relative', display: 'inline-block'}} className="scribble purple">
                                    <img style={{height: '80px'}} src="https://a.storyblok.com/f/198185/133x56/daf3a41938/orange1-before-dark.svg/m/0x0/" alt="" />
                                    <p className='lable'  style={{position: 'absolute',top: '50%',left: '50%',transform: 'translate(-50%, -50%)',margin: 0,color: 'white', /* Adjust text color as needed */ /* Adjust font size as needed */textAlign: 'center' /* Center text if it spans multiple lines */
                                    }}>
                                        User Testing
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div style={{display:'flex',justifyContent:'center', marginTop:'40px',paddingBottom:'40px',borderBottom:'1px solid'}} className="">
                    <div style={{maxWidth:'1440px',width:'100%'}} className="">
                        <div style={{display:'flex', }} className="">
                            <div style={{maxWidth:'200px',width:'100%', fontSize:'24px'}} className="">
                                <p>Summer</p>
                            </div>
                            <div style={{maxWidth:'100px', width:'100%'}} className=""></div>
                            <div style={{display:'flex',alignItems:'center',flexWrap:'wrap', width:'100%', gap:'10px',justifyContent:'center'}}>
                                <div style={{position: 'relative', display: 'inline-block'}} className="scribble purple width-for-slider">
                                    <img style={{height: '80px'}} src="https://a.storyblok.com/f/198185/133x56/daf3a41938/orange1-before-dark.svg/m/0x0/" alt="" />
                                    <p className='lable'  style={{position: 'absolute',top: '50%',left: '50%',transform: 'translate(-50%, -50%)',margin: 0,color: 'white', /* Adjust text color as needed */ /* Adjust font size as needed */textAlign: 'center' /* Center text if it spans multiple lines */
                                    }}>
                                        Wire frame
                                    </p>
                                </div>
                                <div style={{maxWidth:'200px', width:'100%'}} className=""></div>
                                <div style={{position: 'relative', display: 'inline-block'}} className="scribble purple">
                                    <img style={{height: '80px'}} src="https://a.storyblok.com/f/198185/166x54/988ff09003/purple1-before-dark.svg/m/0x0/" alt="" />
                                    <p className='lable'  style={{position: 'absolute',top: '50%',left: '50%',transform: 'translate(-50%, -50%)',margin: 0,color: 'white', /* Adjust text color as needed */ /* Adjust font size as needed */textAlign: 'center' /* Center text if it spans multiple lines */
                                    }}>
                                        Look and Feel
                                    </p>
                                </div>
                                <div style={{position: 'relative', display: 'inline-block'}} className="scribble purple">
                                    <img style={{height: '80px'}} src="https://a.storyblok.com/f/198185/172x57/9ffee3400d/blue1-before-dark.svg/m/0x0/ " alt="" />
                                    <p className='lable'  style={{position: 'absolute',top: '50%',left: '50%',transform: 'translate(-50%, -50%)',margin: 0,color: 'white', /* Adjust text color as needed *//* Adjust font size as needed */textAlign: 'center' /* Center text if it spans multiple lines */
                                    }}>
                                        Final Design
                                    </p>
                                </div>
                                

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{position:'absolute', width: `${100 - sliderValue}%`, marginLeft: `${sliderValue}%`, overflow: 'hidden', transform: 'rotateY(180deg)', borderRight: '3px solid white'}} className="">
                <div style={{display:'flex',justifyContent:'center', marginTop:'40px',paddingBottom:'20px',borderBottom:'1px solid', width: 'calc(100vw - 3px)', transform: 'rotateY(-180deg)', marginLeft: '0.4rem'}} className="">
                    <div style={{maxWidth:'1440px',width:'100%'}} className="">
                        <div style={{display:'flex', }} className="">
                            <div style={{maxWidth:'200px',width:'100%', fontSize:'24px'}} className="">
                                <p>Autum</p>
                            </div>
                            <div style={{display:'flex',flexWrap:'wrap',maxWidth:'700px',width:'100%', gap:'10px',justifyContent:'center'}} className="">
                                <div style={{position: 'relative', display: 'inline-block'}} className="scribble purple">
                                    <img style={{height: '80px'}} src="https://a.storyblok.com/f/198185/166x54/988ff09003/purple1-before-dark.svg/m/0x0/" alt="" />
                                    <p className='lable' style={{position: 'absolute',top: '50%',left: '50%',transform: 'translate(-50%, -50%)',margin: 0,color: 'white', /* Adjust text color as needed *//* Adjust font size as needed */textAlign: 'center' /* Center text if it spans multiple lines */
                                    }}>
                                        Discovery
                                    </p>
                                </div>
                                <div style={{position: 'relative', display: 'inline-block'}} className="scribble purple">
                                    <img style={{height: '80px'}} src="https://a.storyblok.com/f/198185/166x54/988ff09003/purple1-before-dark.svg/m/0x0/" alt="" />
                                    <p className='lable'  style={{position: 'absolute',top: '50%',left: '50%',transform: 'translate(-50%, -50%)',margin: 0,color: 'white', /* Adjust text color as needed */ /* Adjust font size as needed */textAlign: 'center' /* Center text if it spans multiple lines */
                                    }}>
                                        Definition
                                    </p>
                                </div>
                                <div style={{position: 'relative', display: 'inline-block'}} className="scribble purple">
                                    <img style={{height: '80px'}} src="https://a.storyblok.com/f/198185/166x54/988ff09003/purple1-before-dark.svg/m/0x0/" alt="" />
                                    <p className='lable'  style={{position: 'absolute',top: '50%',left: '50%',transform: 'translate(-50%, -50%)',margin: 0,color: 'white', /* Adjust text color as needed *//* Adjust font size as needed */textAlign: 'center' /* Center text if it spans multiple lines */
                                    }}>
                                        UI/UX
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div style={{display:'flex',justifyContent:'center', marginTop:'40px',paddingBottom:'40px',borderBottom:'1px solid', width: 'calc(100vw - 3px)', transform: 'rotateY(-180deg)', marginLeft: '0.4rem'}} className="">
                    <div style={{maxWidth:'1440px',width:'100%'}} className="">
                        <div style={{display:'flex', }} className="">
                            <div style={{maxWidth:'200px',width:'100%', fontSize:'24px'}} className="">
                                <p>Spring</p>
                            </div>
                            <div style={{maxWidth:'200px', width:'100%'}} className=""></div>   
                            <div style={{display:'flex',alignItems:'center',flexWrap:'wrap',maxWidth:'800px',width:'100% ', gap:'10px',justifyContent:'center'}} className="">
                                <div style={{position: 'relative', display: 'inline-block'}} className="scribble purple">
                                    <img style={{height: '80px'}} src="https://a.storyblok.com/f/198185/133x56/daf3a41938/orange1-before-dark.svg/m/0x0/" alt="" />
                                    <p className='lable'  style={{position: 'absolute',top: '50%',left: '50%',transform: 'translate(-50%, -50%)',margin: 0,color: 'white', /* Adjust text color as needed */ /* Adjust font size as needed */textAlign: 'center' /* Center text if it spans multiple lines */
                                    }}>
                                        Wire frame
                                    </p>
                                </div>
                                <div style={{position: 'relative', display: 'inline-block'}} className="scribble purple">
                                    <img style={{height: '80px'}} src="https://a.storyblok.com/f/198185/133x56/daf3a41938/orange1-before-dark.svg/m/0x0/" alt="" />
                                    <p className='lable'  style={{position: 'absolute',top: '50%',left: '50%',transform: 'translate(-50%, -50%)',margin: 0,color: 'white', /* Adjust text color as needed */ /* Adjust font size as needed */textAlign: 'center' /* Center text if it spans multiple lines */
                                    }}>
                                        User Testing
                                    </p>
                                </div>
                                <div style={{position: 'relative', display: 'inline-block'}} className="scribble purple">
                                    <img style={{height: '80px'}} src="https://a.storyblok.com/f/198185/166x54/988ff09003/purple1-before-dark.svg/m/0x0/" alt="" />
                                    <p className='lable'  style={{position: 'absolute',top: '50%',left: '50%',transform: 'translate(-50%, -50%)',margin: 0,color: 'white', /* Adjust text color as needed *//* Adjust font size as needed */textAlign: 'center' /* Center text if it spans multiple lines */
                                    }}>
                                        Look and Feel
                                    </p>
                                </div>
                                <div  style={{position: 'relative', display: 'inline-block'}} className="scribble purple">
                                    <img style={{height: '80px'}} src="https://a.storyblok.com/f/198185/133x56/daf3a41938/orange1-before-dark.svg/m/0x0/    " alt="" />
                                    <p className='lable'  style={{position: 'absolute',top: '50%',left: '50%',transform: 'translate(-50%, -50%)',margin: 0,color: 'white', /* Adjust text color as needed *//* Adjust font size as needed */textAlign: 'center' /* Center text if it spans multiple lines */
                                    }}>
                                        Final Design
                                    </p>
                                </div>
                                <div style={{position: 'relative', display: 'inline-block'}} className="scribble purple">
                                    <img style={{height: '80px'}} src="https://a.storyblok.com/f/198185/133x56/daf3a41938/orange1-before-dark.svg/m/0x0/" alt="" />
                                    <p className='lable'  style={{position: 'absolute',top: '50%',left: '50%',transform: 'translate(-50%, -50%)',margin: 0,color: 'white', /* Adjust text color as needed */ /* Adjust font size as needed */textAlign: 'center' /* Center text if it spans multiple lines */
                                    }}>
                                        User Testing
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div style={{display:'flex',justifyContent:'center', marginTop:'40px',paddingBottom:'40px',borderBottom:'1px solid', width: 'calc(100vw - 3px)', transform: 'rotateY(-180deg)', marginLeft: '0.4rem'}} className="">
                    <div style={{maxWidth:'1440px',width:'100%'}} className="">
                        <div style={{display:'flex', }} className="">
                            <div style={{maxWidth:'200px',width:'100%', fontSize:'24px'}} className="">
                                <p>Summer</p>
                            </div>
                            <div style={{maxWidth:'100px', width:'100%'}} className=""></div>
                            <div style={{display:'flex',alignItems:'center',flexWrap:'wrap',width:'100% ', gap:'10px',justifyContent:'center'}} className="">
                                <div style={{position: 'relative', display: 'inline-block'}} className="scribble purple">
                                    <img style={{height: '80px'}} src="https://a.storyblok.com/f/198185/133x56/daf3a41938/orange1-before-dark.svg/m/0x0/" alt="" />
                                    <p className='lable'  style={{position: 'absolute',top: '50%',left: '50%',transform: 'translate(-50%, -50%)',margin: 0,color: 'white', /* Adjust text color as needed */ /* Adjust font size as needed */textAlign: 'center' /* Center text if it spans multiple lines */
                                    }}>
                                        Wire frame
                                    </p>
                                </div>
                                <div style={{maxWidth:'200px', width:'100%'}} className=""></div>
                                <div style={{position: 'relative', display: 'inline-block'}} className="scribble purple">
                                    <img style={{height: '80px'}} src="https://a.storyblok.com/f/198185/166x54/988ff09003/purple1-before-dark.svg/m/0x0/" alt="" />
                                    <p className='lable'  style={{position: 'absolute',top: '50%',left: '50%',transform: 'translate(-50%, -50%)',margin: 0,color: 'white', /* Adjust text color as needed */ /* Adjust font size as needed */textAlign: 'center' /* Center text if it spans multiple lines */
                                    }}>
                                        Look and Feel
                                    </p>
                                </div>
                                <div style={{position: 'relative', display: 'inline-block'}} className="scribble purple">
                                    <img style={{height: '80px'}} src="https://a.storyblok.com/f/198185/172x57/9ffee3400d/blue1-before-dark.svg/m/0x0/ " alt="" />
                                    <p className='lable'  style={{position: 'absolute',top: '50%',left: '50%',transform: 'translate(-50%, -50%)',margin: 0,color: 'white', /* Adjust text color as needed *//* Adjust font size as needed */textAlign: 'center' /* Center text if it spans multiple lines */
                                    }}>
                                        Final Design
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default index