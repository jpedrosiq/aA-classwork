import React from "react";
// import Header from "./header"
import Header from "./header"

class Tabs extends React.Component {

    constructor(props) {
        super(props);
        this.state = { selected: 0 }
        console.log(this.props)
    }

    render() {
        console.log(this.props.tabs)
        return (
            <div>
                {this.props.tabs.map((obj,i) => <Header key={i} title={obj.title}/>)}
                {/* <Header />
                <Header />
                <Header /> */}
            </div>
        )

    }

}  

export default Tabs;