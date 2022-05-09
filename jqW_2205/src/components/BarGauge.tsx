import * as React from 'react';
 
import 'jqwidgets-scripts/jqwidgets/styles/jqx.base.css';
 
import JqxBarGauge, { IBarGaugeProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbargauge';
 
class BarGauge extends React.PureComponent<{}, IBarGaugeProps> {
 
    constructor(props: {}) {
        super(props);
 
        this.state = {
            max: 100,
            values: [20, 40, 50, 67, 85]
        };
    }
 
    public render() {
        return (
            <div className="card p-2">
            <h5>Bar Gauge</h5>
            <JqxBarGauge 
                style={{ marginTop: 0, marginLeft: 0 }}
                width={400} height={400} max={this.state.max} values={this.state.values}
            />
            </div>
        );
    }
 
}
 
export default BarGauge;