import React, { Component } from "react";
import sideNavData from "./sidenav.crm.js";
import alertData from "./alert.crm.js";
import "./style.crm.css";
import msgData from "./message.crm.js";
import userData from "./user.crm.js";
import progressData from "./progress.crm.js";
import earningData from "./earning.crm.js";
import statusData from "./status.crm.js";
import colorData from "./color.crm.js";
import sectionData from "./section.crm.js";

class Crm extends Component {
    constructor() {
        super();
        this.state = {
            sideNavData,
            alertData,
            msgData,
            userData,
            progressData,
            earningData,
            statusData,
            colorData,
            sectionData
        };
    }

    render() {
        return (
            <>
                <div id="wrapper">
                    <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
                        <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                            <div className="sidebar-brand-icon rotate-n-15">
                                <i className="fas fa-laugh-wink"></i>
                            </div>
                            <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
                        </a>
                        <hr className="sidebar-divider my-0"></hr>
                        <li className="nav-item active">
                            <a className="nav-link" href="index.html">
                                <i className="fas fa-fw fa-tachometer-alt"></i>
                                <span>Dashboard</span></a>
                        </li>
                        <hr className="sidebar-divider"></hr>

                        {this.state.sideNavData.map(({ heading, title, listTitle, item }) => {
                            return (
                                <>
                                    <div className="sidebar-heading">
                                        {heading}
                                    </div>
                                    <li className="nav-item">
                                        <a className="nav-link collapsed" data-toggle="collapse" data-target="#collapseTwo"
                                            aria-expanded="true" aria-controls="collapseTwo">
                                            <i className="fas fa-fw fa-cog"></i>
                                            <span>{title}</span>
                                        </a>
                                      
                                        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                                            <div className="bg-white py-2 collapse-inner rounded">
                                                <h6 className="collapse-header">{listTitle}</h6>
                                                <a className="collapse-item">{item}</a>
                                            </div>
                                        </div>
                                    </li>
                                </>
                            )
                        })
                        }
                        
                        <hr className="sidebar-divider d-none d-md-block"></hr>
                        <div className="text-center d-none d-md-inline">
                            <button className="rounded-circle border-0" id="sidebarToggle"></button>
                        </div>
                        <div className="sidebar-card d-none d-lg-flex">
                            <img className="sidebar-card-illustration mb-2" src="img/undraw_rocket.svg" alt="..."></img>
                            <p className="text-center mb-2"><strong>SB Admin Pro</strong> is packed with premium features, components, and more!</p>
                            <a className="btn btn-success btn-sm" href="https://startbootstrap.com/theme/sb-admin-pro">Upgrade to Pro!</a>
                        </div>
                    </ul>

                    <div id="content-wrapper" className="d-flex flex-column">
                        <div id="content">

                            <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
                                <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
                                    <i className="fa fa-bars"></i>
                                </button>

                                <form
                                    className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                                    <div className="input-group">
                                        <input type="text" className="form-control bg-light border-0 small" placeholder="Search for..."
                                            aria-label="Search" aria-describedby="basic-addon2" />
                                        <div className="input-group-append">
                                            <button className="btn btn-primary" type="button">
                                                <i className="fas fa-search fa-sm"></i>
                                            </button>
                                        </div>
                                    </div>
                                </form>


                                <ul className="navbar-nav ml-auto">


                                    <li className="nav-item dropdown no-arrow d-sm-none">
                                        <a className="nav-link dropdown-toggle" href="#" id="searchDropdown" role="button"
                                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i className="fas fa-search fa-fw"></i>
                                        </a>

                                        <div className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                                            aria-labelledby="searchDropdown">
                                            <form className="form-inline mr-auto w-100 navbar-search">
                                                <div className="input-group">
                                                    <input type="text" className="form-control bg-light border-0 small"
                                                        placeholder="Search for..." aria-label="Search"
                                                        aria-describedby="basic-addon2" />
                                                    <div className="input-group-append">
                                                        <button className="btn btn-primary" type="button">
                                                            <i className="fas fa-search fa-sm"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </li>
                                    {this.state.alertData.map(({ count, title, item1, item2, item3 }) => {
                                        return (
                                            <li className="nav-item dropdown no-arrow mx-1">
                                                <a className="nav-link dropdown-toggle" href="#" id="alertsDropdown" role="button"
                                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    <i className="fas fa-bell fa-fw"></i>
                                                    <span className="badge badge-danger badge-counter">{count}</span>
                                                </a>
                                                <div className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                                                    aria-labelledby="alertsDropdown">
                                                    <h6 className="dropdown-header">
                                                        {title}
                                                    </h6>
                                                    <a className="dropdown-item d-flex align-items-center" href="#">
                                                        <div className="mr-3">
                                                            <div className="icon-circle bg-primary">
                                                                <i className="fas fa-file-alt text-white"></i>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div className="small text-gray-500">{item1[0]}</div>
                                                            <span className="font-weight-bold">{item1[1]}</span>
                                                        </div>
                                                    </a>
                                                    <a className="dropdown-item d-flex align-items-center" href="#">
                                                        <div className="mr-3">
                                                            <div className="icon-circle bg-success">
                                                                <i className="fas fa-donate text-white"></i>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div className="small text-gray-500">{item2[0]}</div>
                                                            {item2[1]}
                                                        </div>
                                                    </a>
                                                    <a className="dropdown-item d-flex align-items-center" href="#">
                                                        <div className="mr-3">
                                                            <div className="icon-circle bg-warning">
                                                                <i className="fas fa-exclamation-triangle text-white"></i>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div className="small text-gray-500">{item3[0]}</div>
                                                            {item3[1]}
                                                        </div>
                                                    </a>
                                                    <a className="dropdown-item text-center small text-gray-500" href="#">Show All Alerts</a>
                                                </div>
                                            </li>
                                        )
                                    })
                                    }
                                    {this.state.msgData.map(({ count, title, item1, item2, item3, item4 }) => {
                                        return (
                                            <li className="nav-item dropdown no-arrow mx-1">
                                                <a className="nav-link dropdown-toggle" href="#" id="messagesDropdown" role="button"
                                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    <i className="fas fa-envelope fa-fw"></i>

                                                    <span className="badge badge-danger badge-counter">{count}</span>
                                                </a>

                                                <div className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                                                    aria-labelledby="messagesDropdown">
                                                    <h6 className="dropdown-header">
                                                        {title}
                                                    </h6>
                                                    <a className="dropdown-item d-flex align-items-center" href="#">
                                                        <div className="dropdown-list-image mr-3">
                                                            <img className="rounded-circle" src="img/undraw_profile_1.svg"
                                                                alt="..." />
                                                            <div className="status-indicator bg-success"></div>
                                                        </div>
                                                        <div className="font-weight-bold">
                                                            <div className="text-truncate">{item1[0]}</div>
                                                            <div className="small text-gray-500">{item1[1]}</div>
                                                        </div>
                                                    </a>
                                                    <a cclassName="dropdown-item d-flex align-items-center" href="#">
                                                        <div className="dropdown-list-image mr-3">
                                                            <img className="rounded-circle" src="img/undraw_profile_2.svg"
                                                                alt="..." />
                                                            <div className="status-indicator"></div>
                                                        </div>
                                                        <div>
                                                            <div className="text-truncate">{item2[0]}</div>
                                                            <div className="small text-gray-500">{item2[1]}</div>
                                                        </div>
                                                    </a>
                                                    <a className="dropdown-item d-flex align-items-center" href="#">
                                                        <div className="dropdown-list-image mr-3">
                                                            <img className="rounded-circle" src="img/undraw_profile_3.svg"
                                                                alt="..." />
                                                            <div className="status-indicator bg-warning"></div>
                                                        </div>
                                                        <div>
                                                            <div className="text-truncate">{item3[0]}</div>
                                                            <div className="small text-gray-500">{item3[1]}</div>
                                                        </div>
                                                    </a>
                                                    <a className="dropdown-item d-flex align-items-center" href="#">
                                                        <div className="dropdown-list-image mr-3">
                                                            <img className="rounded-circle" src="https://source.unsplash.com/Mv9hjnEUHR4/60x60"
                                                                alt="..." />
                                                            <div className="status-indicator bg-success"></div>
                                                        </div>
                                                        <div>
                                                            <div className="text-truncate">{item4[0]}</div>
                                                            <div className="small text-gray-500">{item4[1]}</div>
                                                        </div>
                                                    </a>
                                                    <a className="dropdown-item text-center small text-gray-500" href="#">Read More Messages</a>
                                                </div>
                                            </li>
                                        )
                                    })
                                    }

                                    <div className="topbar-divider d-none d-sm-block"></div>
                                    {this.state.userData.map(({ name, settings }) => {
                                        return (
                                            <li className="nav-item dropdown no-arrow">
                                                <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button"
                                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    <span className="mr-2 d-none d-lg-inline text-gray-600 small">{name}</span>
                                                    <img className="img-profile rounded-circle"
                                                        src="img/undraw_profile.svg" />
                                                </a>

                                                <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                                                    aria-labelledby="userDropdown">
                                                    {settings.map((data) => {
                                                        return (
                                                            <a className="dropdown-item" href="#">
                                                                <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                                                                {data}
                                                            </a>
                                                        )
                                                    })
                                                    }
                                                    <div className="dropdown-divider"></div>
                                                    <a className="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
                                                        <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                                                        Logout
                                                    </a>
                                                </div>
                                            </li>
                                        )
                                    })
                                    }
                                </ul>
                            </nav>
                            <div className="container-fluid">


                                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                                    <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
                                    <a href="#" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                                        className="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
                                </div>
                                {this.state.progressData.map(({ title1, title2, title3, title4, data1, data2, data3, data4 }) => {
                                    return (
                                        <div className="row">
                                            <div className="col-xl-3 col-md-6 mb-4">
                                                <div className="card border-left-primary shadow h-100 py-2">
                                                    <div className="card-body">
                                                        <div className="row no-gutters align-items-center">
                                                            <div className="col mr-2">
                                                                <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                                                    {title1}</div>
                                                                <div className="h5 mb-0 font-weight-bold text-gray-800">{data1}</div>
                                                            </div>
                                                            <div className="col-auto">
                                                                <i className="fas fa-calendar fa-2x text-gray-300"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-3 col-md-6 mb-4">
                                                <div className="card border-left-success shadow h-100 py-2">
                                                    <div className="card-body">
                                                        <div className="row no-gutters align-items-center">
                                                            <div className="col mr-2">
                                                                <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                                                                    {title2}</div>
                                                                <div className="h5 mb-0 font-weight-bold text-gray-800">{data2}</div>
                                                            </div>
                                                            <div className="col-auto">
                                                                <i className="fas fa-dollar-sign fa-2x text-gray-300"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-3 col-md-6 mb-4">
                                                <div className="card border-left-info shadow h-100 py-2">
                                                    <div className="card-body">
                                                        <div className="row no-gutters align-items-center">
                                                            <div className="col mr-2">
                                                                <div className="text-xs font-weight-bold text-info text-uppercase mb-1">{title3}
                                                                </div>
                                                                <div className="row no-gutters align-items-center">
                                                                    <div className="col-auto">
                                                                        <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800"> &nbsp; {data3}</div>
                                                                    </div>
                                                                    <div className="col">
                                                                        <div className="progress progress-sm mr-2">
                                                                            <div className="progress-bar bg-info" role="progressbar"></div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-auto">
                                                                <i className="fas fa-clipboard-list fa-2x text-gray-300"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-xl-3 col-md-6 mb-4">
                                                <div className="card border-left-warning shadow h-100 py-2">
                                                    <div className="card-body">
                                                        <div className="row no-gutters align-items-center">
                                                            <div className="col mr-2">
                                                                <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                                                                    {title4}</div>
                                                                <div className="h5 mb-0 font-weight-bold text-gray-800">{data4}</div>
                                                            </div>
                                                            <div className="col-auto">
                                                                <i className="fas fa-comments fa-2x text-gray-300"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                                }

                                {this.state.earningData.map(({ title1, title2, heading, action1, action2, extra, field1, field2, field3 }) => {
                                    return (
                                        <div className="row">

                                            <div className="col-xl-8 col-lg-7">
                                                <div className="card shadow mb-4">

                                                    <div
                                                        className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                                        <h6 className="m-0 font-weight-bold text-primary">{title1}</h6>
                                                        <div className="dropdown no-arrow">
                                                            <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
                                                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                                                            </a>
                                                            <div className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                                                                aria-labelledby="dropdownMenuLink">
                                                                <div className="dropdown-header">{heading}</div>
                                                                <a className="dropdown-item" href="#">{action1}</a>
                                                                <a className="dropdown-item" href="#">{action2}</a>
                                                                <div className="dropdown-divider"></div>
                                                                <a className="dropdown-item" href="#">{extra}</a>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="card-body">
                                                        <div className="chart-area">
                                                        <canvas id="myAreaChart" width="1089" height="240" className="chartjs-render-monitor"></canvas>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>


                                            <div className="col-xl-4 col-lg-5">
                                                <div className="card shadow mb-4">

                                                    <div
                                                        className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                                        <h6 className="m-0 font-weight-bold text-primary">{title2}</h6>
                                                        <div className="dropdown no-arrow">
                                                            <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
                                                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                                                            </a>
                                                            <div className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                                                                aria-labelledby="dropdownMenuLink">
                                                                <div className="dropdown-header">{heading}</div>
                                                                <a className="dropdown-item" href="#">{action1}</a>
                                                                <a className="dropdown-item" href="#">{action2}</a>
                                                                <div className="dropdown-divider"></div>
                                                                <a className="dropdown-item" href="#">{extra}</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="card-body">
                                                        <div className="chart-pie pt-4 pb-2">
                                                        <canvas id="myPieChart" width="519" height="183"  className="chartjs-render-monitor"></canvas>
                                                        </div>
                                                        <div className="mt-4 text-center small">
                                                            <span className="mr-2">
                                                                <i className="fas fa-circle text-primary"></i>{field1}
                                                            </span>
                                                            <span className="mr-2">
                                                                <i className="fas fa-circle text-success"></i>{field2}
                                                            </span>
                                                            <span className="mr-2">
                                                                <i className="fas fa-circle text-info"></i>{field3}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                                }
                                <div className="row">


                                    <div className="col-lg-6 mb-4">
                                        {this.state.statusData.map(({ title1, title2, title3, title4, heading, title5, value5, value1, value2, value3, value4 }) => {
                                            return (

                                                <div className="card shadow mb-4">
                                                    <div className="card-header py-3">
                                                        <h6 className="m-0 font-weight-bold text-primary">{heading}</h6>
                                                    </div>
                                                    <div className="card-body">
                                                        <h4 className="small font-weight-bold">{title1}<span
                                                            className="float-right">{value1}</span></h4>
                                                        <div className="progress mb-4">
                                                            <div className="progress-bar bg-danger" role="progressbar"
                                                                aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                                                        </div>
                                                        <h4 className="small font-weight-bold">{title2}<span
                                                            className="float-right">{value2}</span></h4>
                                                        <div className="progress mb-4">
                                                            <div className="progress-bar bg-warning" role="progressbar"
                                                                aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
                                                        </div>
                                                        <h4 className="small font-weight-bold">{title3}<span
                                                            className="float-right">{value3}</span></h4>
                                                        <div className="progress mb-4">
                                                            <div className="progress-bar" role="progressbar"
                                                                aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                                                        </div>
                                                        <h4 className="small font-weight-bold">{title4}<span
                                                            className="float-right">{value4}</span></h4>
                                                        <div className="progress mb-4">
                                                            <div className="progress-bar bg-info" role="progressbar"
                                                                aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                                                        </div>
                                                        <h4 className="small font-weight-bold">{title5}<span
                                                            className="float-right">{value5}</span></h4>
                                                        <div className="progress">
                                                            <div className="progress-bar bg-success" role="progressbar"
                                                                aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                                        </div>
                                                    </div>
                                                </div>

                                            )
                                        })
                                        }
                                        {this.state.colorData.map(({ color1, color2, color3, color4, color5, color6, color7, color8, value6, value7, value8, value5, value1, value2, value3, value4 }) => {
                                            return (
                                                <div className="row">
                                                    <div className="col-lg-6 mb-4">
                                                        <div className="card bg-primary text-white shadow">
                                                            <div className="card-body">
                                                                {color1}
                                                                <div className="text-white-50 small">{value1}</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6 mb-4">
                                                        <div className="card bg-success text-white shadow">
                                                            <div className="card-body">
                                                                {color2}
                                                                <div className="text-white-50 small">{value2}</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6 mb-4">
                                                        <div className="card bg-info text-white shadow">
                                                            <div className="card-body">
                                                                {color3}
                                                                <div className="text-white-50 small">{value3}</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6 mb-4">
                                                        <div className="card bg-warning text-white shadow">
                                                            <div className="card-body">
                                                                {color4}
                                                                <div className="text-white-50 small">{value4}</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6 mb-4">
                                                        <div className="card bg-danger text-white shadow">
                                                            <div className="card-body">
                                                                {color5}
                                                                <div className="text-white-50 small">{value5}</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6 mb-4">
                                                        <div className="card bg-secondary text-white shadow">
                                                            <div className="card-body">
                                                                {color6}
                                                                <div className="text-white-50 small">{value6}</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6 mb-4">
                                                        <div className="card bg-light text-black shadow">
                                                            <div className="card-body">
                                                                {color7}
                                                                <div className="text-black-50 small">{value7}c</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6 mb-4">
                                                        <div className="card bg-dark text-white shadow">
                                                            <div className="card-body">
                                                                {color8}
                                                                <div className="text-white-50 small">{value8}</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                        }
                                    </div>
                                    {this.state.sectionData.map(({ highlight1, highlight2, para1, para2, para3, para4, title1, title2 }) => {
                                        return (
                                            <div className="col-lg-6 mb-4">

                                                <div className="card shadow mb-4">
                                                    <div className="card-header py-3">
                                                        <h6 className="m-0 font-weight-bold text-primary">{title1}</h6>
                                                    </div>
                                                    <div className="card-body">
                                                        <div className="text-center">
                                                            <img className="img-fluid px-3 px-sm-4 mt-3 mb-4"
                                                                src="img/undraw_posting_photo.svg" alt="..." />
                                                        </div>
                                                        <p>{para1}<a rel="nofollow" href="https://undraw.co/">{highlight1}</a>{para2}</p>
                                                        <a rel="nofollow" href="https://undraw.co/">{highlight2} &rarr;</a>
                                                    </div>
                                                </div>


                                                <div className="card shadow mb-4">
                                                    <div className="card-header py-3">
                                                        <h6 className="m-0 font-weight-bold text-primary">{title2}</h6>
                                                    </div>
                                                    <div className="card-body">
                                                        <p>{para3}</p>
                                                        <p className="mb-0">{para4}</p>
                                                    </div>
                                                </div>

                                            </div>
                                        )
                                    })
                                    }
                                </div>
                            </div>

                        </div>
                        <footer className="sticky-footer bg-white">
                            <div className="container my-auto">
                                <div className="copyright text-center my-auto">
                                    <span>Copyright &copy; Your Website 2021</span>
                                </div>
                            </div>
                        </footer>
                    </div>
                </div>

            </>
        )
    }
}


export default Crm;
