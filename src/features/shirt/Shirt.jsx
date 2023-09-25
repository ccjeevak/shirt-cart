import { useSearchParams } from "react-router-dom";
import { shirtImages, sizes } from "./shirtUtil";

const Shirt = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedSize = searchParams.get("size")|| "Small";
  const selectedColor = searchParams.get("color")||'red';
  return (
    <section className="flex h-full flex-wrap items-center justify-center">
      <img src={shirtImages[selectedColor]} className="h-40 w-40 mr-8" />
      <div>
        <h1 className="text-3xl mb-5">Find your shirt</h1>
        <div className="mb-1">Size</div>
        {sizes.map((size) => (
          <button
            key={size}
            onClick={() => setSearchParams({ size, color: selectedColor })}
            className={`border 
            ${
              selectedSize === size
                ? `border-blue-700 bg-slate-100`
                : `border-gray-400`
            }   
            border-solid p-2 rounded-md mr-2 hover:bg-slate-100`}
          >
            {size}
          </button>
        ))}
        <div className="mb-1 mt-2">Color</div>
        {Object.keys(shirtImages).map((color) => (
          <button
            key={color}
            onClick={() => setSearchParams({ size: selectedSize, color })}
            className={`capitalize border ${
              selectedColor === color
                ? `border-blue-700 bg-slate-100`
                : `border-gray-400`
            } border-solid p-2 rounded-md mr-2 hover:bg-slate-100`}
          >
            {color}
          </button>
        ))}
      </div>
    </section>
  );
};
export default Shirt;
