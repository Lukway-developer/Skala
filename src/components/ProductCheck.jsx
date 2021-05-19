const ProductCheck = ({quantity}) => {
  return (
    <div className="products_check_container">
      <div className="products_bag">
        <i className="fas fa-shopping-bag" />
        <span className="products_bag-counter">{quantity}</span>
      </div>
      <i className="products_check fas fa-check-circle"></i>
    </div>
  );
}

export default ProductCheck;
