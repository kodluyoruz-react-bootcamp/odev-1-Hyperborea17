"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _axios = require('axios'); var _axios2 = _interopRequireDefault(_axios);
async function getData(userId) {
    try {
        const { data: users } = await _axios2.default.get('https://jsonplaceholder.typicode.com/users/' + userId);
        const { data: posts } = await _axios2.default.get('https://jsonplaceholder.typicode.com/posts?userId=' + userId);
        console.log(users, posts);
    }
    catch (e) {
        console.error(e);
    }
}
exports. default = getData;
