"use client"

import React, { Component } from "react"

interface State {
  date: Date
}

class LocalTime extends Component<{}, State> {
  private timerID!: NodeJS.Timeout

  constructor(props: {}) {
    super(props)

    this.state = { date: new Date() }
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  tick() {
    this.setState({
      date: new Date(),
    })
  }

  render() {
    return (
      <div>
        {this.state.date.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })}
      </div>
    )
  }
}

export default LocalTime
