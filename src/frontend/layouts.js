import React, { Component } from "react";
import "./layouts.css";
import { Link } from "@reach/router";
import { Menu, Dropdown, Icon } from "antd";

class FrontendLayout extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <header className="header">
        <div className="logo">
          <Link to="/">B R Y T A &nbsp; B O O K S</Link>
        </div>
        <nav className="menu">
          <div>
            <Dropdown overlay={menu}>
              <Link to="#">
                <Icon type="book" /> Books <Icon type="down" />
              </Link>
            </Dropdown>
          </div>
          <div>
            <Link to="/about">About</Link>
          </div>
          <div>
            <Link to="/faq">FAQS</Link>
          </div>
          <div>
            <Link to="/signin" className="signin">
              Sign in
            </Link>
          </div>
        </nav>
      </header>
    );
  }
}
const menu = (
  <Menu>
    <Menu.Item>
      <Link to="/books/top">Top Books</Link>
    </Menu.Item>
    <Menu.Item>
      <Link to="/books/naija">Naija Books</Link>
    </Menu.Item>
  </Menu>
);
export default FrontendLayout;
