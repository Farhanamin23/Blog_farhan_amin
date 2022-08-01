"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("bootstrap/dist/css/bootstrap.min.css");
var react_router_dom_1 = require("react-router-dom");
var NavBar_1 = require("./Components/NavBar");
var Pages_1 = require("./Pages");
var Context_1 = require("./Pages/Context/Context");
var App = function () {
    var ctx = react_1.useContext(Context_1.myContext);
    return (react_1["default"].createElement(react_router_dom_1.BrowserRouter, null,
        react_1["default"].createElement(NavBar_1["default"], null),
        react_1["default"].createElement(react_router_dom_1.Routes, null,
            ctx ? (react_1["default"].createElement(react_1["default"].Fragment, null,
                react_1["default"].createElement(react_router_dom_1.Route, { path: "/admin", element: react_1["default"].createElement(Pages_1.Admin, null) }),
                react_1["default"].createElement(react_router_dom_1.Route, { path: "/user", element: react_1["default"].createElement(Pages_1.User, null) }))) : (react_1["default"].createElement(react_1["default"].Fragment, null,
                react_1["default"].createElement(react_router_dom_1.Route, { path: "/login", element: react_1["default"].createElement(Pages_1.Login, null) }),
                react_1["default"].createElement(react_router_dom_1.Route, { path: "/register", element: react_1["default"].createElement(Pages_1.Register, null) }))),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "/", element: react_1["default"].createElement(Pages_1.Home, null) }))));
};
exports["default"] = App;
