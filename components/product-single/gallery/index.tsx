import { policyProduct } from "pages/product/[pid]";

type GalleryProductType = {
  images: string[];
};

const Gallery = ({ images }: GalleryProductType) => {
  const featImage = images[0];

  return (
    <section className="product-gallery flex">
      <>
        <div className="product-gallery__thumbs">
          {images.map((image) => (
            <div key={image} className="product-gallery__thumb">
              <img src={image} alt="" />
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center gap-10">
          <div className="product-gallery__image">
            <img src={featImage} alt="" />
          </div>
          <div className="flex gap-10">
            {policyProduct.map((item) => (
              <div className="!border-1 !border-color-orange flex flex-col gap-1 md:gap-2 items-center">
                <img
                  src={item.icon}
                  className="md:max-w-10 max-w-18"
                  alt={item.name}
                />
                <div className="text-xs">{item.name}</div>
              </div>
            ))}
          </div>
        </div>
      </>
    </section>
  );
};

export default Gallery;
