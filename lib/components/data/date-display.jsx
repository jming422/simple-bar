import { run } from 'uebersicht'

import { DateIcon } from '../icons.jsx'
import { clickEffect } from '../../utils'

import { getSettings } from '../../settings'

export { DateStyles } from '../../styles/components/data/date-display'

const openCalendarApp = (calendarApp) => {
  const appName = calendarApp ? calendarApp : 'Calendar'
  run(`open -a "${appName}"`)
}

const DateDisplay = () => {
  const settings = getSettings()
  const { widgets, dateWidgetOptions } = settings
  const { dateWidget } = widgets
  if (!dateWidget) return null

  const { shortDateFormat, locale, calendarApp } = dateWidgetOptions
  const formatOptions = shortDateFormat ? 'short' : 'long'

  const options = {
    weekday: formatOptions,
    month: formatOptions,
    day: 'numeric'
  }

  const onClick = (e) => {
    clickEffect(e)
    openCalendarApp(calendarApp)
  }

  const _locale = locale.length > 4 ? locale : 'en-UK'
  const now = new Date().toLocaleDateString(_locale, options)
  return (
    <div className="date-display" onClick={onClick}>
      <DateIcon className="date-display__icon" />
      {now}
    </div>
  )
}

export default DateDisplay
