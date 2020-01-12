// events example
import React from 'react';
//import ReactDOM from 'react-dom';
import {Layer, Line,Rect, Circle, Stage, Group} from 'react-konva';

class MyCircle extends React.PureComponent {

    render() {
        return (
            <Stage width={450} height={450}>
            <Layer>
                <Line
                    points={[60,200,900,200]}
                    stroke="white"
                    strokeWidth={1}
                />
                <Line
                    points={[255,0,255,395]}
                    stroke="white"
                    strokeWidth={1}
                />

                <Circle
                    x={255}
                    y={200}
                    radius={190}
                    stroke="white"
                    strokeWidth={2}
                />
                <Circle
                    x={255}
                    y={200}
                    radius={90}
                    stroke="yellow"
                    strokeWidth={2}
                />
                <Circle
                    x={255}
                    y={200}
                    radius={5}
                    fill="red"
                    strokeWidth={1}
                />
            </Layer>
            </Stage>
        );
    }
}

export default MyCircle;