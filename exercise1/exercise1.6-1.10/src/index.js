import React from "react";
import ReactDOM from "react-dom";
import "./style.css";

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			feedbackGiven: false,
			good: JSON.parse(localStorage.getItem("good")) || 0,
			neutral: JSON.parse(localStorage.getItem("neutral")) || 0,
			bad: JSON.parse(localStorage.getItem("bad")) || 0,
			average: 0,
			goodPercentage: 0
		};
	}

	addFeedback = (feedback) => () => {
		this.setState(
			(prevState) => ({
				[feedback]: prevState[feedback] + 1,
				feedbackGiven: true
			}),
			this.updateStatistics
		);
	};

	updateStatistics = () => {
		this.updateFeedbackAverage();
		this.updateGoodPercentage();
	};

	updateFeedbackAverage = () => {
		//debugger
		let sum = this.state.good * 1 + this.state.bad * -1;
		let n = this.state.good + this.state.neutral + this.state.bad;
		this.setState({ average: n !== 0 ? (sum / n).toFixed(2) : 0 });
	};

	updateGoodPercentage = () => {
		let n = this.state.good + this.state.neutral + this.state.bad;
		this.setState({
			goodPercentage: n !== 0 ? ((this.state.good / n) * 100).toFixed(2) : 0
		});
	};

	render() {
		localStorage.setItem("good", JSON.stringify(this.state.good));
		localStorage.setItem("neutral", JSON.stringify(this.state.neutral));
		localStorage.setItem("bad", JSON.stringify(this.state.bad));
		return (
			<div>
				<h1>Saamani palvelu oli</h1>
				<div className="buttons">
					<Button displayName="Hyvää" handler={this.addFeedback("good")} color="#E5FFCC"></Button>
					<Button displayName="Neutraalia" handler={this.addFeedback("neutral")} color="#F0F0F0"></Button>
					<Button displayName="Kehnoa" handler={this.addFeedback("bad")} color="#FF9999"></Button>
				</div>

				<Statistics
					title="Palautestatistiikka"
					shouldDisplayStats={this.state.feedbackGiven}
					stats={{
						good: this.state.good,
						neutral: this.state.neutral,
						bad: this.state.bad,
						average: this.state.average,
						goodPercentage: this.state.goodPercentage
					}}
				></Statistics>
			</div>
		);
	}
}

const Button = ({ displayName, handler, color }) => {
	return (
		<button style={{ backgroundColor: color }} onClick={handler}>
			{displayName}
		</button>
	);
};

const Statistics = ({ title, shouldDisplayStats, stats }) => {
	if (!shouldDisplayStats) {
		return (
			<div>
				<h2>{title}</h2>
				<i>Anna palautetta nähdäksesi statistiikat</i>
			</div>
		);
	}
	return (
		<div>
			<h2>{title}</h2>
			<table>
				<tbody>
					<Statistic displayName="Hyviä" displayValue={stats.good}></Statistic>
					<Statistic displayName="Neutraaleja" displayValue={stats.neutral}></Statistic>
					<Statistic displayName="Kehnoja" displayValue={stats.bad}></Statistic>
					<Statistic displayName="Keskiarvo" displayValue={stats.average}></Statistic>
					<Statistic
						displayName="Positiivisia palautteita"
						displayValue={stats.goodPercentage}
						isPercentage
					></Statistic>
				</tbody>
			</table>
		</div>
	);
};

const Statistic = ({ displayName, displayValue, isPercentage }) => {
	return (
		<tr>
			<td>
				<b>{displayName}</b>
			</td>
			<td>
				{displayValue}
				{isPercentage ? "%" : ""}
			</td>
		</tr>
	);
};

ReactDOM.render(<App />, document.getElementById("root"));
