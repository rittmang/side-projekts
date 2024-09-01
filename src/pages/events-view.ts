import { LitElement, html, css } from "lit";
import { property, customElement } from 'lit/decorators.js';

const logo = new URL('../../../assets/bg-4.jpeg', import.meta.url).href;

@customElement('events-view')
export class Events extends LitElement {
  @property({ type: String }) header = 'events';

  static styles = css`
    :host {
      min-height: 100svh;
      display: flex;
      flex-direction: column;
      align-items: center;
      font-family:'Helvetica','Arial',sans-serif;
      font-size: calc(10px + 3vmin);
      color: #ffffff;
      margin: 0 auto;
      text-align: left;
      user-select:none;
    }

    main {
      margin-left: auto;
      margin-right: auto;
      margin-top: calc(15vh);
      margin-bottom: auto;
      font-size: calc(10px + 3.1vmin);

    }

    .logo {
      margin-top: 12px;
      animation: app-logo-spin infinite 10s linear;
      font-size: calc(10px + 8vmin);
    }

    .button-row {
      text-align: left;
      align-items: center;
    }

    .button-row a {
      background-color: #ffffff44; /* Green background */
      color: white; /* White text */
      padding: 5px 15px; /* Padding around the text */
      text-align: center; /* Center the text */
      text-decoration: none; /* No underline */
      font-size: calc(10px + 1vmin); /* Set font size */
      cursor: pointer; /* Cursor to pointer on hover */
      border: none; /* No border */
      border-radius: 10px; /* Rounded corners */
    }

    .app-footer {
      font-size: calc(12px + 0.5vmin);
      align-items: center;
    }

    .app-footer a {
      margin-left: 0px;
      text-decoration:none;
      color: white;
    }

  `;

  render() {
    return html`
      <style>
        :host {
          background-color: var(--index-sp-background-color, #3b3458);
          background: rgba(0, 0, 0, 0.45) url(${logo}) no-repeat center center
            fixed;
          background-size: cover;
          background-blend-mode: darken;
        }
      </style>
      <main>
        <div class="logo">🔥</div>
        <h1 style="display:table-caption;">${this.header}</h1>
        <iframe
            src="https://lu.ma/embed/calendar/cal-I59dO23qSyVHPFx/events?compact=true"
            width="450"
            height="250"
            frameborder="0"
            style="border: 4px solid #bfcbda88; border-radius: 24px;"
            allowfullscreen=""
            aria-hidden="false"
            tabindex="0"
            >
        </iframe>
      </main>

      <p class="app-footer">
        built by <a href="https://go.rightonrittman.in/twitter" target="_blank">@rittmang</a> ✌🏼
      </p>
    `;
  }
}
