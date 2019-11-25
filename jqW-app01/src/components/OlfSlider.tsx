import * as React from 'react';
import JqxSlider, { ISliderProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxslider';

class OlfSlider extends React.PureComponent<{}, ISliderProps> {
   private olfSlider = React.createRef<JqxSlider>();
   constructor(props: {}) {
      super(props);
      this.olfValChange = this.olfValChange.bind(this);
   }
   public render() {
      return(
         <JqxSlider ref={this.olfSlider}
            onChange = {this.olfValChange}
            height = {550}
            width = {100}
            orientation = {'vertical'}
            max={5}
            min={0}
            value={0.0000}
            tooltip={false}
            ticksFrequency={1}
            ticksPosition={'top'}
            showTickLabels={true}
            mode={"fixed"}
            step={0.2}
            template={'danger'}
         />
      );
   }

   private setOLF = (): void => {
      const c = 300000; // Lightsped in km/s
      const ly = 9.4607e12; // Ligh Year im km
      let olf = this.olfSlider.current!.getOptions("value");
      let olfSpeed = olf * c * 1e6/ly;
      document.getElementById('olfLabel')!.innerHTML = Math.round(olf*100)/100 + ' Mio.';
      document.getElementById('olfSpeed')!.innerHTML = Math.round(olfSpeed * 10000)/10000 + ' ly/s';
   };

   // Event handling
   private olfValChange(event: any): void {
     this.setOLF();
   }
}

export default OlfSlider;