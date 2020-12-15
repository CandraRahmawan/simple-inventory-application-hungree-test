import React from 'react';
import { PageHeader } from 'antd';
import { bool, object, string } from 'prop-types';

const PageHeaderComponent = (props) => {
  const { hideHeaderPage, history, titleHeader } = props;
  return (
    !hideHeaderPage && (
      <div className="background-primary">
        <PageHeader onBack={() => history.goBack()} title="Back" subTitle={titleHeader} />
      </div>
    )
  );
};

PageHeaderComponent.defaultProps = {
  hideHeaderPage: false,
};

PageHeaderComponent.propTypes = {
  hideHeaderPage: bool,
  history: object.isRequired,
  titleHeader: string.isRequired,
};

export default PageHeaderComponent;
