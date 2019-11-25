import * as React from 'react';
import JqxSlider, { ISliderProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxslider';

class AgSlider extends React.PureComponent<{}, ISliderProps> {
   private gSlider = React.createRef<JqxSlider>();
   constructor(props: {}) {
      super(props);
      this.gValChange = this.gValChange.bind(this);
   }
   public render() {
      return(
         <JqxSlider ref={this.gSlider}
            onChange = {this.gValChange}
            height = {550}
            width = {100}
            orientation = {'vertical'}
            max={20}
            min={-20}
            value={0}
            tooltip={false}
            ticksFrequency={5}
            ticksPosition={'top'}
            showTickLabels={true}
            layout={'normal'}
            mode={"fixed"}
            step={1}
            template={'info'}
         />
      );
   }

   private setGVal = (): void => {
      let gForce = 9.8066 * this.gSlider.current!.getOptions("value");
      document.getElementById('gLabel')!.innerHTML = gForce + ' m/s2';
   };

   // Event handling
   private gValChange(event: any): void {
     this.setGVal();
   }
}

export default AgSlider;