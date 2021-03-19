import React, { Component } from 'react'
import PortfolioContext from '../PortfolioContext'
import { NavComponents } from './NavComponents'

export default class Contents extends Component {
    
    render() {
        const navComponent = NavComponents.find(x => x.id === this.context.component_id)

        return (
            <div className="content">
                {navComponent.component}
            </div>
        )
    }
}

Contents.contextType = PortfolioContext