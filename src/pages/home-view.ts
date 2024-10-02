import { LitElement, html, css } from "lit";
import { property, customElement } from 'lit/decorators.js';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';


const logo = new URL('../../../assets/bg-4.jpeg', import.meta.url).href;

@customElement('home-view')
export class Home extends LitElement {
  @property({ type: String }) header = 'side projekts';
  @property({ type: String }) countdown = this.calculateCountdown();


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

    .announcement-bar {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      padding: 10px 0;
      text-align: center;
      font-size: calc(8px + 1vmin);
      z-index: 10; /* Ensures the bar stays above other elements */
      // background: rgba(255, 255, 255, 0.2); /* Semi-transparent background for glassmorphic effect */
      background: red ;
      //backdrop-filter: blur(10px); /* Blur effect to create the glass look */
      //-webkit-backdrop-filter: blur(10px); /* Safari support for blur effect */
      border: 0px solid rgba(255, 255, 255, 0.3); /* Border to enhance the glass effect */
      color: white;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
      font: 1rem 'Arial', sans-serif; /* Font for the text */
    }

    .announcement-bar a {
      text-decoration: none; /* Remove underline from link */
      color: inherit; /* Inherit text color from parent element */
      display: flex; /* Use flexbox for alignment */
      justify-content: center; /* Center content horizontally */
      align-items: center; /* Center content vertically */
      width: 100%; /* Ensure full width clickable area */
      height: 100%; /* Ensure full height clickable area */
    }

    .arrow-icon {
      font-size: calc(4px + 1vmin);
      margin-left: 5px; /* Add some space between text and arrow */
      vertical-align: middle; /* Align the icon vertically in line with the text */
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

  firstUpdated() {
    this.startCountdown();
  }

  calculateCountdown() {
    const targetDate = new Date('October 12, 2024 19:30:00 PST');
    const now = new Date();

    const timeDifference = targetDate.getTime() - now.getTime();

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    let countdownString = "";

    if (days > 0) {
      countdownString += `${days} DAY${days > 1 ? 'S' : ''} `;
    }
    else if (hours > 0) {
      countdownString += `${hours} HOUR${hours > 1 ? 'S' : ''} `;
    }
    else if (minutes > 0) {
      countdownString += `${minutes} MINUTE${minutes > 1 ? 'S' : ''} `;
    }
    else if (seconds > 0 && days === 0 && hours === 0) {
      // Only show seconds if there are less than an hour remaining.
      countdownString += `${seconds} SECOND${seconds > 1 ? 'S' : ''} `;
    }

    if (timeDifference > 0) {
      return countdownString.trim(); // Trim any trailing spaces
    } else {
      return "Event has started!";
    }
  }

  startCountdown() {
    setInterval(() => {
      this.countdown = this.calculateCountdown();
    }, 1000);
  }

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
        <div class="announcement-bar">
        <a href="https://share.sideprojekts.com/showcase?utm_source=sideprojekts-banner">
          <div>
            showcase #001 in ${this.countdown}
            <b style="margin-left:4px;">#SFTechWeek</b>
          </div>
        </a>
      </div>
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
