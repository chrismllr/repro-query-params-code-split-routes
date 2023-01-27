import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';

export default class SomeOtherRouteController extends Controller {
  queryParams = ['arrayParam'];

  @tracked arrayParam = [];

  get paramType() {
    return typeof this.arrayParam;
  }
  get paramVal() {
    return this.arrayParam;
  }
}
