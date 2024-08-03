import React, { useEffect, useRef } from "react";
import Matter from "matter-js";
import './styles.css'; // Make sure to import your CSS file

const MixedShapes = () => {
  const sceneRef = useRef(null);

  useEffect(() => {
    const runExample = () => {
      const { Engine, Render, Runner, Composites, Common, MouseConstraint, Mouse, Composite, Bodies } = Matter;

      // create engine
      const engine = Engine.create(),
        world = engine.world;

      // create renderer with 1440px width
      const render = Render.create({
        element: sceneRef.current,
        engine: engine,
        options: {
          width: 1440, // Set width to 1440px
          height: 600,
          background: 'rgb(23,23,23)', // Set the background color here
          showAngleIndicator: true,
          wireframes: false, // Set to false if you want to fill the shapes with color
        },
      });

      // Apply CSS styles to canvas
      render.canvas.style.position = 'absolute';
      render.canvas.style.top = '0';
      render.canvas.style.left = '0';
      render.canvas.style.zIndex = '1'; // Ensure it's behind other elements

      Render.run(render);

      // create runner
      const runner = Runner.create();
      Runner.run(runner, engine);

      // add bodies
      const stack = Composites.stack(20, 20, 8, 1, 0, 0, (x, y) => {
        const sides = Math.round(Common.random(1, 8));
        let chamfer = null;

        if (sides > 2 && Common.random() > 0.7) {
          chamfer = {
            radius: 10,
          };
        }

        switch (Math.round(Common.random(0, 1))) {
          case 0:
            return Common.random() < 0.8
              ? Bodies.rectangle(
                  x,
                  y,
                  Common.random(200, 50),
                  Common.random(200, 100),
                  { chamfer: chamfer }
                )
              : Bodies.rectangle(
                  x,
                  y,
                  Common.random(80, 120),
                  Common.random(25, 30),
                  { chamfer: chamfer }
                );
          case 1:
            return Bodies.polygon(x, y, sides, Common.random(25, 50), {
              chamfer: chamfer,
            });
          default:
            return Bodies.rectangle(x, y, 100, 100);
        }
      });

      Composite.add(world, stack);

      // Customize boundary walls
      Composite.add(world, [
        Bodies.rectangle(720, 0, 1440, 50, { isStatic: true, render: { fillStyle: 'transparent', strokeStyle: '#fff', lineWidth: 0 } }), // Top boundary
        Bodies.rectangle(720, 625, 1440, 50, { isStatic: true, render: { fillStyle: 'transparent', strokeStyle: '#fff', lineWidth: 0 } }), // Bottom boundary
        Bodies.rectangle(1440, 300, 50, 600, { isStatic: true, render: { fillStyle: 'transparent', strokeStyle: '#fff', lineWidth: 0 } }), // Right boundary
        Bodies.rectangle(0, 300, 50, 600, { isStatic: true, render: { fillStyle: 'transparent', strokeStyle: '#fff', lineWidth: 0 } }), // Left boundary
      ]);

      // add mouse control
      const mouse = Mouse.create(render.canvas),
        mouseConstraint = MouseConstraint.create(engine, {
          mouse: mouse,
          constraint: {
            stiffness: 0.2,
            render: {
              visible: false,
            },
          },
        });

      Composite.add(world, mouseConstraint);

      render.mouse = mouse;

      Render.lookAt(render, {
        min: { x: 0, y: 0 },
        max: { x: 1440, y: 600 }, // Adjust viewport size
      });

      // Cleanup on unmount
      return () => {
        Matter.Render.stop(render);
        Matter.Runner.stop(runner);
        Matter.Composite.clear(world, false);
        Matter.Engine.clear(engine);
        render.canvas.remove();
        render.textures = {};
      };
    };

    const cleanup = runExample();

    return () => cleanup();
  }, []);

  return <div className="canvas-container" ref={sceneRef}></div>;
};

export default MixedShapes;
