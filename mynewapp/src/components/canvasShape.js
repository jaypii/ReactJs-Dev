import React, { Component } from 'react';
import Konva from 'konva';

import { Stage, Layer, Rect, Text, Circle, Line, Shape } from 'react-konva';

class CanvasShape extends Component {
   render() {
      return (
         <Stage width={800} height={600}>
            <Layer>
               <Text text="Some text on canvas" fontSize={15} />
               <Rect
                  x={20}
                  y={50}
                  width={200}
                  height={100}
                  fill="red"
                  shadowBlur={15}
               />
               <Circle 
                  x={400}
                  y={100}
                  radius={100}
                  fill="green"
                  stroke="yellow"
                  strokeWidth={2}
               />
               <Line
                  x={20}
                  y={300}
                  points={[0, 0, 100, 0, 100, 100]}
                  tension={0.1}
                  closed
                  stroke="black"
                  strokeWidth={1}
                  fillLinearGradientStartPoint={{ x: -50, y: -50 }}
                  fillLinearGradientEndPoint={{ x: 50, y: 50 }}
                  fillLinearGradientColorStops={[0.1, 'blue', 0.25, 'green', 0.75, 'yellow', 1, 'red']}
               />
               <Shape
                sceneFunc={(context, shape) => {
                  context.beginPath();
                  context.moveTo(100, 500);
                  context.lineTo(320, 220);
                  context.quadraticCurveTo(150, 120, 250, 270);
                  context.closePath();
                  // (!) Konva specific method, it is very important
                  context.fillStrokeShape(shape);
                }}
                fill="#00D2FF"
                stroke="black"
                strokeWidth={2}
              />
            </Layer>
         </Stage>
      );
    } 
}

export default CanvasShape;
