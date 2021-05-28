import React from 'react'

class ParentToChildClass extends React.Component {
    render() {
        return (
             <div>
                 <h1>This is class prop</h1>
                 <h1> {this.props.classProp} </h1>
            </div>
        )
    }
}

export default ParentToChildClass