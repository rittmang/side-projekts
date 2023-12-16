import { LitElement, html, css } from 'lit';
import { property, customElement } from 'lit/decorators.js';

const logo = new URL('../../assets/open-wc-logo.svg', import.meta.url).href;

@customElement('index-sp')
export class IndexSp extends LitElement {
  @property({ type: String }) header = 'Side Projekts';

  static styles = css`
    :host {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size: calc(10px + 3vmin);
      color: #ffffff;
      margin: 0 auto;
      text-align: left;
      background-color: var(--index-sp-background-color, #3b3458);
      background: rgba(0, 0, 0, .45) url('../../assets/bg.jpg') no-repeat center center fixed;
      background-size:cover;
      background-blend-mode: darken;
    }

    main {
      margin-left:auto;
      margin-right:auto;
      margin-top:calc(15vh);
      margin-bottom:auto;
    }

    .logo {
      margin-top: 12px;
      animation: app-logo-spin infinite 10s linear;
      font-size:calc(10px + 10vmin);
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
      text-align:left;
      align-items:center;
    }

    .button-row a{
      background-color: #ffffff44; /* Green background */
      color: white;             /* White text */
      padding: 5px 15px;       /* Padding around the text */
      text-align: center;       /* Center the text */
      text-decoration: none;    /* No underline */
      display: inline-block;    /* Make it inline-block */
      font-size: calc(10px + 1vmin);          /* Set font size */
      cursor: pointer;          /* Cursor to pointer on hover */
      border: none;             /* No border */
      border-radius: 10px;       /* Rounded corners */
    }

    .app-footer {
      font-size: calc(12px + 0.5vmin);
      align-items: center;
    }

    .app-footer a {
      margin-left: 5px;
    }
  `;

  render() {
    return html`
      <main>
        <div class="logo">
          🚀
        </div>
        <h1>${this.header}</h1>
        <div class="button-row">
          <a href="https://share.sideprojekts.com/submit" target="_blank">Submit my projekt</a>
          <a href="https://sideprojekts.substack.com/" target="_blank">Projekt Gallery</a>
        </div
      </main>

      <p class="app-footer">
      </p>
    `;
  }
}
