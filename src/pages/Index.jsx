/* eslint-disable */
/**文浩
 * 6/7/2020, 8:51:57 PM
 * doc comment for the file goes here
 */

/** Happy Coding */
import React, { ReactNode, ReactEventHandler, Component } from 'react';
// import { Link } from 'react-router-dom';
// import { Icon } from 'antd';

import Fetch from '../fetch';

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.config = {
    };
    this.state = {
    };
  }

  componentWillMount() { }

  componentDidMount() {
    Fetch.test().then(res => {
      console.log('res', res)
    })
  }

  componentDidShow() { }

  render() {
    return (
      <div className="index-main">
        123
      </div>
    )
  }
}
