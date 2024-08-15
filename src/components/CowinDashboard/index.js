import {Component} from 'react'
import Loader from 'react-loader-spinner'
import VaccinationCoverage from '../VaccinationCoverage'
import VaccinationByGender from '../VaccinationByGender'
import VaccinationByAge from '../VaccinationByAge'

import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class CowinDashboard extends Component {
  state = {apiStatus: apiStatusConstants.initial, coWinData: {}}

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const response = await fetch('https://apis.ccbp.in/covid-vaccination-data')
    if (response.ok) {
      const data = await response.json()
      const formattedData = {
        last7DaysVaccination: data.last_7_days_vaccination,
        vaccinationByAge: data.vaccination_by_age,
        vaccinationByGender: data.vaccination_by_gender,
      }
      console.log(formattedData)
      this.setState({
        coWinData: formattedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderLoader = () => (
    <div data-testid="loader" className="loader-container">
      <Loader type="ThreeDots" color="#ffffff" height={80} width={80} />
    </div>
  )

  renderSuccess = () => {
    const {coWinData} = this.state
    const barChartData = coWinData.last7DaysVaccination.map(each => ({
      dose1: each.dose_1,
      dose2: each.dose_2,
      vaccineDate: each.vaccine_date,
    }))
    const genderData = coWinData.vaccinationByGender
    const ageData = coWinData.vaccinationByAge

    return (
      <>
        <VaccinationCoverage barChartData={barChartData} />
        <VaccinationByGender genderData={genderData} />
        <VaccinationByAge ageData={ageData} />
      </>
    )
  }

  renderFailure = () => (
    <div className="failure-main-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
        alt="failure view"
      />
      <h1>Something went wrong</h1>
    </div>
  )

  renderData = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return this.renderLoader()
      case apiStatusConstants.success:
        return this.renderSuccess()
      case apiStatusConstants.failure:
        return this.renderFailure()
      default:
        return null
    }
  }

  render() {
    return (
      <div className="app-container">
        <div className="nav-bar-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/cowin-logo.png"
            alt="website logo"
          />
          <h1>co-WIN</h1>
        </div>
        <h1>CoWIN Vaccination in India</h1>
        {this.renderData()}
      </div>
    )
  }
}

export default CowinDashboard
