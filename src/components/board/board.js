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
        clicksLimit: 0,
        clickedUid: undefined
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
            //hacer con Object.assign
            const image = JSON.parse(JSON.stringify(selectedImages[i]))
            //const image =  selectedImages[i]
            image.uid = count
            count++

            //hacer con Object.assign
            const imageDuplicate = JSON.parse(JSON.stringify(selectedImages[i]))
            //const imageDuplicate = selectedImages[i]
            imageDuplicate.uid = count
            count++

            cardsArray = [...cardsArray, image, imageDuplicate]
        }

        const shuffledArr = arrayUtils.arrayShuffler(cardsArray)
        console.log(shuffledArr,"shuffledarray")
        this.setState({
            cards: shuffledArr
        })
    }

    imageOnClick = (card) => {
        let { clicksLimit, matchedCards, revealedCards, clickedUid } = this.state

        console.log(clicksLimit)

        if (card.uid !== clickedUid){
            const cardSibling = revealedCards.filter(revealedCard => revealedCard.id === card.id && revealedCard.uid !== card.uid )

            if (clicksLimit < 2) {

                if (clicksLimit === 1) {
                    
                    this.setState({
                        revealedCards: [...this.state.revealedCards, card],
                        clicksLimit: 2,
                        clickedUid: card.id
                    })

                    if (cardSibling.length > 0 ) {
                        console.log('paired')
            
                        setTimeout(() => {
                            this.setState({
                                matchedCards: [...matchedCards, card, revealedCards[0]],
                                revealedCards: [],
                               /*  clicksLimit: 0,
                                clickedUid: undefined */
                            })
                        }, 1200)
                    
                    } else {

                        setTimeout(() => {
                            this.setState({
                                revealedCards: [],
                                clicksLimit: 0,
                                clickedUid: undefined
                            })
                        }, 1200)

                    }

                } else {
                        this.setState({
                            revealedCards: [...this.state.revealedCards, card],
                            clicksLimit: clicksLimit === 1 ? 0 : clicksLimit += 1,
                            clickedUid: card.id
                        })
                }

            } else {
                
                this.setState({
                    revealedCards: [],
                    clicksLimit: clicksLimit === 1 ? 0 : clicksLimit += 1
                })
            }

            }

            this.setState({
                clickedUid: card.uid
            })

        
    }

    render() {

        const { revealedCards, matchedCards } = this.state
        return (
            <div className={boardStyles.container}>
                <GridList cellHeight={120} className={boardStyles.grid} cols={4}>
                    {this.state.cards.map((card, index) => (
                        <Fade 
                            key={card.uid}
                            in={true}
                            timeout={1500}
                        >
                        <GridListTile
                            key={card.uid}
                            cols={1}
                        >
                            <ImageCard
                                key={card.uid}
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