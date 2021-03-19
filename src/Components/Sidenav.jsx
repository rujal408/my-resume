import React, { Component } from 'react'
import PortfolioContext from '../PortfolioContext'
import { NavComponents } from './NavComponents'

export default class Sidenav extends Component {

    render() {
        const { component_id, switchComponent } = this.context
        return (
            <div className="side-nav">
                {NavComponents.map((x, i) => <div
                    className="icons"
                    style={{ color: component_id === x.id ? "#313131e6" : null }}
                    key={x.id}
                    onClick={() => switchComponent(x.id)}
                >
                    {x.icon}
                </div>)}
            </div>
        )
    }
}

Sidenav.contextType = PortfolioContext
