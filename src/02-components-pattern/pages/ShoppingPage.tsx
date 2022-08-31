import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from "../components";
import "../styles/custom-styles.css";
const product = {
  id: "1",
  title: "Coffe Mug - Card",
  img: "coffee-mug.png",
};
export const ShoppingPage = () => {
  return (
    <div className="bg-dark">
      ShoppingPage
      <ProductCard product={product}>
        <ProductCard.Image className="custom-image" />
        <ProductCard.Title title="Kafe" />
        <ProductCard.Buttons />
      </ProductCard>
      <ProductCard product={product}>
        <ProductImage />
        <ProductTitle title="Kafe" />
        <ProductButtons />
      </ProductCard>
      <ProductCard className="bg-dark" product={product}>
        <ProductImage className="custom-image" />
        <ProductTitle className="text-white text-bald" />
        <ProductButtons className="custom-buttons" />
      </ProductCard>
    </div>
  );
};
