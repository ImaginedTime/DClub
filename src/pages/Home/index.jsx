import React , {useEffect,useState,useRef} from 'react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import first from '../../assets/home/image.png'
import videosig from '../../assets/home/significareel.mp4'

const home = () => {
    const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

    useEffect(() => {
        const words = document.querySelectorAll('.word');
        words.forEach((word, index) => {
          word.style.animationDelay = `${index * 0.3}s`; // Adjust delay as needed
        });
      }, []);
      
  return (
    <div style={{display:'flex',flexDirection:'column',justifyContent:'center'}}>
        <div style={{display:'flex',justifyContent:'center'}}>
            <div style={{maxWidth:'1440px',width:'100%',display:'flex',justifyContent:'space-between',alignItems:'center', flexWrap:'wrap'}}>
                <div style={{width:'55%', fontSize:'27px', padding:'10px'}}>
                    <h1 className='animated-text'>
                    <span className='word' >A</span> <span className='word' style={{color:'#A0A0A2'}}>place</span> <span className='word'>to</span> <span className='word'>Create,</span> <br /> <span className='word'>Collaborate</span> <span className='word'>and </span> <br /> <span className='word' style={{color:'#A0A0A2'}}>Elevate</span> <span className='word' style={{color:'#0cff9a'}}>.</span>
                    </h1>
                </div>
                <div style={{width:'40%'}}>
                    <DotLottieReact
                        src="https://lottie.host/7756a85b-8ebe-49be-9ac1-fc810b1025df/16sP53ioBq.lottie" 
                        background="#FFFFFF" 
                        speed="1" 
                        style={{ width: "600px", height: "600px" }} 
                        loop 
                        controls 
                        autoplay 
                        direction="1" 
                        mode="normal"
                        
                    />
                </div>
    
            </div>
        </div>
        <div style={{display:'flex',justifyContent:'center',alignItems:'center'}} className="">
            <div style={{display:'flex',maxWidth:'1440px',gap:'20px',flexWrap:'wrap', justifyContent:'center',alignItems:'center'}} className="">
                <div style={{display:'flex', justifyContent:'center',alignItems:'center',gap:'10px',maxWidth:'325px'}} className="projects">
                    <img style={{height:'90px',width:'90px',borderRadius:'16px'}} src={first} alt="" />
                    <div  className="">
                    <p style={{fontSize:'20px',fontWeight:'600'}}>mishmash. Unique e-commerce design for</p>
                    <p style={{fontSize:'15px'}}>from our project</p>
                    </div>
                </div>
                <div style={{display:'flex', justifyContent:'center',alignItems:'center',gap:'10px',maxWidth:'325px'}} className="projects">
                    <img style={{height:'90px',width:'90px',borderRadius:'16px'}} src='https://a.storyblok.com/f/198185/6400x4800/84df0f7740/heyharper13.jpg/m/0x0/' alt="" />
                    <div className="">
                    <p style={{fontSize:'20px',fontWeight:'600'}}>mishmash. Unique e-commerce design for</p>
                    <p style={{fontSize:'15px'}}>from our project</p>
                    </div>
                </div>
                <div style={{display:'flex', justifyContent:'center',alignItems:'center',gap:'10px',maxWidth:'325px'}} className="projects">
                    <img style={{height:'90px',width:'90px',borderRadius:'16px'}} src='https://a.storyblok.com/f/198185/3840x1920/cb18b919d0/cart-abandnoment-cover.jpg/m/1440x0/' alt="" />
                    <div className="">
                    <p style={{fontSize:'20px',fontWeight:'600'}}>mishmash. Unique e-commerce design for</p>
                    <p style={{fontSize:'15px'}}>from our project</p>
                    </div>
                </div>
                <div style={{display:'flex', justifyContent:'center',alignItems:'center',gap:'10px',maxWidth:'325px'}} className="projects">
                    <img style={{height:'90px',width:'90px',borderRadius:'16px'}} src='https://a.storyblok.com/f/198185/1624x951/1ad385f55a/cart2.jpg/m/0x0/' alt="" />
                    <div className="">
                    <p style={{fontSize:'20px',fontWeight:'600'}}>mishmash. Unique e-commerce design for</p>
                    <p style={{fontSize:'15px'}}>from our project</p>
                    </div>
                </div>
            
            </div>
        </div>
        <div style={{display:'flex',justifyContent:'center',alignItems:'center', margin:'40px'}}  className="">
            <div style={{position:'relative', display:'flex',maxWidth:'1440px',gap:'20px',flexWrap:'wrap', justifyContent:'center',alignItems:'center'}} className="">
            <video ref={videoRef}  onClick={handlePlayPause} src={videosig}  muted style={{ maxWidth: '100%',borderRadius:'20px' }} poster="https://a.storyblok.com/f/198185/2688x1514/19ebaabf98/new-showreel-cover.jpg/m/0x0/"/>
            {!isPlaying && (
          <button
            onClick={handlePlayPause}
            style={{
              position: 'absolute',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
              padding: '10px',
              fontSize: '18px',
              fontWeight: '600',
              backgroundColor: 'rgba(0, 0, 0, 1)',
              color: 'white',
              border: "3px solid grey",
              borderRadius: '15px',
              cursor: 'pointer',
            }}
          >
            Play showreel
          </button>
        )}
                
            </div>

        </div>
        

    </div>
  )
}

export default home