"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var react_1 = require("react");
function AdminPage() {
    var _a = react_1.useState(), data = _a[0], setData = _a[1];
    var _b = react_1.useState(), selectedUser = _b[0], setSelectedUser = _b[1];
    react_1.useEffect(function () {
        axios_1["default"].get("http://localhost:8000/getalluser", {
            withCredentials: true
        }).then(function (res) {
            setData(res.data);
        });
    }, []);
    if (!data) {
        return null;
    }
    var deleteUser = function () {
        var userid;
        data.forEach(function (item) {
            if (item.username === selectedUser) {
                userid = item._id;
            }
        });
        axios_1["default"].post("http://localhost:8000/deleteuser", {
            id: userid
        }, {
            withCredentials: true
        });
    };
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement("h2", null, "Admin page hanya admin  yang bisa lihat "),
        react_1["default"].createElement("select", { onChange: function (e) { return setSelectedUser(e.target.value); }, name: "deleteuser", id: 'deleteuser', "aria-label": 'deleteuser' },
            react_1["default"].createElement("option", { id: "Pilih User" }, "Pilih Data User"),
            data.map(function (item) {
                return (react_1["default"].createElement("option", { id: item.username }, item.username));
            })),
        react_1["default"].createElement("button", { onClick: deleteUser }, "Delete User")));
}
exports["default"] = AdminPage;
