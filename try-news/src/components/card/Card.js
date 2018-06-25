import React from 'react';

export default ({ news }) => {
    return (
      <div style={styles.container}>
        <div style={styles.imageContainer}>
          <img src={news.urlToImage} style={styles.image} alt="news" />
        </div>
        <h1 style={styles.title}>{news.title}</h1>
        <p style={styles.description}>{news.description}</p>
      </div>
    )
};

const styles = {
  container: {
    width: '30%',
    marginLeft: '16px',
    marginTop: '16px',
    backgroundColor: '#fafafa',
    display: 'inline-block',
    textAlign: 'center',
    textDecoration: 'none',
    whiteSpace: 'normal',
    overflow: 'hidden'
  },
  imageContainer: {
    width: '100%',
    height: window.innerWidth / 5,
    overflow: 'hidden',
    backgroundColor: 'lightGray',
  },
  image: {
    width: '100%',
    resizeMode: 'cover',
  },
  title: {
    fontSize: '100%',
  },
  description: {
    fontSize: '80%',
    color: 'gray',
    padding: '8px',
  },
}
