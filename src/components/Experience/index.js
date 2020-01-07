import './index.scss';
import React from 'react';
import Video from '../Video';
import Gallery from '../Gallery';
import {GalleryData} from '../../constants/experience';

function Experience(){
    return(
      <section>
          <div className="exp">
            <div className="container">
                <div className="row col-sm">
                    <div className="col-6 col-xs-12 exp-info">
                        <h2 className="exp-title">Let's <span className="underline-orange">meet</span>, <span className="underline-orange">experience</span> and <span className="underline-orange">share</span></h2>
                        <p class="exp-subtitle">People attend MyScoot experiences to have fun and meet new people who share similar interests and experiences.</p>
                    </div>
                    <div className="col-6 col-xs-12 d-flex justify-content-center video-box">
                        <Video/>
                    </div>
                </div>
                <div className="side-text">
                    <p className="text-vertical">This week at MyScoot</p>
                </div>
            </div>
        </div>
        <Gallery items={GalleryData}/>
      </section>
    )
}
export default Experience