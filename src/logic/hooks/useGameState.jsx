import { useState } from 'react'
import currentPaintingData from '../../data/StarryNight.json'

function useGameState() {

    const [gameState, setGameState] = useState(
        () => {
            return currentPaintingData.elements.map(element => (
                {
                    name: element.name,
                    progress: 0,
                    finalStep: element.steps.length - 1
                }
            ))
        });

            return { gameState, setGameState };

}



export default useGameState