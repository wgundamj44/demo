import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { createProductSelector } from '../../modules/products/selectors';
import ItemDetail, { IOwnProps } from './ItemDetail';

const mapStateToProps = createStructuredSelector({
  item: createProductSelector(
    (state: any, props: IOwnProps) => props.match.params.id),
});

const mapDispatchToProps = {

};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ItemDetail);
