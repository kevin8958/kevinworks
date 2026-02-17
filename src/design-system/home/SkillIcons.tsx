// /* eslint-disable consistent-return */
// /* eslint-disable func-names */
// /* eslint-disable react-hooks/exhaustive-deps */

// 'use client';

// import {
//   forceCenter,
//   forceCollide,
//   forceManyBody,
//   forceSimulation,
//   type SimulationNodeDatum,
// } from 'd3-force';
// import { scaleLinear } from 'd3-scale';
// import { select } from 'd3-selection';
// import 'd3-transition';
// import React, { useEffect, useRef, useState } from 'react';

// const SkillIcons = () => {
//   const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
//   const analysisData = [
//     {
//       appId: 1,
//       name: 'HTML',
//       usage: 0.05,
//       iconUrl: '/icon/html.svg',
//     },
//     {
//       appId: 2,
//       name: 'CSS',
//       usage: 0.05,
//       iconUrl: '/icon/css.svg',
//     },
//     {
//       appId: 3,
//       name: 'JavaScript',
//       usage: 0.18,
//       iconUrl: '/icon/js.svg',
//     },
//     {
//       appId: 4,
//       name: 'TypeScript',
//       usage: 0.15,
//       iconUrl: '/icon/ts.svg',
//     },
//     {
//       appId: 5,
//       name: 'React',
//       usage: 0.2,
//       iconUrl: '/icon/react.svg',
//     },
//     {
//       appId: 6,
//       name: 'Next.js',
//       usage: 0.08,
//       iconUrl: '/icon/next.svg',
//     },
//     {
//       appId: 7,
//       name: 'Vue.js',
//       usage: 0.07,
//       iconUrl: '/icon/vue.svg',
//     },
//     {
//       appId: 8,
//       name: 'Nuxt.js',
//       usage: 0.05,
//       iconUrl: '/icon/nuxt.svg',
//     },
//     {
//       appId: 9,
//       name: 'MobX',
//       usage: 0.03,
//       iconUrl: '/icon/mobx.svg',
//     },
//     {
//       appId: 11,
//       name: 'Tailwind CSS',
//       usage: 0.12,
//       iconUrl: '/icon/tailwind.svg',
//     },
//     {
//       appId: 12,
//       name: 'Material-UI',
//       usage: 0.08,
//       iconUrl: '/icon/material-ui.svg',
//     },
//   ];

//   const containerRef = useRef<HTMLDivElement>(null);
//   const svgRef = useRef(null);
//   const tooltipRef = useRef(null);

//   useEffect(() => {
//     if (!analysisData || !svgRef.current || !containerRef.current) return;

//     const svg = select(svgRef.current);

//     svg.selectAll('*').remove(); // Clear previous content

//     svg.attr('width', dimensions.width).attr('height', dimensions.height);

//     const sizeScale = scaleLinear()
//       .domain([0, Math.max(...analysisData.map((d: any) => d.usage * 100))])
//       .range([20, 60]); // 최소 20px, 최대 60px

//     const simulation = forceSimulation(analysisData as SimulationNodeDatum[])
//       .force('charge', forceManyBody().strength(200))
//       .force('center', forceCenter(dimensions.width / 2, dimensions.height / 2))
//       .force(
//         'collision',
//         forceCollide().radius((d: any) => sizeScale(d.usage * 100) + 5),
//       );

//     const nodes = svg
//       .selectAll('g')
//       .data(analysisData)
//       .enter()
//       .append('g')
//       .attr('transform', () => `translate(${dimensions.width / 2},${dimensions.height / 2})`);

//     nodes
//       .append('circle')
//       .attr('r', (d: any) => sizeScale(d.usage * 100))
//       .style('fill', 'rgba(80, 179, 255, 0.3)');

//     nodes
//       .append('image')
//       .attr('xlink:href', (d: any) => d.iconUrl)
//       .attr('x', (d: any) => -sizeScale(d.usage * 100 * 0.8) / 2)
//       .attr('y', (d: any) => -sizeScale(d.usage * 100 * 0.8) / 2)
//       .attr('width', (d: any) => sizeScale(d.usage * 100 * 0.8))
//       .attr('height', (d: any) => sizeScale(d.usage * 100 * 0.8));
//     nodes
//       .on('mouseover', function (event, d: any) {
//         select(this)
//           .select('circle')
//           .attr('r', sizeScale(d.usage * 100) * 1.1);

//         select(this)
//           .select('image')
//           .attr('width', sizeScale(d.usage * 100 * 0.9) * 1.1)
//           .attr('height', sizeScale(d.usage * 100 * 0.9) * 1.1)
//           .attr('x', (-sizeScale(d.usage * 100 * 0.9) * 1.1) / 2)
//           .attr('y', (-sizeScale(d.usage * 100 * 0.9) * 1.1) / 2);
//       })
//       .on('mouseout', function (event, d: any) {
//         select(this)
//           .select('circle')
//           .attr('r', sizeScale(d.usage * 100));

//         select(this)
//           .select('image')
//           .attr('width', sizeScale(d.usage * 100 * 0.9))
//           .attr('height', sizeScale(d.usage * 100 * 0.9))
//           .attr('x', -sizeScale(d.usage * 100 * 0.9) / 2)
//           .attr('y', -sizeScale(d.usage * 100 * 0.9) / 2);
//       });

//     simulation.on('tick', () => {
//       nodes.attr('transform', (d: any) => `translate(${d.x},${d.y})`);
//     });

//     const handleResize = () => {
//       if (containerRef.current) {
//         const { width, height } = containerRef.current.getBoundingClientRect();
//         setDimensions({ width: width < 380 ? 320 : width, height });
//       }
//     };

//     window.addEventListener('resize', handleResize);

//     // 초기에 한 번 실행하여 dimensions 설정
//     handleResize();

//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, [dimensions.width, dimensions.height]);

//   return (
//     <div className="relative flex size-full items-center justify-center overflow-scroll">
//       <div ref={containerRef} className="size-full">
//         <svg ref={svgRef} />
//       </div>
//       <div
//         ref={tooltipRef}
//         className="absolute hidden flex-col gap-2 rounded-md bg-white p-4 text-neutral-600 shadow-md"
//       />
//     </div>
//   );
// };

// export default SkillIcons;
