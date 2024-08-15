import {PieChart, Pie, Legend, Cell} from 'recharts'
import './index.css'

const VaccinationByGender = ({genderData}) => (
  <div className="vaccination-by-gender-main-container">
    <h1>Vaccination by gender</h1>

    <PieChart width={1000} height={300}>
      <Pie
        cx="50%"
        cy="40%"
        data={genderData}
        startAngle={180}
        endAngle={0}
        innerRadius="30%"
        outerRadius="70%"
        dataKey="count"
      >
        <Cell name="Male" fill="#f54394" />
        <Cell name="Female" fill="#5a8dee" />
        <Cell name="Others" fill="#2cc6c6" />
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

export default VaccinationByGender
