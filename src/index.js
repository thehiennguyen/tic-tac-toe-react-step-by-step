import React from 'react';
import ReactDOM from 'react-dom';
import Game from './component/Game';
import GameEnhanced from './component/GameEnhanced';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            originalVersion: true
        }
    }

    onChange() {
        this.setState({ originalVersion: !this.state.originalVersion })
    }

    render() {
        const version = this.state.originalVersion ? 'Original Version' : 'Enhanced Version';
        const game = this.state.originalVersion ? <Game /> : <GameEnhanced />;
        return (
            <>
                <h2>This is based on reactjs.org tutorial</h2>
                <p><i><a href="https://reactjs.org/tutorial/tutorial.html">reference</a></i></p>
                <p>
                    Toggle the checkbox to switch between <strong>Original Version</strong> and <strong>Enhanced Version</strong>
                </p>
                <input type="checkbox"
                    id="version-toggle"
                    value={this.state.originalVersion}
                    onChange={() => this.onChange()} />
                <label htmlFor="version-toggle">{version}</label>
                <fieldset>
                    {game}
                </fieldset>
            </>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);