/// Menu
import Metismenu from "metismenujs";
import React, { Component, useContext, useEffect } from "react";
/// Scroll
import PerfectScrollbar from "react-perfect-scrollbar";
/// Link
import { Link, useLocation } from "react-router-dom";
import useScrollPosition from "use-scroll-position";
import { ThemeContext } from "../../../context/ThemeContext";

/// Image
//import profile from "../../../images/profile/pic1.jpg";
//import plus from "../../../images/plus.png";

class MM extends Component {
  componentDidMount() {
    this.$el = this.el;
    this.mm = new Metismenu(this.$el);
  }
  componentWillUnmount() {
  }
  render() {
    return (
      <div className="mm-wrapper">
        <ul className="metismenu" ref={(el) => (this.el = el)}>
          {this.props.children}
        </ul>
      </div>
    );
  }
}

const SideBar = () => {
  const location = useLocation()
  const {
    iconHover,
    sidebarposition,
    headerposition,
    sidebarLayout,
  } = useContext(ThemeContext);
  useEffect(() => {
    var btn = document.querySelector(".nav-control");
    var aaa = document.querySelector("#main-wrapper");
    function toggleFunc() {
      return aaa.classList.toggle("menu-toggle");
    }
    btn.addEventListener("click", toggleFunc);
  }, []);
  let scrollPosition = useScrollPosition();

  /// Path
  // let path = window.location?.pathname;

  const sideBars = [
    {
      title: "Dashboard", icon: "flaticon-025-dashboard", isChild: false, pathname: "/dashboard",

    },
    {
      title: "Add Hotel", icon: "flaticon-025-dashboard", isChild: false, pathname: "/add-hotel",
    },
    {
      title: "Settings", icon: "flaticon-025-dashboard", isChild: false, pathname: "/settings",
    }
  ]

  return (
    <div
      className={`deznav ${iconHover} ${sidebarposition.value === "fixed" &&
        sidebarLayout.value === "horizontal" &&
        headerposition.value === "static"
        ? scrollPosition > 120
          ? "fixed"
          : ""
        : ""
        }`}
    >
      <PerfectScrollbar className="deznav-scroll">
        <MM className="metismenu" id="menu">
          {sideBars?.map((sideBar, key) => (
            <li key={key} className={location.pathname === sideBar.pathname ? "mm-active" : ""}>
              <Link className={sideBar.isChild && "has-arrow ai-icon"} to={sideBar.pathname} >
                <i className={sideBar.icon}></i>
                <span className="nav-text">{sideBar?.title}</span>
              </Link>
              {sideBar.isChild && <ul>
                {sideBar.subChild?.map((child, childKey) => (
                  <li key={childKey}><Link className={location.pathname === child.pathname ? "mm-active" : ""} to={child.pathname}>{child.title}</Link>
                    {child.innerChild &&
                      child.innerChild?.map((innerChild, innerChildKey) => (
                        <ul key={innerChildKey} className={location.pathname === innerChild.pathname ? "mm-show" : ""}>
                          <li><Link className={location.pathname === innerChild.pathname ? "mm-active" : ""} to={innerChild.pathname}>{innerChild.title}</Link></li>
                        </ul>
                      ))}
                  </li>
                ))
                }
              </ul>}
            </li>

          ))}
          {/* <li className={`${app.includes(path) ? "mm-active" : ""}`}>
            <Link className="has-arrow ai-icon" to="#" >
              <i className="flaticon-050-info"></i>
              <span className="nav-text">Apps</span>
            </Link>
            <ul >
              <li><Link className={`${path === "app-profile" ? "mm-active" : ""}`} to="/app-profile">Profile</Link></li>
              <li className={`${shop.includes(path) ? "mm-active" : ""}`}><Link className="has-arrow" to="#" >Shop</Link>
                <ul className={`${shop.includes(path) ? "mm-show" : ""}`}>
                  <li><Link className={`${path === "ecom-customers" ? "mm-active" : ""}`} to="/ecom-customers">Customers</Link></li>
                </ul>
              </li>
            </ul>
          </li> */}
          {/* subChild: [
        {
          title: "chidl",
          pathname: "",
          innerChild: [
            {
              title: "inner",
              pathname: ""
            }
          ]
        },
        {
          title: "chidl",
          pathname: "",
        },
      ] */}
        </MM>

      </PerfectScrollbar>
    </div>
  );
};

export default SideBar;
