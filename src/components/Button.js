import { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as stuffActions from '../actions/stuffActions';
import React from 'react';
/*

let Button = (flag) => (
  <button
    onClick={(flag) => { stuffActions.fetchStuff(flag)}}
    className="btn btn-primary btn-lg btn-block" >
    Get top news
  </button>
);


function mapStateToProps(state) {
    return {
        stuff: state.stuff
    };
}

function mapDispatchToProps(dispatch) {
    return {
        stuffActions: bindActionCreators(stuffActions, dispatch)
    };
}
Button = connect(
  mapStateToProps,
  mapDispatchToProps
)(Button)

export default Button;
*/

class Button extends Component {
    constructor(props) {
        super(props);

        this.onServicesSubmit = this.onServicesSubmit.bind(this);
        this.onProviderSubmit = this.onProviderSubmit.bind(this);
    }

    onServicesSubmit(event) {
        event.preventDefault();
        this.props.stuffActions.fetchStuff("service");
    }
    onProviderSubmit(event) {
        event.preventDefault();
     this.props.stuffActions.fetchStuff("provider");
    }

    render() {
        return (
            <div>
                <button onClick={this.onServicesSubmit} className="input-group">
                    services
                </button>
                <button onClick={this.onProviderSubmit} className="input-group">
                    providers
                </button>


            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        stuff: state.stuff
    };
}

function mapDispatchToProps(dispatch) {
    return {
        stuffActions: bindActionCreators(stuffActions, dispatch)
    };
}
Button = connect(
    mapStateToProps,
    mapDispatchToProps
)(Button)
export default Button;
