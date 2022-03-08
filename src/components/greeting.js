import React from "react";
import ReactDOM from "react";
import StarImg from "./Starimg";

// export default function Greetings() {
//    const [isGoingOut, setIsGoingOut] = React.useState(true)

//    function changeMind() { 
//        setIsGoingOut(prevState => 
//               !prevState)
//     }
    
//    return (
//        <div>
//            <button onClick={changeMind}></button>
//            <h1>{isGoingOut ? "Yes": "No"}</h1>
//        </div>
//    )
   
// }

// complex state:  array
// export default function thingsFunc() {
// const [thingsArray, setThingsArray] = React.useState(["Thing 1", "Thing 2"])

//    function addItem() {
//         setThingsArray(prevThingsArray => {
//             return [...prevThingsArray, `Thing ${thingsArray.length + 1}`]
//         })
//    }

//    const thingsElements = thingsArray.map(thing => <p key={thing}>{thing}</p>)

//    return (
//        <div>
//            <button onClick={addItem}>Add Item</button>
//            {thingsElements}
//        </div>
//    )
// }

//  complex state: object
// export default function Profile() {
//     const [contact, setContact] = React.useState({
//         firstName: "John",
//         lastName: "Doe",
//         phone: "+1 (719) 555-1212",
//         email: "itsmyrealname@exampl.com",
//         isFavorite: true
//     })

//     let starIcon = contact.isFavorite ? "star-filled.png" : "star-empty.png"

//     function toggleFavorite() {
//         console.log("Toggle Favorite")
//     }

//     return (
//         <main>
//             <article className="card">
//                 <img src="./images/user.png" className="card--image" />
//                 <div className="card--info">
//                     <img 
//                     src={`../images/${starIcon}`} 
//                     />
//                 </div>
//             </article>
//         </main>
//     )
// }


// complex state: updating state object

//  export default function Profile() {
//      const [contact, setContact] = React.useState({
//          firstName: "John",
//          lastName: "Doe",
//          phone: "+1 (719) 555-1212",
//          email: "itsmyrealname@exampl.com",
//          isFavorite: true
//      })

//      let starIcon = contact.isFavorite ? "star-filled.png" : "star-empty.png"

//      function toggleFavorite() {
//          setContact(prevContact => {
//              return {
//                  ...prevContact,
//                  isFavorite: !prevContact.isFavorite
//              }
//          })
//      }

//      return (
//          <main>
//              <article className="card">
//                  <img src="./images/user.png" className="card--image" />
//                 <div className="card--info">
//                     <img 
//                        src={`../images/${starIcon}`} 
//                        className="card--favorite"
//                        onClick={toggleFavorite}
//                      />
//                  </div>
//              </article>
//          </main>
//      )
//  }


// Setting state from child component
//  export default function Profile() {
//      const [contact, setContact] = React.useState({
//          firstName: "John",
//          lastName: "Doe",
//          phone: "+1 (719) 555-1212",
//          email: "itsmyrealname@exampl.com",
//          isFavorite: true
//      })

//      function toggleFavorite() {
//          setContact(prevContact => {
//              return {
//                  ...prevContact,
//                  isFavorite: !prevContact.isFavorite
//              }
//          })
//      }

//      return (
//          <main>
//              <article className="card">
//                  <img src="./images/user.png" className="card--image" />
//                 <div className="card--info">
//                     <StarImg isFilled={contact.isFavorite}
//                     handleClick={toggleFavorite}
//                     />
//                      <h2 className="card--name">
//                          {contact.firstName} {contact.lastName}
//                      </h2>
//                      <p className="card--contact">
//                          {contact.phone}
//                      </p>
//                      <p className="card--contact">
//                          {contact.email}
//                      </p>
//                  </div>
//              </article>
//          </main>
//      )
//  }


// Passing data around
// import Header from "./Header";

// export default function Apps() {
//     const [user, setUser] = React.useState("Joe")
    
//    return
//        <div>
//            <Header  user={user} />
//            <Body user={user} />
//        </div>
// }

