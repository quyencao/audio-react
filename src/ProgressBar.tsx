import React from "react"
import "./ProgressBar.css"

export const ProgressBar = () => {
    return (
        <input
                    type='range' min={0} max={0.999999} step='any'
                    // value={played}
                    // onMouseDown={this.handleSeekMouseDown}
                    // onChange={this.handleSeekChange}
                    // onMouseUp={this.handleSeekMouseUp}
                  />
    )
}
