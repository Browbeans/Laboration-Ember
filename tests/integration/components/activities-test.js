import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | activities', function(hooks) {
  setupRenderingTest(hooks);

    test('it renders information about activities in Vara', async function (assert) {
      await render(hbs`<Activities />`)
      assert.dom(`article`).hasClass('rental')
      assert.dom('article h3').hasText('Varabadet')
      assert.dom('article .detail.owner').includesText('Bad och lek för 20 spänn!')
      assert.dom('article .detail.type').includesText('Alltid 24°C')
      assert.dom('article .detail.location').includesText('Johan brinksgata 21')
      assert.dom('article .detail.bedrooms').includesText('God mat och knapriga snacks')
      assert.dom('article .image').exists();
    })
});
