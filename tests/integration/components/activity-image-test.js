import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | activity-image', function(hooks) {
  setupRenderingTest(hooks);
  test('it renders the given image', async function (assert){
    await render(hbs`
    <ActivityImage
    src="/assets/images/teaching-tomster.png"
    alt="Teaching Tomster"  
    />
    `);
    assert
    .dom('.image img')
    .exists()
    .hasAttribute('src', '/assets/images/teaching-tomster.png')
    .hasAttribute('alt', 'Teaching Tomster')
  })
 
});