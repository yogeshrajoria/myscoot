import './index.scss';
import React from 'react';

function Gallery(props){
  let itemList = props.items.map((item, index) => {
    return <li className="gallery-item row" key={index}>
            <img src={item.imgURL} alt={item.title}/>
            <div className="gallery-title">{item.title}</div>
          </li> 
  })
    return(
      <section>
        <ul className="row gallery container col-xs">
          {itemList}
        </ul>
      </section>
    )
}
export default Gallery