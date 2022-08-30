import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from "../components";

const product = {
  id: "1",
  title: "Coffe Mug - Card",
  img: "coffee-mug.png",
};
export const ShoppingPage = () => {
  return (
    <div>
      ShoppingPage
      <ProductCard product={product}>
        <ProductCard.Image />
        <ProductCard.Title title="Kafe" />
        <ProductCard.Buttons />
      </ProductCard>
      <ProductCard product={product}>
        <ProductImage />
        <ProductTitle title="Kafe" />
        <ProductButtons />
      </ProductCard>
      <ProductCard product={product}>
        <ProductImage />
        <ProductTitle />
        <ProductButtons />
      </ProductCard>
    </div>
  );
};
