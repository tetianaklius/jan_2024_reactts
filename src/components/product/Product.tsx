import React, {FC} from 'react';
import styles from "../product/product.module.css"

export interface IProductProps {
    id: number,
    title: string,
    description: string,
    price: number,
    discountPercentage: number,
    rating: number,
    stock: number,
    brand: string,
    category: string,
    thumbnail: string,
    images: string[],
}

const Product: FC<IProductProps> = ({
                                        id,
                                        title,
                                        description,
                                        price,
                                        discountPercentage,
                                        rating,
                                        brand,
                                        thumbnail,
                                        images
                                    }) => {
    return (
        <div className={styles.product_box}>
            <h1>{id}. {title}</h1>
            <div><img src={thumbnail} alt={title}/></div>
            <div>price: {price}$</div>
            <div>brand: {brand}</div>
            <div>{description}</div>
            <div>rating: {rating}</div>
            <div>discount percentage: {discountPercentage}</div>
            <div className={styles.product_gallery}>
                {
                    images.map((image, index) =>
                        <div key={index} className={styles.product_image}>
                            <img src={image} className={"img"} alt={title}></img>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Product;