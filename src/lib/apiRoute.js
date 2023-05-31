let apiRoute;
const port = 4000;
const apiUrls = {
  development: `http://localhost:${port}/`,
  production: ``,
};

if (window.location.hostname === "localhost") {
  apiRoute = apiUrls.development;
} else {
  apiRoute = apiUrls.production;
}

export default apiRoute;
