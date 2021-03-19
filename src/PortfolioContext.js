import React from 'react'

const PortfolioContext = React.createContext()

export class PortfolioProvider extends React.Component {
    state = {
        component_id: 1
    }

    switchComponent = (id) => {
        this.setState({ component_id: id })
    }

    render() {
        const { switchComponent } = this
        return (
            <PortfolioContext.Provider value={{
                ...this.state,
                switchComponent
            }}>
                {this.props.children}
            </PortfolioContext.Provider>
        )
    }
}

export default PortfolioContext;




