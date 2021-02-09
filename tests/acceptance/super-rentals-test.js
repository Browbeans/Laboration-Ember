import { assert, module, test } from 'qunit';
import { click, visit, currentURL } from '@ember/test-helpers'
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | super rentals', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /super-rentals', async function (assert){
    await visit('/');

    assert.equal(currentURL(), '/')
    assert.dom('nav').exists(); 
    assert.dom('h1').hasText('Vara Turistbyrå')
    assert.dom(`h2`).hasText('Välkommen till Vara')

    assert.dom('.jumbo a.button').hasText('Om oss')
    await click('.jumbo a.button');

    assert.equal(currentURL(), '/about');
  });

  test('visiting /about', async function (assert) {
    await visit('/about')

    assert.equal(currentURL(), '/about');
    assert.dom('nav').exist();
    assert.dom('h1').hasText('Vara Turistbyrå') 
    assert.dom('h2').hasText('Om Vara'); 

    assert.dom('.jumbo a.button').hasText('Startsida');
    await click('.jumbo a.button');

    asser.equal(currentURL(), '/index');
  });
  
  test('visiting /getting-in-touch', async function (assert) {
    await visit('/getting-in-touch'); 
    
    assert.equal(currentURL(), 'getting-in-touch'); 
    assert.dom('nav').exist();
    assert.dom('h1').hasText('Vara Turistbyrå') 
    asser.dom(`h2`).hasText('Kontakta oss'); 
    
    assert.dom('.jumbo a.button').hasText('Om oss'); 
    await click('.jumbo a.button'); 
    
    assert.equal(currentURL(), '/about'); 
  });
  
  test('navigating using the nav-bar', async function (assert) {
    await visit('/');

    assert.dom('nav').exists();
    assert.dom('nav a.menu-index').hasText('SuperRentals');
    assert.dom('nav a.menu-about').hasText('About');
    assert.dom('nav a.menu-contact').hasText('Contact');

    await click('nav a.menu-about');
    assert.equal(currentURL(), '/about');

    await click('nav a.menu-contact');
    assert.equal(currentURL(), '/getting-in-touch');

    await click('nav a.menu-index');
    assert.equal(currentURL(), '/');
  });

});
