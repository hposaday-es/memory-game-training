import React from 'react';

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import ImageCard from './../imageCard/imageCard';

import boardStyles from './board.module.css';

import picsum from './../../services/picsum';

import backRowImage from '../../assets/image/backrow.jpg';

class Board extends React.Component {

    state = {
        cardsData: [],
    }

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.getImagesIds()
    }

    getImagesIds = () => {
        picsum.getImages().then(response => {
            const cardsData = response.data.map(image => {
                return {
                    id: image.id,
                    src: image.download_url
                }
            });

            let newCardsData = [];
            const arrayLength = cardsData.length;
            for (let i = 0; i < 10; i++) {
                const randomImage = cardsData[Math.floor(Math.random() * arrayLength)];
                randomImage.isHide = true;
                newCardsData = [...newCardsData, randomImage, randomImage]
            }
            console.log(newCardsData)
            this.setState({
                cardsData: newCardsData
            })
        })
    }

    imageOnClick = (card) => {
        console.log(card, 'card click')

        const currentCardsData = this.state.cardsData

        currentCardsData[card.index].isHide = false

        this.setState({
            cardsData: currentCardsData
        })
    }

    render() {
        return (
            <div className={boardStyles.container}>
                <GridList cellHeight={120} className={boardStyles.grid} cols={5}>
                    {this.state.cardsData.map((card, index) => (
                        <GridListTile
                            onClick={this.imageOnClick.bind(null, {
                                index,
                                card
                            })}
                            key={index}
                            cols={1}
                        >
                            <ImageCard
                                src={card.isHide ? backRowImage : card.src}
                            />
                        </GridListTile>
                    ))}
                </GridList>
            </div>
        )
    }

}

export default Board