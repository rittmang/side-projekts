import { LitElement, html, css } from "lit";
import { property, customElement } from 'lit/decorators.js';

const logo = new URL('../../../assets/bg-4.jpeg', import.meta.url).href;

@customElement('home-view')
export class Home extends LitElement {
  @property({ type: String }) header = 'side projekts';

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

    @keyframes app-logo-spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
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
        <div class="logo">🚀</div>
        <h1 style="display:table-caption;">${this.header}</h1>
        <div class="button-row">
          <a href="https://share.sideprojekts.com/submit" target="_blank"
            >Submit my projekt</a
          >
          <a style="background-color: #00000066;" href="https://share.sideprojekts.com/x-twitter" target="_blank"
            >𝕏</a
          >
        </div>
      </main>

      <p class="app-footer">
        built by <a href="https://go.rightonrittman.in/twitter" target="_blank">@rittmang</a> ✌🏼
      </p>
    `;
  }
}
