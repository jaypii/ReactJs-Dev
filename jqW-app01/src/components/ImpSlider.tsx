import * as React from 'react';
import JqxSlider, { ISliderProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxslider';

class ImpSlider extends React.PureComponent<{}, ISliderProps> {
   private impSlider = React.createRef<JqxSlider>();
   constructor(props: {}) {
      super(props);
      this.impValChange = this.impValChange.bind(this);
   }
   public render() {
      return(
         <JqxSlider ref={this.impSlider}
            onChange = {this.impValChange}
            height = {550}
            width = {100}
            orientation = {'vertical'}
            max={100}
            min={0}
            value={0.0000}
            tooltip={false}
            ticksFrequency={10}
            ticksPosition={'top'}
            showTickLabels={true}
            mode={"fixed"}
            step={1.0}
            template={'success'}
         />
      );
   }

   private setPow = (): void => {
      let power = this.impSlider.current!.getOptions("value");
      let acc = power/100 * 700; 
      document.getElementById('impLabel')!.innerHTML = acc + ' km/s2';
   };

   // Event handling
   private impValChange(event: any): void {
     this.setPow();
   }
}

export default ImpSlider;