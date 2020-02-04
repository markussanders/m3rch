import React from 'react';

import CollectionItem from '../collection-item/collection-item.component.jsx';

import './collection-preview.styles.scss';

const CollectionPreview = ({ title, items }) => (
    <div className="collection-preview" >
        <h1 className="title">{title.toUpperCase()}</h1>
        <div className="preview">
            {
                items // potential lag in performance as functions are called each time component renders
                    .filter((item, idx) => idx < 4)
                    .map((item) => (
                        <CollectionItem key={item.id}  item={item}/>
                    ))
            }
        </div>
    </div>
)


export default CollectionPreview;