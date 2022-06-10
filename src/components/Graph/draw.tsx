import React from 'react';

// import countries from './map/countries.json'; FeatureCollection
// import {formatCoordinates} from './cleanData';

// console.log(worldData)
// const scale: number = 200
// const links = formatCoordinates()
// const projection = geoOrthographic().scale(scale)


// const connect: { name: string; coordinates: [number, number] }[] = [{
//   name: 'US',
//   coordinates: [42.546245,1.601554]
// }]

// function returnProjectionValueWhenValid(point: [number, number], index: number) {
//   const retVal: [number, number] | null = projection(point)
//   if (retVal?.length) {
//     return retVal[index]
//   }
//   return 0
// }
import worldData from './map/countries-110m.json';
// import {geoPath, geoEqualEarth, geoOrthographic} from 'd3-geo'
import { feature } from 'topojson-client'
import {  Geometry, Feature, FeatureCollection} from 'geojson'
console.log(worldData)
const draw = ( width: number, height: number, svg: any) => {

  const [geographies, setGeographies] = React.useState<[] | Array<Feature<Geometry | null>>>([])
  
  const mapFeatures: Array<Feature<Geometry | null>> = ( 
    ((feature(worldData, worldData.objects.countries) as unknown) as  FeatureCollection).features
  )
  setGeographies(mapFeatures)

  console.log(geographies, width, height)
  // svg
  //   .select("g.texto")
  //   .append("text")
  //   .attr("fill", '#fff')
  //   .attr("x",width/2 )
  //   .attr("y", height/2)
  //   .text("We the best");
 
  //  // console.log(mapa.features)

  // const mapProjection = geoEqualEarth().scale(scale)

  // svg.select("g.map")
  //   .selectAll("path")
  //   .data(geographies)
  //   .enter()
  //   .append("path")
  //     .attr("d", (d:any) => geoPath().projection(mapProjection)(d) as string )

  // svg.select("g.connect")
  //   .selectAll("circle")
  //   .data(links)
  //   .enter()
  //   .append("circle")
  //     .attr("cx", (d: any)  => returnProjectionValueWhenValid(d.coordinates, 0) )
  //     .attr("cy", (d: any)  => returnProjectionValueWhenValid(d.coordinates, 1) )
  //     .attr("r", 5)
  //     .attr("fill", "red")


  return svg
}

export default draw;