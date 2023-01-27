import EmberRouter from '@embroider/router';
import config from 'code-split-routeinfo/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('some-route');
  this.route('some-other-route');
});
