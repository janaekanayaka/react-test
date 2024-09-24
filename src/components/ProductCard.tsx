import { Heart } from 'lucide-react';

interface ProductCardProps {
  image: string;
  title: string;
  description: string;
  price: string;
}

const ProductCard = ({ image, title, description, price }:ProductCardProps) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <div className="relative">
        <img className="w-full" src={image} alt={title} />
        <button className="absolute top-2 left-2 p-2 bg-white rounded-full">
          <Heart size={20} />
        </button>
      </div>
      <div className="text-left">
        <h2 className="font-bold text-xl mb-2 text-gray-800">{title}</h2>
        <p className="text-gray-700 text-base">{description}</p>
        <p className="text-gray-900 font-bold text-sm">{price}</p>
      </div>
      <div className="pb-2 flex justify-start mt-2">
         <button className="bg-blue-900 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded mr-2">
           BUY NOW
           </button>
           <button className="bg-transparent hover:bg-blue-700 text-blue-700 hover:text-white py-1 px-4 border border-blue-900 hover:border-transparent rounded">
           LEARN MORE
        </button>
      </div>
    </div>
  );
};

export default ProductCard;