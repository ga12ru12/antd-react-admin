import React from 'react';
import PropTypes from 'prop-types';
import { Cascader } from 'antd';
import FormItem from '../FormItem';

const FormCascader = props => {
  const {
    source,
    title,
    required,
    requiredMessage,
    placeholder,
    form,
    defaultValue,
    rules,
    onChange,
    loadData,
    fieldNames,
    options,
    showSearch,
  } = props;
  return (
    <FormItem {...props} title={title} required={required}>
      {form.getFieldDecorator(source, {
        rules: [{ required, message: requiredMessage }, ...rules],
        initialValue: defaultValue,
      })(
        <Cascader
          fieldNames={fieldNames}
          changeOnSelect
          onChange={onChange}
          options={options}
          showSearch={showSearch}
          placeholder={placeholder}
          loadData={loadData}
          style={{ width: '100%' }}
        />
      )}
    </FormItem>
  );
};

FormCascader.propTypes = {
  source: PropTypes.string,
  title: PropTypes.any,
  required: PropTypes.bool,
  requiredMessage: PropTypes.node,
  icon: PropTypes.string,
  placeholder: PropTypes.string,
  form: PropTypes.object,
  defaultValue: PropTypes.any,
  rules: PropTypes.any,
  onChange: PropTypes.func,
  loadData: PropTypes.func,
  fieldNames: PropTypes.object,
  options: PropTypes.array,
  showSearch: PropTypes.func,
};
FormCascader.defaultProps = {
  required: false,
  requiredMessage: 'The field is required',
  rules: [],
  placeholder: 'placeholder.undefined',
};
export default FormCascader;
