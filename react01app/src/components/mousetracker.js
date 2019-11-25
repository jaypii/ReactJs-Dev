import React from 'react';

class MouseTracker extends React.Component {
   constructor(props) {
     super(props);
     this.handleMouseMove = this.handleMouseMove.bind(this);
     this.state = { x: 0, y: 0 };
   }
 
   handleMouseMove(event) {
     this.setState({
       x: event.clientX,
       y: event.clientY
     });
   }
 
   render() {
     return (
       <div style={{ height: '100%' }} onMouseMove={this.handleMouseMove}>
         <div class="card-body">
           <p>The current mouse position is ({this.state.x}, {this.state.y})</p>
         </div>
       </div>
     );
   }
}

export default MouseTracker;