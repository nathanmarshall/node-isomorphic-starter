import React from 'react';
import styled from 'styled-components';

const StyledBox = styled(({ className, children }) => (
  <div className={className}>
    {children}
  </div>
))`
    position: relative;
    box-sizing: border-box;
    width: 400px;
    height: 200px;
    border: 2px solid aqua;
    border-radius: 4px;
    text-align:center;
    line-height: 200px;
`;

class BoxStyled extends React.Component{
    render(){
        return (
          <StyledBox onClick={this.props.updateMessage}>
            {this.props.data}
          </StyledBox>
        );
    }
}

BoxStyled.propTypes = {
    updateMessage: React.PropTypes.func.isRequired,
    data: React.PropTypes.string.isRequired
};

export default BoxStyled;