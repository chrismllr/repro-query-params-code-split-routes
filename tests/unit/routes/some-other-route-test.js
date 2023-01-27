import { module, test } from 'qunit';
import { setupTest } from 'code-split-routeinfo/tests/helpers';

module('Unit | Route | some-other-route', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:some-other-route');
    assert.ok(route);
  });
});
