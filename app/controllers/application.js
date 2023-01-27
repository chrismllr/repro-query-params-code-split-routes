import Controller from '@ember/controller';
import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class ApplicationController extends Controller {
  @service router;
  @tracked paramsToPass = [1, 2];

  // idx = 1;

  // constructor(owner) {
  //   super(owner);
  //   this.router.on('routeDidChange', () => {
  //     this.idx++;
  //     this.paramsToPass = [this.idx, this.idx + 1];
  //   });
  // }
}
