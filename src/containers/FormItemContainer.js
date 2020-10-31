import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import FormItem from '../components/FormItem/FormItem';

import * as actions from '../actions/index';

const formItemPropTypes = {
  item: PropTypes.shape({
    value: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  handleItemCompletion: PropTypes.func.isRequired,
};

const FormItemContainer = props => <FormItem {...props} />;

FormItemContainer.propTypes = formItemPropTypes;

const mapDispatchToProps = dispatch => {
  return {
    handleItemCompletion: (modifiedItem) => dispatch(actions.ItemCompletion(modifiedItem)),
  }
}

export default connect( null,mapDispatchToProps)(FormItemContainer);
