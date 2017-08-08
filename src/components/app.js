import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Field, reduxForm } from 'redux-form';
import { load } from '../actions/index';

const data = {
  search: 'Hello'
}

class App extends Component {
  onFormSubmit(event) {
    console.log('EVENT', event);
  }

  render() {
    console.log('PROPS', this.props)
     const { handleSubmit, load, reset, pristine, submitting } = this.props;
    return (
      <div className="form-search">
        <form className="input-group" onSubmit={handleSubmit(this.onFormSubmit)}>
          <Field
            name="search"
            type="text"
            className="form-control"
            placeholder="Enter location"
            component="input"
          />
          <span className="input-group-btn">
            <button tyep="button" onClick={() => load(data)} className="btn btn-secondary">Search</button>
            <button type="button" className="btn btn-secondary" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
          </span>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    initialValues: state.load
  }
}

const mapDispatchTOProps = (dispatch) => {
  return bindActionCreators({ load }, dispatch);
}

export default reduxForm({
  form: 'clearForm'
})(connect(mapStateToProps, mapDispatchTOProps)(App));