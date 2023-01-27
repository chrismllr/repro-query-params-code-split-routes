import Route from '@ember/routing/route';

export default class SomeOtherRouteRoute extends Route {
  model(params) {
    return params;
  }
  deserializeQueryParam(val) {
    return val;
  }
  serializeQueryParam(val) {
    return val;
  }
}
