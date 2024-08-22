import PricingCard from './PricingCard';
import { useEffect, useState } from 'react';


const colorClasses = [
  'pink-300', 'red-300', 'green-300', 'blue-300'
];

export default function PricingPanel() {
  const [colorClass, setColorClass] = useState(colorClasses[0]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (index + 1) % colorClasses.length;
      setColorClass(colorClasses[nextIndex]);
      setIndex(nextIndex);
    }, 4000); // Change color every 2 seconds

    return () => clearInterval(interval);
  }, [index]);
  

  return (
    <div className='block justify-between p-12 lg:flex'>

        <PricingCard colorClass={colorClass} />
        <PricingCard colorClass={colorClass} />
        <PricingCard colorClass={colorClass} />

    </div>
  );
}
