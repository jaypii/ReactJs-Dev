import React, {Component} from 'react';
import Counter from "./counter";

class  Counters extends Component {
   state = { 
      counters: [
         {id: 1, value: 0}, 
         {id: 2, value: 0},
         {id: 3, value: 0},
         {id: 4, value: 0}
      ]
   };

   handleDelete = (counterId) => {
     //console.log('Event handller called', counterId)
     const counters = this.state.counters.filter(c => c.id !== counterId);
     this.setState({ counters });
   }
  
   render() {
      return (
         <div className="row row-cols-2"> 
            {this.state.counters.map(counter => (
            <div className="col">
            <Counter 
               key={counter.id}
               onDelete={this.handleDelete}
               counter={counter}
               //value={counter.value}
               //id={counter.id}
            />
         </div>
        ))}
      </div>
      );
   }
} 
 
export default Counters; 