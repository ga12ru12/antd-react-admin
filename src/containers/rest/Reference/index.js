import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { retrieveReference } from '../../../redux/referenceData/actions';
import { getRecordData } from '../../../utils/tools';
import { getReferenceData, getReferenceLoading } from '../../../redux/referenceData/selectors';

class RestReference extends Component {
  componentDidMount() {
    const { source, record } = this.props;
    this.props.retrieveReference(getRecordData(record, source));
  }

  componentWillUpdate(nextProps) {
    if (this.props.record !== nextProps.record && !nextProps.resourceData) {
      const { source } = this.props;
      const { record } = nextProps;
      this.props.retrieveReference(getRecordData(record, source));
    }
  }

  render() {
    const {
      resourceData,
      resource,
      record,
      reference,
      children,
      retrieveList,
      source,
      rootPath,
      isLink,
      loading,
    } = this.props;
    return isLink ? (
      <Link
        href={`${rootPath}/${reference}/${
          resourceData ? resourceData.id : getRecordData(record, source)
        }/edit`}
        to={`${rootPath}/${reference}/${
          resourceData ? resourceData.id : getRecordData(record, source)
        }/edit`}
      >
        {React.Children.map(children, element =>
          React.cloneElement(element, {
            record: resourceData,
            resource,
            reference,
            retrieveList,
            loading,
          })
        )}
      </Link>
    ) : (
      React.Children.map(children, element =>
        React.cloneElement(element, {
          record: resourceData,
          resource,
          reference,
          retrieveList,
          loading,
        })
      )
    );
  }
}

RestReference.propTypes = {
  resourceData: PropTypes.object,
  resource: PropTypes.string,
  record: PropTypes.object,
  reference: PropTypes.string,
  retrieveList: PropTypes.func,
  children: PropTypes.node,
  source: PropTypes.string,
  retrieveReference: PropTypes.func,
  rootPath: PropTypes.string,
  isLink: PropTypes.bool,
  loading: PropTypes.bool,
};

RestReference.defaultProps = {
  rootPath: '',
};

const mapStateToProps = (state, props) => ({
  resourceData: getReferenceData(state, props),
  loading: getReferenceLoading(state, props),
});

const mapDispatchToProps = (dispatch, props) => ({
  retrieveReference: id =>
    dispatch(retrieveReference(props.reference, id ? [id] : [], props.mappedBy)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RestReference);
