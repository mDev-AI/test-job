import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCart } from '../redux/action';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  // Resolve variants and preselect the first in-stock option if available
  const resolvedVariants = product.variants || [
    { id: 0, name: 'Default', price: product.price, inStock: true },
    { id: 1, name: 'Premium', price: product.price * 1.2, inStock: true },
    { id: 2, name: 'Deluxe', price: product.price * 1.5, inStock: false }
  ];
  const firstInStockIndex = Math.max(
    0,
    resolvedVariants.findIndex((v) => v.inStock)
  );
  const [selectedVariant, setSelectedVariant] = useState(firstInStockIndex);
  const dispatch = useDispatch();

  const variants = resolvedVariants;

  const currentVariant = variants[selectedVariant];
  const isOutOfStock = !currentVariant?.inStock;

  const addProduct = () => {
    if (isOutOfStock) return;
    
    const productWithVariant = {
      ...product,
      selectedVariant: currentVariant,
      price: currentVariant.price
    };
    
    dispatch(addCart(productWithVariant));
    toast.success('Added to cart');
  };

  const handleVariantChange = (e) => {
    setSelectedVariant(parseInt(e.target.value));
  };

  return (
    <div className="product-card">
      <div className="product-card__image-container">
        <img 
          src={product.image} 
          alt={product.title}
          className="product-card__image"
        />
        {isOutOfStock && (
          <div className="product-card__out-of-stock-overlay">
            Out of Stock
          </div>
        )}
      </div>
      
      <div className="product-card__content">
        <h3 className="product-card__title">
          {product.title.length > 50 ? `${product.title.substring(0, 50)}...` : product.title}
        </h3>
        
        <p className="product-card__description">
          {product.description.length > 100 ? `${product.description.substring(0, 100)}...` : product.description}
        </p>
        
        <div className="product-card__price">
          ${currentVariant.price.toFixed(2)}
        </div>
        
        <div className="product-card__variants">
          <label htmlFor={`variant-${product.id}`} className="product-card__variant-label">
            Variant:
          </label>
          <select 
            id={`variant-${product.id}`}
            value={selectedVariant}
            onChange={handleVariantChange}
            className="product-card__variant-select"
          >
            {variants.map((variant) => (
              <option key={variant.id} value={variant.id} disabled={!variant.inStock}>
                {variant.name} - ${variant.price.toFixed(2)} {!variant.inStock ? '(Out of Stock)' : ''}
              </option>
            ))}
          </select>
        </div>
        
        <div className="product-card__actions">
          <Link 
            to={`/product/${product.id}`} 
            className="product-card__btn product-card__btn--secondary"
          >
            View Details
          </Link>
          
          <button
            onClick={addProduct}
            disabled={isOutOfStock}
            className={`product-card__btn product-card__btn--primary ${isOutOfStock ? 'product-card__btn--disabled' : ''}`}
          >
            {isOutOfStock ? 'Out of Stock' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
