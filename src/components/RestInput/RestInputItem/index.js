import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'antd';
import FormItem from '../../form/FormItem';
import { getRecordData } from '../../../utils/tools';
import { RestInputContext } from '../RestInputContext';

const RestInputItem = props => (
  <RestInputContext.Consumer>
    {({ record, form }) => (
      <FormItem
        {...props}
        form={form}
        defaultValue={props.defaultValue || getRecordData(record, props.source)}
      >
        {props.children}
      </FormItem>
    )}
  </RestInputContext.Consumer>
);

RestInputItem.propTypes = {
  source: PropTypes.string,
  record: PropTypes.object,
  defaultValue: PropTypes.string,
  children: PropTypes.any,
};

RestInputItem.defaultProps = {
  children: <Input />,
};

export default RestInputItem;
