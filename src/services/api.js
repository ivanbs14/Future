import axios from "axios";

// servidor Bugadoo
/* export const api = axios.create({
    baseURL: 'https://tech-test-bugaboo-c1b2073b6432.herokuapp.com'
}); */

// servidor json-server
export const api = axios.create({
    baseURL: 'http://localhost:3000'
});