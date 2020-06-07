import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { ConfigProvider, Layout } from 'antd';
import { createHashHistory } from 'history';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import 'moment/locale/zh-cn';

import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

// 引进页面（pages）
import Index from './pages/Index';
import Login from './pages/login/login';

const { Content } = Layout;
const history = createHashHistory();

class RouteDom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      getJwtLogin: true, //是否登录凭证
    };
  }
  render() {
    const { getJwtLogin } = this.state;
    return (
      <ConfigProvider locale={zh_CN}>
        {getJwtLogin && (
          <Router history={history}>
            <Switch>
              {/* 登录页面 */}
              <Route path="/login" component={Login} />
            </Switch>
            <Switch>
              <Route path="/login" component={null} />
              <Layout className="h-100">
                <Switch>
                  <Route path="/login" component={null} />
                  {/* <Route component={Menu} /> */}
                </Switch>

                <Layout>
                  <Switch>
                    {/* <Route component={Header} /> */}
                  </Switch>
                  <Content>
                    <Switch>
                      <Route path="/" component={Index} />
                    </Switch>
                  </Content>
                </Layout>
              </Layout>
            </Switch>
          </Router>
        )}
      </ConfigProvider>
    );
  }
}

ReactDOM.render(
  <RouteDom></RouteDom>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
