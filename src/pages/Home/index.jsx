import React, { useEffect, useState, useRef } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import first from '../../assets/home/image.png';
import videosig from '../../assets/home/significareel.mp4';

const Home = () => {
    const videoContainerRef = useRef(null);
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [buttonVisible, setButtonVisible] = useState(false);
    const [buttonPosition, setButtonPosition] = useState({ top: 0, left: 0 });
    const timeoutRef = useRef(null);

    const handlePlayPause = () => {
        if (isPlaying) {
            videoRef.current.pause();
        } else {
            videoRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    const handleMouseMove = (event) => {
        const rect = videoContainerRef.current.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        setButtonPosition({ top: y, left: x });
        setButtonVisible(true);
        clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => {
            setButtonVisible(false);
        }, 1000); // Hide the button after 2 seconds of inactivity
    };

    useEffect(() => {
        const words = document.querySelectorAll('.word');
        words.forEach((word, index) => {
            word.style.animationDelay = `${index * 0.3}s`; // Adjust delay as needed
        });
    }, []);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div style={{ maxWidth: '1440px', width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
                    <div style={{ width: '55%', fontSize: '27px', padding: '10px' }}>
                        <h1 className='animated-text'>
                            <span className='word'>A</span> <span className='word' style={{ color: '#A0A0A2' }}>place</span> <span className='word'>to</span> <span className='word'>Create,</span> <br /> <span className='word'>Collaborate</span> <span className='word'>and </span> <br /> <span className='word' style={{ color: '#A0A0A2' }}>Elevate</span> <span className='word' style={{ color: '#0cff9a' }}>.</span>
                        </h1>
                    </div>
                    <div style={{ width: '40%' }}>
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
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div style={{ display: 'flex', maxWidth: '1440px', gap: '20px', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px', maxWidth: '325px' }} className="projects">
                        <img style={{ height: '90px', width: '90px', borderRadius: '16px' }} src={first} alt="" />
                        <div>
                            <p style={{ fontSize: '20px', fontWeight: '600' }}>mishmash. Unique e-commerce design for</p>
                            <p style={{ fontSize: '15px' }}>from our project</p>
                        </div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px', maxWidth: '325px' }} className="projects">
                        <img style={{ height: '90px', width: '90px', borderRadius: '16px' }} src='https://a.storyblok.com/f/198185/6400x4800/84df0f7740/heyharper13.jpg/m/0x0/' alt="" />
                        <div>
                            <p style={{ fontSize: '20px', fontWeight: '600' }}>mishmash. Unique e-commerce design for</p>
                            <p style={{ fontSize: '15px' }}>from our project</p>
                        </div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px', maxWidth: '325px' }} className="projects">
                        <img style={{ height: '90px', width: '90px', borderRadius: '16px' }} src='https://a.storyblok.com/f/198185/3840x1920/cb18b919d0/cart-abandnoment-cover.jpg/m/1440x0/' alt="" />
                        <div>
                            <p style={{ fontSize: '20px', fontWeight: '600' }}>mishmash. Unique e-commerce design for</p>
                            <p style={{ fontSize: '15px' }}>from our project</p>
                        </div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px', maxWidth: '325px' }} className="projects">
                        <img style={{ height: '90px', width: '90px', borderRadius: '16px' }} src='https://a.storyblok.com/f/198185/1624x951/1ad385f55a/cart2.jpg/m/0x0/' alt="" />
                        <div>
                            <p style={{ fontSize: '20px', fontWeight: '600' }}>mishmash. Unique e-commerce design for</p>
                            <p style={{ fontSize: '15px' }}>from our project</p>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '40px' }}>
                <div
                    ref={videoContainerRef}
                    onMouseMove={handleMouseMove}
                    style={{
                        position: 'relative',
                        display: 'flex',
                        maxWidth: '1440px',
                        gap: '20px',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        alignItems: 'center',
                        cursor: 'none', // Hide the cursor within the video container
                    }}
                >
                    <video
                        ref={videoRef}
                        onClick={handlePlayPause}
                        src={videosig}
                        muted
                        style={{ display: 'block', maxWidth: '100%', borderRadius: '20px' ,overflow:'hidden'}}
                        poster="https://a.storyblok.com/f/198185/2688x1514/19ebaabf98/new-showreel-cover.jpg/m/0x0/"
                    />
                    {!isPlaying && buttonVisible && (
                        <button
                            onClick={handlePlayPause}
                            style={{
                                position: 'absolute',
                                top: buttonPosition.top,
                                left: buttonPosition.left,
                                transform: 'translate(-50%, -50%)',
                                pointerEvents: 'none', // Make the button follow the cursor without blocking mouse events
                                padding: '10px',
                                fontSize: '18px',
                                fontWeight: '600',
                                width:'150px',
                                backgroundColor: 'rgba(0, 0, 0, 1)',
                                color: 'white',
                                border: "3px solid grey",
                                borderRadius: '15px',
                                cursor: 'pointer',
                                transition: 'opacity 0.3s',
                                opacity: buttonVisible ? 1 : 0, // Fade in/out effect
                            }}
                        >
                            Play showreel
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Home;
