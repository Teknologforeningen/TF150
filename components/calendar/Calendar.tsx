import React from 'react'
import Subtitle from '@components/Subtitle'
import listEvents, { CalendarEvent } from '@lib/google/calendar'
import InteractiveCalendar from '@components/calendar/InteractiveCalendar'

const Calendar = async () => {
  const now = new Date()
  const events = await listEvents(now)

  const fetchMore = async (date: Date): Promise<CalendarEvent[]> => {
    'use server'
    return listEvents(date)
  }

  return (
    <div className="mx-5 flex flex-col py-10 md:py-0">
      <div className="self-center md:self-auto">
        <Subtitle underline={false}>Händelsekalendern</Subtitle>
      </div>
      <InteractiveCalendar
        initialEvents={events}
        initialDate={now}
        fetchEvents={fetchMore}
      />
    </div>
  )
}

export default Calendar
