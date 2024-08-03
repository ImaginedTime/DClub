import React from 'react'
// import Drag from '../../components/Draggable/index'
import Scroll from '../../components/BouncingBall/index'
import Slider from '../../components/Horizontal-slider/index'

const index = () => {
  return (
    <div style={{display:'flex',flexDirection:'column',justifyContent:'center', gap:'10px'}}>
      
        <div style={{display:'flex',justifyContent:'center',alignItems:'center', marginTop:'20px'}}>
            <div style={{maxWidth:'1440px'}}>
              <Scroll />
            </div>
        </div>
        <div style={{marginTop:'50px', height:"100vh"}}>
      <Slider />
      </div>

    </div>
  )
}

export default index