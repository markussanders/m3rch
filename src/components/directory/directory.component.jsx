import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

export default class Directory extends React.Component {
    constructor() {
        super();
        this.state = {
            sections: [{
                    title: 'hats',
                    imageUrl: 'https://images.unsplash.com/photo-1523380744952-b7e00e6e2ffa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
                    id: 1,
                    linkUrl: 'shop/hats'
                },
                {
                    title: 'shirts',
                    imageUrl: 'https://images.unsplash.com/photo-1416339698674-4f118dd3388b?ixlib=rb-1.2.1&auto=format&fit=crop&w=976&q=80',
                    id: 2,
                    linkUrl: 'shop/shirts'
                },
                {
                    title: 'shoes',
                    imageUrl: 'https://images.unsplash.com/photo-1511318316897-47dc82cd9ebb?ixlib=rb-1.2.1&auto=format&fit=crop&w=2079&q=80',
                    id: 3,
                    linkUrl: 'shop/shoes'
                },
                {
                    title: 'womens',
                    imageUrl: 'https://images.unsplash.com/photo-1552334543-626718ad6cfb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80',
                    size: 'large',
                    id: 4,
                    linkUrl: 'shop/womens'
                },
                {
                    title: 'mens',
                    imageUrl: 'https://images.unsplash.com/photo-1536401737436-057a59a36cc5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80',
                    size: 'large',
                    id: 5,
                    linkUrl: 'shop/mens'
                }
            ],

        };
        
    }

    render() {
        return (
            <div className="directory-menu">
                {
                    this.state.sections.map(({id, ...otherSectionProps}) => (
                        <MenuItem key={id} {...otherSectionProps} />
                    ))
                }
            </div>
        )
    }
}