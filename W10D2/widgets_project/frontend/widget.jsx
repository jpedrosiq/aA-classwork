import React from "react";
import Clock from "./clock";
import Tabs from "./tabs";
import Header from "./header"

// Root in project
class Widget extends React.Component {

    constructor(props){
        super(props);

        this.tabsArr = [
            {title: "tab1", content: "one"},
            {title: "tab2", content: "two"},
            {title: "tab3", content: "three"}
        ]
    }

    render(){

        return (
            <div>
                <Header />
                <div className="clock">
                    <Clock/>
                </div>
                <div>
                    <Tabs tabs={this.tabsArr}/>
                </div>
            </div>
        )
    }
}

export default Widget;