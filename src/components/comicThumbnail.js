import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { charDetails } from '../pages/charDetails/index'
const price = ''

const ComicThumbnail = ({ url, title, thumbnail,price }) => (
    
        


    <React.Fragment>
        <a className="thumbnail wrapper"target="_blank" style={{width:'150%'}}>
            <img className="thumbnail-img" src={thumbnail} alt={thumbnail} />
            <div className="thumbnail-overlay">
                <span className="thumbnail-text">{title} por apenas: <br/> {price}$ <br/>
                    <Link to={{ pathname: '/charDetails', state: { title: title,price: price, thumbnail:thumbnail } }}>Comprar</Link>
                    <br/>
                 </span>
                
            </div>
            
            
        </a>
    </React.Fragment>
);

export default ComicThumbnail;