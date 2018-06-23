import React from 'react';

export default (props) => {
    const { news, index } = props;
    return (
        <div style={styles.container}>
          <img src={news.urlToImage} style={styles.image} alt="news" />
          <text style={styles.title}>{news.title}</text>
        </div>
    )
};

const styles = {
  container: {
    width: '33%',
    flexDirection: 'column',
    dispay: 'inline',
    margin: '16px',
    backgroundColor: '#fafafa',
  },
  image: {
    width: '100%',
    resizeMode: 'cover',
  },
  title: {
    fontSize: '1em',
    width: '100%',
  }
}
