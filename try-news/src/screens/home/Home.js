import React, { Component } from 'react';
import logo from '../../assets/images/logo.svg';
import './Home.css';
import * as NewsActions from '../../redux/actions/NewsActions';
import { connect } from 'react-redux';
import Card from '../../components/card';

class Home extends Component {
  componentWillMount() {
    NewsActions.setHeadlineNews();
    NewsActions.setBitcoinNews();
  }

  render() {
    const { headline, bitcoin } = this.props;
    return (
      <div className="container">
        <header className="header">
          <img src={logo} className="logo" alt="logo" />
          <h1 className="title">News</h1>
        </header>
        <h1 className="subtitle">Top business headlines in the US right now</h1>
        <div className="headline">
          { headline && headline.map(news => {
            return <Card news={news} />
          }) }
        </div>
        <h1 className="subtitle">All articles about Bitcoin from the last 6 months</h1>
        <div className="headline">
          { bitcoin && bitcoin.map(news => {
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
    bitcoin: state.news.bitcoin,
  }
}
export default connect(mapStateToProps)(Home)