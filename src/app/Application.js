import './Application.css';
import { Component } from 'react';
import { Spinner } from '../components/Spinner';
import { applicationService } from './applicationService';

/**
 * This the root component of our application. It has the ability to:
 *  <ul>
 *  <li> display a spinner while application is loading
 *  <li> display an error if something went wrong during loading phase
 *  <li> display the invoicing simulator
 * </ul>
 */
export class Application extends Component {
  state = {
    loading: true,
    error: null,
    productInstances: null,
  };

  componentDidMount() {
    applicationService.init()
      .then(() => {
        this.setState({ productInstances: applicationService.productInstances, loading: false });
      })
      .catch(e => {
        this.setState({ productInstances: null, error: e.message, loading: false });
      });
  }

  renderLoading() {
    return <div className="tp-loading"><Spinner/></div>;
  }

  renderError(error) {
    return <div className="tp-loading-error">{error}</div>;
  }

  renderInvoicingSimulator(productInstances) {
    return "invoicing simulator TBD...";
  }

  renderApplication() {
    const { loading, error, productInstances } = this.state;

    if (loading) {
      return this.renderLoading();
    }

    if (error) {
      return this.renderError(error);
    }

    return this.renderInvoicingSimulator(productInstances);
  }

  render() {
    return <div className="tp-application">
      {this.renderApplication()}
    </div>;
  }
}
