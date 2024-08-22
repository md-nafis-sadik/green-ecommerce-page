import './PricingCard.css';
import { GoDotFill } from "react-icons/go";

export default function PricingCard({ colorClass }) {
    return (
      <div className='w-full mx-3 overflow-hidden p-8 border border-gray-300 rounded-lg bg-gray-50 shadow-sm'>
        <div className='text-2xl'>FREE</div>
        <div className='text-sm mt-2'>Basic Plan</div>
        <div className="mt-5">
          <span className='text-[60px]'>$0</span>
          <span>/mo</span>
        </div>
        <div className="mt-4">
          <button
            className={`color-box font-semibold text-sm px-4 p-3 rounded-full w-full bg-${colorClass} shadow-sm`}
          >
            Get started
          </button>
        </div>
        <div className='text-xs mt-2 text-center'> $0 per user / month</div>
        <div className="mt-8 border-t">
          <ul className='font-semibold text-sm my-4'>
            <li className="mb-2 flex justify-between items-center">
              <div>Up to $10k per sales ear</div>
              <div className={`color-box w-2 h-2 bg-${colorClass} rounded-full`}></div>
            </li>
            <li className="mb-2 flex justify-between items-center">
              <div>Unlimited products</div>
              <div className={`color-box w-2 h-2 bg-${colorClass} rounded-full`}></div>
            </li>
            <li className="mb-2 flex justify-between items-center">
              <div>Digital products</div>
              <div className={`color-box w-2 h-2 bg-${colorClass} rounded-full`}></div>
            </li>
            <li className="mb-2 flex justify-between items-center">
              <div>Subscription products</div>
              <div className={`color-box w-2 h-2 bg-${colorClass} rounded-full`}></div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
  