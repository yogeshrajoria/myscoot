import './index.scss';
import React from 'react';
import {MosaicData} from '../../constants/mosaic'

function Mosaic(){
    return(
        <div className="mosaic row">
            <figure className={`mosaic_item mosaic_item-0 mos-col-1`}>
                <img src={MosaicData[0].imgURL} alt={MosaicData[0].title} className="mosaic_img"/>
                <p className="font-24">{MosaicData[0].title}<span className="explore-more"></span></p>
            </figure>
            <div className="col mos-col-2">
                <figure className={`mosaic_item mosaic_item-1`}>
                    <img src={MosaicData[1].imgURL} alt={MosaicData[1].title} className="mosaic_img"/>
                    <p className="font-24">{MosaicData[1].title}<span className="explore-more"></span></p>
                </figure>
                <div className="row mt-10">
                    <figure className={`mosaic_item mosaic_item-2`}>
                        <img src={MosaicData[2].imgURL} alt={MosaicData[2].title} className="mosaic_img"/>
                        <p>{MosaicData[2].title}<span className="explore-more small"></span></p>
                    </figure>
                    <figure className={`mosaic_item mosaic_item-3`}>
                        <img src={MosaicData[3].imgURL} alt={MosaicData[3].title} className="mosaic_img"/>
                        <p>{MosaicData[3].title}<span className="explore-more small"></span></p>
                    </figure>
                </div>
            </div>
            <div className="col mos-col-3">
                <div className="row">
                    <figure className={`mosaic_item mosaic_item-4`}>
                        <img src={MosaicData[4].imgURL} alt={MosaicData[4].title} className="mosaic_img"/>
                        <p>{MosaicData[4].title}<span className="explore-more small"></span></p>
                    </figure>
                    <figure className={`mosaic_item mosaic_item-5`}>
                        <img src={MosaicData[5].imgURL} alt={MosaicData[5].title} className="mosaic_img"/>
                        <p>{MosaicData[5].title}<span className="explore-more small"></span></p>
                    </figure>
                </div>
                <div className="row">
                    <figure className={`mosaic_item mosaic_item-6 mt-10`}>
                        <img src={MosaicData[6].imgURL} alt={MosaicData[6].title} className="mosaic_img"/>
                        <p>{MosaicData[6].title}<span className="explore-more small"></span></p>
                    </figure>
                    <figure className={`mosaic_item mosaic_item-7 mt-10`}>
                        <img src={MosaicData[7].imgURL} alt={MosaicData[7].title} className="mosaic_img"/>
                        <p>{MosaicData[7].title}<span className="explore-more small"></span></p>
                    </figure>
                </div>
            </div>
        </div>
    )
}
export default Mosaic;