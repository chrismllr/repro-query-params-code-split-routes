import { module, test } from 'qunit';
import { setupTest } from 'code-split-routeinfo/tests/helpers';

module('Unit | Controller | some-other-route', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let controller = this.owner.lookup('controller:some-other-route');
    assert.ok(controller);
  });
});
