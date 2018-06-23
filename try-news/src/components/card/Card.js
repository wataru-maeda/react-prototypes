import React from 'react';

export default (props) => {
    const { news, index } = props;
    return (
        <div style={styles.container}>
          <img src={news.urlToImage} style={styles.image} alt="news" />
          <h1 style={styles.title}>{news.title}</h1>
          <p style={styles.description}>{news.description}</p>
        </div>
    )
};

const styles = {
  container: {
    flexDirection: 'column',
    dispay: 'inline',
    margin: '24px',
    backgroundColor: '#fafafa',
  },
  image: {
    width: '100%',
    resizeMode: 'cover',
  },
  title: {
    fontSize: '24px',
    width: '100%',
  },
  description: {
    fontSize: '14px',
    color: 'gray',
    width: '100%',
  },
}
