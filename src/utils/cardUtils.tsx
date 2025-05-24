import buizel from '@/assets/buizel.png';
import combusken from '@/assets/combusken.png';
import grimer from '@/assets/grimer.png';
import lechonk from '@/assets/lechonk.png';
import magmar from '@/assets/magmar.png';
import magnemite from '@/assets/magnemite.png';
import mankey from '@/assets/mankey.png';
import pikachu from '@/assets/pikachu.png';
import wailmer from '@/assets/wailmer.png';
import woobat from '@/assets/woobat.png';

interface Card {
    name: string;
    image: string;
}

export const cardData: Card[] = [
    { name: 'Buizel', image: buizel },
    { name: 'Combusken', image: combusken },
    { name: 'Grimer', image: grimer },
    { name: 'Lechonk', image: lechonk },
    { name: 'Magmar', image: magmar },
    { name: 'Magnemite', image: magnemite },
    { name: 'Mankey', image: mankey },
    { name: 'Pikachu', image: pikachu },
    { name: 'Wailmer', image: wailmer },
    { name: 'Woobat', image: woobat }
];

export function shuffleArray<T>(array: T[]): T[] {
    return [...array].sort(() => Math.random() - 0.5);
}
