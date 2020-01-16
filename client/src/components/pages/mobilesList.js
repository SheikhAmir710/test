import React, { Component } from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import  {Carousel}  from "react-responsive-carousel";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";
import './styles/carousel.css'
import {getMobiles} from '../../redux/action/mobilesAction';

import MobileItem from './mobileItem';



class MobilesList extends Component{
  componentDidMount(){
    this.props.getMobiles()
  }
  render(){
    const mobilesList = this.props.mobiles.map(function(mobilesArr){
      return(
        <div className='col l4 xs12 s12 m4' key={mobilesArr._id}>
          <MobileItem
                _id= {mobilesArr._id}
                model={mobilesArr.model}
                weight={mobilesArr.weight}
                os={mobilesArr.os}
                internalmemory={mobilesArr.internalmemory}
                ram={mobilesArr.ram}
                camera={mobilesArr.camera}
                battery={mobilesArr.battery}
                color={mobilesArr.color}
                price={mobilesArr.price}/>
        </div>
            )
    })
    return(
        <div>
<div className='row'>
<Carousel showThumbs={false} infiniteLoop={true} autoPlay={true}>
<div>
            <img src="https://icdn2.digitaltrends.com/image/digitaltrends/galaxy-s10-plus-review-feat.jpg" alt="mobile" />
            <p className="legend">Samsung</p>
            </div>
            <div>
            <img src="https://tekshanghai.com/wp-content/uploads/2019/09/iPhone11_pro_3.jpg" alt="mobile"/>
                    <p className="legend">Apple</p>
            </div>
            <div>
            <img src="https://cdn.vox-cdn.com/thumbor/nWjiPR-hSCy1_WXvFxr6pAjZYYY=/0x0:2040x1360/1200x800/filters:focal(857x517:1183x843)/cdn.vox-cdn.com/uploads/chorus_image/image/61520647/jbareham_180424_2499_0007.0.jpg"alt="mobile" />
            <p className="legend">Apple</p>
            </div>
            <div>
            <img src="https://www.mobilemaya.co/wp-content/uploads/2019/12/Huawei-Nova-6-SE.jpg"alt="mobile"/>
                    <p className="legend">Huawai</p>

            </div>
            <div>
            <img src="https://images.wallpaperscraft.com/image/lg_mobile_phones_brand_communications_26175_1280x1024.jpg"alt="mobile" />

                    <p className="legend">LG</p>
            </div>
            <div>
            <img src="https://www.pakmobizone.pk/wp-content/uploads/2019/03/Vivo-V15-2.png" alt="mobile"/>
                    <p className="legend">VIVO</p>
            </div>
            <div>
            <img src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/201908/Vivo_S1_main-770x433.png?cFLH87EIFf5yfYHLDGzj8i3hks_mibnv" alt="mobile"/>
                    <p className="legend">VIVO</p>
            </div>
            <div>
            <img src="https://www.androidpolice.com/wp-content/uploads/2019/12/Every-other-OnePlus-phone.jpg" alt="mobile"/>
                    <p className="legend">Oneplus</p>
            </div>


          </Carousel>
</div>
          {/* <div className='row'>
            <Cart />
          </div> */}
          <div className='row' style={{marginTop:'15px'}}>
              {mobilesList}
          </div>
        </div>
    )
  }
}
function mapStateToProps(state){
  return{
    mobiles: state.mobiles.mobiles,

  }
}
function mapDispatchToProps(dispatch){
  return bindActionCreators({
    getMobiles:getMobiles
  }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(MobilesList);
