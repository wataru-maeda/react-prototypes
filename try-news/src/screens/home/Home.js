import React, { Component } from 'react';
import logo from '../../assets/images/logo.svg';
import './Home.css';
import * as NewsActions from '../../redux/actions/NewsActions';
import { connect } from 'react-redux';
import Card from '../../components/card';

class Home extends Component {
  componentWillMount() {
    NewsActions.setHeadlineNews();
  }

  render() {
    const { headline } = this.props;
    return (
      <div className="container">
        <header className="header">
          <img src={logo} className="logo" alt="logo" />
          <h1 className="title">News</h1>
        </header>
        <h1 className="subtitle">Top Business Headline</h1>
        <div className="headline">
          { headline && headline.map(news => {
            return <Card news={news} />
          }) }
        </div>
        <div className="headline">
          { headline && headline.map(news => {
            return <Card news={news} />
          }) }
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    headline: state.news.headline,
  }
}
export default connect(mapStateToProps)(Home)