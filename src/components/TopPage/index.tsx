import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { createCategoryProductsSelector } from '../../modules/product_list/selectors';
import { requestProductList } from '../../modules/product_list/actions';
import TopPage, { IOwnProps } from './TopPage';

const mapStateToProps = createStructuredSelector({
  products: createCategoryProductsSelector((_, props: IOwnProps) => props.category),
});

const mapDispatchToProp = {
  loadProducts: requestProductList,
};

export default connect(
  mapStateToProps,
  mapDispatchToProp,
)(TopPage);
