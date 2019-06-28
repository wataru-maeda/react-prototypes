import React, { Component } from 'react'
import './Home.css'

export default class Header extends Component {
  render() {
    return (
        <div className="head">
            {renderHeaderProfile()}
            {renderRightNavigationItems()}
        </div>
    )
  }
}

const renderRightNavigationItems = () => {
    const container = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        width: '100%',
        height: 80,
        background: '#fafafa',
    }

    const item = {
        height: 50,
        width: 50,
    }

    return (
        <div style={container}>
            <div style={{...item, background: '#f6e58d'}}/>
            <div style={{...item, background: '#ffbe76'}}/>
            <div style={{...item, background: '#ff7979'}}/>
        </div>
    );
}

const renderHeaderProfile = () => {
    const src = "https://pbs.twimg.com/profile_images/948761950363664385/Fpr2Oz35_400x400.jpg"
    return (
        <div style={{ display: 'inline-block', background: 'white' }}>
            <img src={src} style={styles.profileImage}/>
            <span style={{ paddingRight: 10 }}>David</span>
        </div>
    );
}


const styles = {
    profileImage: {
        verticalAlign: 'middle',
        objectFit: 'cover',
        borderRadius: 30,
        margin: 10,
        width: 60,
        height: 60,
    },
    navigationContainer: {
        alignItems: 'center',
        float: 'right',
        display: 'inline-block',
        height: 80,
        width: 200,
    },
    loginButton: {
        width: 'auto',
        height: '100%',
    }
}