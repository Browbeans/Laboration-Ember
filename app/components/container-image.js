import Component from '@glimmer/component';
import EmberResolver from 'ember-resolver';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ContainerImageComponent extends Component {
    @tracked isImgBig = false;

    @action toggleSize(){
      this.isImgBig = !this.isImgBig;
    }
}

