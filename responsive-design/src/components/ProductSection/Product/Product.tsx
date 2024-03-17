import styles from "./Product.module.scss";

interface ProductProps {
  productImgSrc: string;
  productName: string;
  productDesc: string;
}
export const Product = (props: ProductProps) => {
  const { productImgSrc, productName, productDesc } = props;

  return (
    <article className={styles.productCard}>
      <img src={productImgSrc} alt={productName}></img>
      <h3>{productName}</h3>
      <p>{productDesc}</p>
      <button>Buy</button>
    </article>
  );
};
