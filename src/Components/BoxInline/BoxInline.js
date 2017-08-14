import React from 'react';
import styles from './styles';

class BoxInline extends React.Component{
    render(){
        return (
          <div style={styles.box} onClick={this.props.updateMessage}>
            {this.props.data}
          </div>
        );
    }
}

BoxInline.propTypes = {
    updateMessage: React.PropTypes.func.isRequired,
    data: React.PropTypes.string.isRequired
};

export default BoxInline;