import React from 'react';
import Grid from '../../shared/Grid';
import { IProduct } from '../../modules/products/defs';
import ProductGridItem from '../ProductGridItem';

export interface IOwnProps {
  category: string;
}

export interface IStateProps {
  products: IProduct[] | null;
}

export interface IDispatchProps {
  loadProducts: (category: string) => void;
}

type Props = IStateProps & IDispatchProps & IOwnProps;

class TopPage extends React.Component<Props> {
  componentDidMount() {
    this.props.loadProducts(this.props.category);
  }
  componentWillReceiveProps(nextProps: Props) {
    if (this.props.category !== nextProps.category) {
      this.props.loadProducts(nextProps.category);
    }
  }
  render() {
    return (
      <Grid
        itemsPerRow={2}
        GridItem={ProductGridItem}
        items={this.props.products}
        itemHeight={24}
      />
    );
  }
}

export default TopPage;
