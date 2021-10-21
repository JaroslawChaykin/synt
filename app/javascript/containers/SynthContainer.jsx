import React, { PureComponent } from 'react'

import StepSequencer from "../module_components/StepSequencer";

export default class SynthContainer extends PureComponent {

  renderSynthRoom = () => {

    return (
      <div>
        <StepSequencer />
      </div>
    )
  }

  render() {

    return (
      <div className="SynthContainer">
        {this.renderSynthRoom()}
        <div id="sequencer" className="container sequencer">
        </div>
        <div className="toggle-play">
          <button id="play-button" className="play-button">Старт</button>
        </div>
      </div>
    )
  }
}
