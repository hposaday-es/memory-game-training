import React from 'react';

import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';

import cardStyles from './imageCard.module.css';

import backRowImage from '../../assets/image/backrow.jpg';
import matchedImage from '../../assets/image/matched.png'



class ImageCard extends React.Component {

    onClick = () => {
        if (!this.props.isMatched) {
            this.props.onClick(this.props.card)
        }
    }
    render() {
        const { frontSrc, isHide, isMatched } = this.props
        
        const backImageSrc = isMatched ? matchedImage : backRowImage
        return (
            <Card
                className={cardStyles.cardContainer}
                onClick={this.onClick}
            >
                <CardMedia
                    className={cardStyles.cardImage}
                    image={isHide ? backImageSrc : frontSrc}
                />
            </Card>
        )
    }
}

export default ImageCard