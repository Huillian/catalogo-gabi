// useProductFocus.js
import { useEffect } from 'react';

export function useProductFocus() {
  useEffect(() => {
    const handleProductFocus = () => {
      const productList = document.getElementById('productList');
      const windowHeight = window.innerHeight;
      const products = productList.getElementsByClassName('product');

      Array.from(products).forEach(product => {
        const rect = product.getBoundingClientRect();
        const productHeight = rect.height;
        const productTop = rect.top;
        const distanceToCenter = windowHeight / 2 - (productTop + productHeight / 2);

        if (Math.abs(distanceToCenter) < productHeight / 2) {
          product.classList.add('focused');
          product.classList.remove('blurred');
        } else {
          product.classList.add('blurred');
          product.classList.remove('focused');
        }
      });
    };

    window.addEventListener('scroll', handleProductFocus);
    return () => window.removeEventListener('scroll', handleProductFocus);
  }, []);
}
