import React from 'react'
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, DateTime, Legend, Tooltip,LineSeries } from '@syncfusion/ej2-react-charts'
import { lineCustomSeries, LinePrimaryYAxis, LinePrimaryXAxis } from '../../data/dummy'
import { useStateContext } from '../../contexts/ContextProvider'

const LineCharts = () => {
  const { currentMode } = useStateContext()
  return (
    <ChartComponent id='line-chart' height="420px" primaryXAxis={LinePrimaryXAxis} primaryYAxis={LinePrimaryYAxis} chartArea={{ border: {width: 0}}} tooltip={{ enable: true }} background={currentMode === 'Dark' ? '#33373E' : "#fff"} legendSettings={{ textStyle:{ color: currentMode === 'Dark' ? 'white' : "black" }}}>
      <Inject services={[LineSeries, DateTime, Legend, Tooltip]}/>
      <SeriesCollectionDirective>
        {lineCustomSeries?.map((item, i) => (
          <SeriesDirective key={i} {...item}/>
        ))}
      </SeriesCollectionDirective>
    </ChartComponent>
  )
}

export default LineCharts