import { LitElement, html, css, PropertyValueMap } from 'lit';
import { Router } from '@vaadin/router';
import './pages/home-view';
import './pages/gallery-view';
import './pages/events-view';

import { property, customElement } from 'lit/decorators.js';


@customElement('index-sp')
export class IndexSp extends LitElement {
  firstUpdated() {
    // super.firstUpdated();
    const router = new Router(this.shadowRoot?.querySelector('#outlet'));
    router.setRoutes([
      { path: '/', component: 'home-view' },
      { path: '/gallery', component: 'gallery-view' },
      { path: '/events', component: 'events-view' },
      { path: '(.*)', redirect: '/' },
    ]);
  }

  render() {
    return html`
    <main>
      <div id="outlet"></div>
    </main>
    `
  }
}