import * as React from 'react';
import { connect } from 'react-redux';
import { ApplicationState } from '../store';
import * as Input from '../store/input';
import * as Statistics from '../store/statistics'

// At runtime, Redux will merge together...
type HomeProps =
  ApplicationState // ... state we've requested from the Redux store
  & typeof Input.actionCreators // ... plus action creators we've requested
  & typeof Statistics.actionCreators;


class Home extends React.PureComponent<HomeProps> {
  // This method is called when the component is first added to the document
  public componentDidMount() {
    this.RequestData();
  }

  // This method is called when the route parameters change
  public componentDidUpdate() {
    // this.RequestData();
  }

  public render() {
    return (
      <React.Fragment>
        <h1 id="tabelLabel">Statistics</h1>
        <p>This component demonstrates sending requests to the server.</p>
        {this.renderStatistics()}
      </React.Fragment>
    );
  }

  private RequestData() {
    this.props.requestStatistics(this.props.input ? this.props.input.input : []);
  }


  private renderStatistics() {
    

    return (
      <div className="d-flex justify-content-between">
        {this.props.statistics && this.props.statistics.isLoading && <span>Loading...</span>}
        <h1>Sum: {this.props.statistics ? this.props.statistics.sum : null}</h1>
      </div>
    );
  }
}

export default connect(
  (state: ApplicationState) => state, // Selects which state properties are merged into the component's props
  {...Input.actionCreators, // Selects which action creators are merged into the component's props
  ...Statistics.actionCreators}
)(Home as any);
