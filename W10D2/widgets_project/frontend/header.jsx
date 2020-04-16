import React from "react"

// class Header extends React.Component {

//     constructor(prop){
//         super(prop);

//     }


// }


const Header = (props) => {
    console.log(props)
    // console.log(props)
    return (
        <h1>{props.title}</h1>
        // <h1>
        //     Hello
        // </h1>
    )
}

export default Header;