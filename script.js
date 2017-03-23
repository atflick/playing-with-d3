
let graphData = []

randomize(graphData)

// creating random data for fun
function randomize(dataset) {
  for (let i = 0; i < 10; i++) {
    let num = Math.floor(Math.random() * 30);
    dataset.push(num);
  }
}


d3.select('body') // select element
  .append('h1') // append creates/adds specified element
  .text('Welcome to playing with D3!')
  .style('color', 'red') // add css style
  .attr('class', 'heading-text') // add css class, or any attribute

// Using Divs
d3.select('.bar-chart').selectAll('div') // selects all divs within barchart
  .data(graphData) // counts and parses data set defined
  .enter() // creates placeholder element
  .append('div') // takes placeholder from enter and receives data value
  .text((d) => {return d}) // text takes a function as an argument
  .style('width',(d) => {return d * 10 + 'px'}) // style also takes a callback as an argument

// Using SVG rectangles
let h = 200  // height of SVG
let w = 600  // width of SVG
let padding = 2

d3.select('.bar-chart-svg').selectAll('rect')
  .data(graphData)
  .enter()
  .append('rect')
  .attr('x', (d, i) => {return i * (w / graphData.length)}) // data includes an index counter as second argument for data position
  .attr('width', w / graphData.length - padding)
  .attr('height', (d) => {return d * 5})
  .attr('y', (d) => {return h - d * 5})

d3.select('.bar-chart-svg').selectAll('text')
  .data(graphData)
  .enter()
  .append('text')
  .text((d) => {return d})
  .attr('x', (d, i) => {return (i * (w / graphData.length))})
  .attr('y', (d) => {return h - d * 5})
