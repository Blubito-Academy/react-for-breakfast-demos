import { Product } from "./Product/Product";
import styles from "./ProductSection.module.scss";

export const ProductSection = () => {
  return (
    <div className={styles.productSection}>
      <Product
        productName="A very old elf mage"
        productImgSrc="/frieren.png"
        productDesc="You get Frieren-sama. She is very cool, but very awkward - quite a good deal, dare I say."
      />
      <Product
        productName="Space Marine"
        productImgSrc="/spacemarine.jpg"
        productDesc="What a cool little killing machine. Did I mention you can paint him in pink if you want?"
      />
      <Product
        productName="Toxic commander deck"
        productImgSrc="/ixhel.jpg"
        productDesc="Get tabled on turn 3. Make your friends hate you and go home crying."
      />
      <Product
        productName="Clone trooper figure"
        productImgSrc="/clone.png"
        productDesc="I can finally play with the toys I couldn't afford when I was 7."
      />
      <Product
        productName="Bloodborne"
        productImgSrc="/bloodborne.jpg"
        productDesc="This is the best game ever. Go play it."
      />
      <Product
        productName="A lobotomized owl"
        productImgSrc="/owl.png"
        productDesc="What horros has this owl witnessed? Mayhaps my CSS stylesheets?"
      />
    </div>
  );
};
