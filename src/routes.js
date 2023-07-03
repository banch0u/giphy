import App from "./App";

function routeItem(id, title, path, component) {
  return {
    id,
    title,
    path,
    component,
  };
};
const routes = {
  home: routeItem(1, 'app', "/", App),

};

const routesArr = Object.values(routes);

export { routes, routesArr };
