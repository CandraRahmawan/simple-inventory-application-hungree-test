import React from 'react';
import { PageHeader } from 'antd';
import { bool, object, string } from 'prop-types';
import { Wrapper } from './style';

const PageHeaderComponent = (props) => {
  const { hideHeaderPage, history, titleHeader } = props;
  return (
    !hideHeaderPage && (
      <Wrapper>
        <PageHeader onBack={() => history.goBack()} title="Back" subTitle={titleHeader} />
      </Wrapper>
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
