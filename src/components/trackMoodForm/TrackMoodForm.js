// import "../trackMoodForm/trackmoodform.scss";
// import React, { Component } from "react";
// import axios from "axios";

// class TrackMoodForm extends Component {
//   state = {
//     moodName: true,
//     note: true,
//   };
//   handleSubmit = (event) => {
//     event.preventDefault();

//     const input1 = event.target[0].value;
//     const input2 = event.target[1].value;

//     const request = {
//       moodName: input1,
//       note: input2,
//     };
//     axios.post("http://localhost:8080/mood-user", request).then((response) => {
//       console.log(response.data);
//       this.setState({
//         moodName: input1,
//         note: input2,
//       });
//     });
//     alert("video uploaded ");
//     this.props.history.push("/");
//   };

//   render() {
//     return (
//       <form>
//         <button value="happy" name="happy">
//           Happy
//         </button>
//         <button value="sad" name="sad">
//           Sad
//         </button>
//         <button value="Frustrated" name="Frustrated">
//           Frustrated
//         </button>
//         <button value="Tired" name="Tired">
//           Tired
//         </button>
//         <button value="Drained" name="Drained">
//           Drained
//         </button>
//         <textarea name="notes" placeholder="my thoughts for today"></textarea>
//         <button type="submit" className="submit__btn">
//           done
//         </button>
//       </form>
//     );
//   }
// }

// // export default TrackMoodForm;

// //   function moodValue(e) {
// //     e.preventDefault();
// //     console.log(e.target.value);
// //     console.log("valuetaken");
// //   }

// //   function handleSubmit(event) {
// //     event.preventDefault();
// //     alert("button works");

// //     const input1 = event.target[0].value;
// //     const input2 = event.target[1].value;

// //     const request = {
// //       title: input1,
// //       description: input2,
// //     };
// //   }


