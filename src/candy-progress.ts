import { css, customElement, html, LitElement, property } from 'lit-element';

/**
 * Polymer element that creates a "candy progress bar".
 *
 * There are multiple behaviors implemented:
 * - setting progress variable will manifest by changing the
 * candy striping, according to the progress value (in percentage).
 * - setting loop variable to true will result in candy striping
 * repetetly filling the progress bar
 * - setting fill variable to true will fill the progress bar and leave it filled
 *
 * ### Example
 *
 * ```html
 * <candy-progress class="orange" loop></candy-progress>
 * <candy-progress class="blue" progress="50"></candy-progress>
 * ```
 */
@customElement('candy-progress')
export class CandyProgress extends LitElement {
	/**
	 * Value that sets the bar fill explicitly, the value
	 * is in percentage.
	 * The value range should be 0-100.
	 */
	@property({type: Number})
	public progress: number = 0;

	/**
	 * If set to true the bar is going to fill repetitively.
	 */
	@property({type: Boolean})
	public loop: boolean = false;

	/**
	 * If set to true the bar is going to fill and stay filled.
	 */
	@property({type: Boolean})
	public fill: boolean = false;

	/**
	 * Number represents the speed of bar filling. Fitting values are
	 * 1 - 100, where 1 is the slowest and 100 the fastest.
	 */
	@property({type: Number})
	public speed: number = 75;

	private intervalId: number | null = null;

	static get styles() {
		return css`
			/* The animation is based on https://css-tricks.com/css3-progress-bars/ */
			.meter {
				height: var(--candy-progress-height);
				width: var(--candy-progress-width);
				max-width: 480px;
				position: relative;
				background: #ddd;
				-moz-border-radius: 25px;
				-webkit-border-radius: 25px;
				border-radius: 25px;
				margin-top: 8px;
				padding: 2px;
				box-shadow: inset 0 -1px 1px rgba(255,255,255,0.3);
			}
			.meter > span {
				display: block;
				height: 100%;
				border-radius: 20px;
				box-shadow:
					inset 0 2px 9px  rgba(255,255,255,0.3),
					inset 0 -2px 6px rgba(0,0,0,0.4);
				position: relative;
				overflow: hidden;
			}
			.color > span {
				background-color: var(--candy-progress-color) ;
				background-image: linear-gradient(to bottom, var(--candy-progress-color), var(--candy-progress-secondary-color));
			}
			.meter > span:after, .animate > span > span {
				content: "";
				position: absolute;
				top: 0; left: 0; bottom: 0; right: 0;
				background-image: linear-gradient(
					-45deg,
					rgba(255, 255, 255, .2) 25%,
					transparent 25%,
					transparent 50%,
					rgba(255, 255, 255, .2) 50%,
					rgba(255, 255, 255, .2) 75%,
					transparent 75%,
					transparent
				);
				z-index: 1;
				background-size: 50px 50px;
				animation: move 2s linear infinite;
			}
			@keyframes move {
				0% {
					background-position: 0 0;
				}
				100% {
					background-position: 50px 50px;
				}
			}
		`;
	}

	protected render() {
		return html `
		<div class="meter color">
			<span style="width: ${this.progress}%"><span></span></span>
		</div>`;
	}

	/**
	 * Once all the parameters are ready see if
	 * either fill or loop parameters are defined and
	 * handle both cases.
	 */
	protected firstUpdated() {
		// Handle fill or loop case
		this.handleFillAndLoopCase();
	}

	protected updated(changedProperties: Map<string, any>) {
		if (changedProperties.has('speed')) {
			this.handleFillAndLoopCase();
		}
	}

	/**
	 * Sets an interval of execution and fills the progress bar. Once the bar is filled
	 * either it restarts the progress bar (loop) or it stops the execution and remains full
	 * (fill).
	 */
	private handleFillAndLoopCase() {
		if (this.intervalId) {
			window.clearInterval(this.intervalId);
		}

		const normalizedSpeed = this._normalizeSpeed(this.speed);
		this.intervalId = window.setInterval(() => {
			if ((this.loop || this.fill) && this.progress < 100) {
				this.progress++;
			} else if (this.loop) {
				this.progress = 0;
			}
		}, normalizedSpeed);
	}

	/**
	 * Normalizes speed of the bar filling. This is necessary so the user can
	 * input intuitive values 1 slow, 100 fast. However, in the interval timing
	 * executing every 100ms is the slowest execution. Therefore,
	 * we need to normalize the values given from user.
	 *
	 * @param speed Number input from user that represent the intuitive speed of bar filling.
	 */
	private _normalizeSpeed(speed: number) {
		return speed ? Math.abs(speed - 100) : 25;
	}
}
