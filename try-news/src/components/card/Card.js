import React from 'react';

export default ({ news }) => {
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
    float: 'left',
    width: (window.innerWidth - 16 * 4) / 3,
    dispay: 'inline',
    marginLeft: '16px',
    marginTop: '16px',
    backgroundColor: '#fafafa',
  },
  image: {
    width: '100%',
    resizeMode: 'cover',
  },
  title: {
    fontSize: '24px',
  },
  description: {
    fontSize: '14px',
    color: 'gray',
    padding: '8px',
  },
}
