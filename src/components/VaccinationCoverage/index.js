import {BarChart, Bar, XAxis, YAxis, Legend} from 'recharts'

import './index.css'

const VaccinationCoverage = ({barChartData}) => {
  const DataFormatter = number => {
    if (number > 1000) {
      return `${(number / 1000).toString()}k`
    }
    return number.toString()
  }

  return (
    <div className="vaccination-coverage-main-container">
      <h1>Vaccination Coverage</h1>

      <BarChart
        width={1000}
        height={500}
        data={barChartData}
        margin={{
          top: 15,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <XAxis
          dataKey="vaccineDate"
          tick={{
            stroke: 'gray',
            strokeWidth: 1,
          }}
        />
        <YAxis
          tickFormatter={DataFormatter}
          tick={{
            stroke: 'gray',
            strokeWidth: 0,
          }}
        />
        <Legend
          wrapperStyle={{
            padding: 30,
          }}
        />
        <Bar dataKey="dose1" name="dose1" fill="#5a8dee" barSize="20%" />
        <Bar dataKey="dose2" name="dose2" fill="#f54394" barSize="20%" />
      </BarChart>
    </div>
  )
}

export default VaccinationCoverage
