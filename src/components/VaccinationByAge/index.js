import {PieChart, Pie, Legend, Cell} from 'recharts'
import './index.css'

const VaccinationByAge = ({ageData}) => (
  <div className="vaccination-by-age-main-container">
    <h1>Vaccination by age</h1>

    <PieChart width={1000} height={300}>
      <Pie
        cx="50%"
        cy="40%"
        data={ageData}
        startAngle={0}
        endAngle={360}
        innerRadius="0%"
        outerRadius="70%"
        dataKey="count"
      >
        <Cell name="18-44" fill="#5a8dee" />
        <Cell name="45-60" fill="#a3df9f" />
        <Cell name="Above 60" fill="#2cc6c6" />
      </Pie>
      <Legend
        iconType="circle"
        layout="vertical"
        verticalAlign="middle"
        align="bottom"
      />
    </PieChart>
  </div>
)
export default VaccinationByAge
