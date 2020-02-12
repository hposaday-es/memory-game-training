import React from 'react';

import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';

import cardStyles from './imageCard.module.css';



class ImageCard extends React.Component {

    render() {
        const { src } = this.props
        return (
            <Card
                className={cardStyles.cardContainer}
            >
                <CardMedia
                    className={cardStyles.cardImage}
                    image={src}
                />
            </Card>
        )
    }
}

export default ImageCard