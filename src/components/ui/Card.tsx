import { useEffect, useState } from "react";
import { shuffleArray, cardData } from "@/utils/cardUtils";

interface CardType {
  name: string;
  image: string;
}

export default function Card() {
    const [cards, setCards] = useState<CardType[]>(shuffleArray(cardData));
    const [clickedNames, setClickedNames] = useState<string[]>([]);
    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useState<number>(() => {
        const stored = localStorage.getItem("highScore");
        return stored ? parseInt(stored) : 0;
    })


    useEffect(() => {
        if (score > highScore){
            setHighScore(score);
            localStorage.setItem("highScore", score.toString());
        }
    }, [score, highScore]);

    const handleClick = (name: string) => {
        if(clickedNames.includes(name)){
            alert("You clicked the same card! Game reset.");
            setScore(0);
            setClickedNames([]);
        }else{
            setScore(prev => prev + 1);
            setClickedNames(prev => [...prev, name]);
        }
        
        setCards(shuffleArray(cardData));
    }




    return (   
        <div className="p-4">
            <h1 className="text-3xl font-bold text-center text-yellow-600 mb-6">
                Pokémon Memory Card Game
            </h1>

            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">Score: {score}</h1>
                <h2 className="text-xl text-gray-700">High Score: {highScore}</h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-5 gap-4 p-6">
                {cards.map((card, index) => (
                    <button
                    key={index}
                    onClick={() => handleClick(card.name)}
                    className="bg-white shadow-md rounded-2xl p-4 hover:shadow-lg transition text-left"
                    >
                        <img src={card.image} alt={card.name} className="w-full h-56 object-contain mb-2" />
                    </button>
                ))}
            </div>
        </div>
    )

}

