import React from 'react';

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import ImageCard from './../imageCard/imageCard';
import Fade from '@material-ui/core/Fade';

import boardStyles from './board.module.css';

import arrayUtils from './../../helpers/arrayUtils'
import picsum from './../../services/picsum';


class Board extends React.Component {

    state = {
        revealedCards: [],
        cards: [],
        matchedCards: [],
        clicksLimit: 0
    }

    constructor(props) {
        super(props)
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

            this.createCardArray(cardsData)
        })
    }

    createCardArray = (imageArray) => {
        const newImageArray = [...imageArray];

        let selectedImages = []

        while (selectedImages.length < 8) {
            const randomIndex = Math.floor(Math.random() * newImageArray.length)
            const randomImage = new Object(newImageArray[randomIndex])

            if (!selectedImages.includes(randomImage)) {
                selectedImages = [...selectedImages, randomImage]
            }

        }

        let cardsArray = [];
        let count = 0;
        for (let i = 0; i < selectedImages.length; i++) {
            const image = JSON.parse(JSON.stringify(selectedImages[i]))
            //const image =  selectedImages[i]
            image.uid = count
            count++

            const imageDuplicate = JSON.parse(JSON.stringify(selectedImages[i]))
            //const imageDuplicate = selectedImages[i]
            imageDuplicate.uid = count
            count++

            cardsArray = [...cardsArray, image, imageDuplicate]
        }

        const shuffledArr = arrayUtils.arrayShuffler(cardsArray)
        console.log(shuffledArr,"shuffledarray")
        this.setState({
            cards: cardsArray
        })
    }

    imageOnClick = (card) => {
        let { clicksLimit, matchedCards, revealedCards, } = this.state


        if (clicksLimit < 2) {

            if (clicksLimit === 1) {
                this.setState({
                    revealedCards: [...this.state.revealedCards, card],
                    clicksLimit: 0
                })

                if (revealedCards.filter(revealedCard => revealedCard.src === card.src).length > 0) {

                    setTimeout(() => {
                        this.setState({
                            matchedCards: [...matchedCards, card, revealedCards[0]],
                            revealedCards: [],
                            clicksLimit: 0
                        })
                    }, 700)
                   
                } else {

                    setTimeout(() => {
                        this.setState({
                            revealedCards: [],
                            clicksLimit: 0
                        })
                    }, 700)

                }

            } else {
                this.setState({
                    revealedCards: [...this.state.revealedCards, card],
                    clicksLimit: clicksLimit + 1
                })
            }



        } else {
            this.setState({
                revealedCards: [],
                clicksLimit: 0
            })
        }

    }

    render() {

        const { revealedCards, matchedCards } = this.state
        return (
            <div className={boardStyles.container}>
                <GridList cellHeight={120} className={boardStyles.grid} cols={4}>
                    {this.state.cards.map((card, index) => (
                        <Fade 
                            in={true}
                            timeout={1500}
                        >
                        <GridListTile
                            key={index}
                            cols={1}
                        >
                            <ImageCard
                                card={card}
                                frontSrc={card.src}
                                onClick={this.imageOnClick}
                                isHide={!revealedCards.includes(card)}
                                isMatched={matchedCards.includes(card)}
                            //isHide={false}
                            />
                        </GridListTile>
                        </Fade>
                    ))}

                    />
                </GridList>
            </div>
        )
    }

}

export default Board