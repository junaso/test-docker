import proxy from 'http-proxy-middleware';

module.exports = function(app) {
    const headers  = {
        "Content-Type": "application/json",
    }
    app.use(proxy("/visits", { target: "http://localhost:8001/",changeOrigin: true,secure: false,headers: headers}));  
};