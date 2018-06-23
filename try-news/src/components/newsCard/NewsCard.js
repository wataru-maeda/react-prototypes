import React from 'react';

export default (props) => {
    const { news, index } = props;
    return (
        <span style={styles.container}>
            <img src={news.urlToImage} style={styles.image} alt="news" />
            <label style={styles.title}>{news.title}</label>
        </span>
    )
};

const styles = {
    container: {
        padding: '16px',
    },
    image: {
        width: '33%',
        resizeMode: 'cover',
    },
    title: {
        fontSize: '1em',
        width: '33%',
    }
}
