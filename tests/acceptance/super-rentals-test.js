import { module, test } from 'qunit';
import { click, visit, currentURL } from '@ember/test-helpers'
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | super rentals', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /super-rentals', async function (assert){
    await visit('/');

    assert.equal(currentURL(), '/')
    assert.dom(`h2`).hasText('Välkommen till Vara')

    assert.dom('.jumbo a.button').hasText('Om oss')
    await click('.jumbo a.button');

    assert.equal(currentURL(), '/about');
  });
});
