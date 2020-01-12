import * as React from 'react';
import AgSlider from './components/AgSlider';
import OlfSlider from './components/OlfSlider';
import ImpSlider from './components/ImpSlider';
import MyCircle from './components/MyCircle';
//import BarGauge from './components/BarGauge';

class App extends React.PureComponent<{}> {
    public render() {
        return (
            <div>
                <h3>Engine Panel</h3>
                <div className="row mt-2">
                    <div className="col-md-2">
                        <h5 className="text-center">Antigrav Engines</h5>
                        <p className="text-center">g-Factor</p>
                        <AgSlider />
                    </div>
                    <div className="col-md-2">
                        <h5 className="text-center">Impulse Engines</h5>
                        <p className="text-center">Power %</p>
                        <ImpSlider />
                    </div>
                    <div className="col-md-2">
                        <h5 className="text-center">Warp Engines</h5>
                        <p className="text-center">OLF ( Mio.)</p>
                        <OlfSlider />
                    </div>
                    <div className="col-md-6">
                        <div className="card p-2 bg-light">
                            <h4 className="text-center">Signalisations</h4>
                            <div className="row">
                                <div className="col">
                                    <p><strong>OLF</strong></p>
                                    <div id={"olfLabel"}></div>
                                </div>
                                <div className="col">
                                    <p><strong>Speed in ly/s</strong></p>
                                    <div id={"olfSpeed"}></div>
                                </div>
                            </div>
                            <hr />
                            <div className="row mt-2">
                                <div className="col">
                                    <p><strong>Antigrav</strong></p>
                                    <div id={"gLabel"}></div>
                                </div>
                                <div className="col">
                                    <p><strong>Impuls Power (Acc)</strong></p>
                                    <div id={"impLabel"}></div>
                                </div>
                            </div>
                        </div>
                        <div className="card p-2 bg-success mt-3" style={{height: 420}}>
                            <MyCircle />
                        </div>
                    </div>
                </div>
                <div className="card p-2 bg-light mt-3">
                    <h3 className="text-left">Calculations</h3>

                </div>
            </div>
        );        
    }
}

export default App;