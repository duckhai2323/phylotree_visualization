export { PhylotreeVisualization } from "./components";
import React from 'react'
import ReactDOM from 'react-dom'
import { PhylotreeVisualization } from "./components";

ReactDOM.render(<PhylotreeVisualization input='(LngfishAu,(LngfishSA,LngfishAf),(Frog,((Turtle,((Sphenodon,Lizard),(Crocodile,Bird))),((((Human,(Cow,Whale)),Seal),(Mouse,Rat)),(Platypus,Opossum)))));' />, document.getElementById("root"));