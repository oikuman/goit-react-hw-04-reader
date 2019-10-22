import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Publication from '../Publication';
import Counter from '../Counter';
import Controls from '../Controls';
import css from './Reader.module.css';
import queryString from 'query-string';

class Reader extends Component {
  state = {
    articles: [...this.props.items],
    index: 0,
  };

  componentDidMount() {
    const { history } = this.props;
    history.push({
      pathname: '/reader',
      search: '?item=1',
    });
  }

  handleBack = e => {
    const { articles, index } = this.state;
    const len = articles.length;

    if (!len) return;

    const { history } = this.props;

    if (index > 0) {
      const currentIndex = index - 1;
      this.setState(prevState => ({ index: prevState.index - 1 }));
      history.push({
        pathname: '/reader',
        search: `?item=${currentIndex + 1}`,
      });
    }
  };

  handleForward = e => {
    const { articles, index } = this.state;
    const len = articles.length;

    if (!len) return;

    const { history } = this.props;

    if (index < len - 1) {
      const currentIndex = index + 1;
      this.setState(prevState => ({ index: prevState.index + 1 }));
      history.push({
        pathname: '/reader',
        search: `?item=${currentIndex + 1}`,
      });
    }
  };

  render() {
    const { index, articles } = this.state;
    const { location } = this.props;
    console.log(location);
    const searchNumStr = queryString.parse(location.search).item;
    let searchNum = Number(searchNumStr);
    if (!searchNum) searchNum = 1;
    const searchIndex = searchNum - 1;

    return (
      <div className={css.reader}>
        <Publication {...this.props} article={articles[searchIndex]} />
        <Counter index={searchIndex} len={articles.length} />
        <Controls
          index={index}
          len={articles.length}
          handleBack={this.handleBack}
          handleForward={this.handleForward}
        />
      </div>
    );
  }
}

Reader.defaultProps = {
  items: [],
};

Reader.propTypes = {
  items: PropTypes.array,
};

export default Reader;
