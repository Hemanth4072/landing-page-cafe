import { useState } from 'react'

const initialReservation = {
  guestName: '',
  guests: '2',
  date: '',
  time: '',
}

function Reservation() {
  const [reservation, setReservation] = useState(initialReservation)
  const [reservationStatus, setReservationStatus] = useState('')

  const handleChange = (event) => {
    const { name, value } = event.target
    setReservation((prev) => ({ ...prev, [name]: value }))
  }

  const handleReservation = (event) => {
    event.preventDefault()

    if (!reservation.guestName || !reservation.date || !reservation.time) {
      setReservationStatus('Please fill all reservation fields.')
      return
    }

    setReservationStatus('Reservation request submitted. We will confirm soon!')
    setReservation(initialReservation)
  }

  return (
    <section className="section-padding bg-coffee-900 text-cream-100">
      <div className="container-custom rounded-3xl border border-coffee-700 bg-coffee-800 p-6 shadow-glow lg:p-10">
        <h2 className="heading-font mb-2 text-3xl font-bold">Reserve a Table</h2>
        <p className="mb-6 text-coffee-200">Plan your cozy moments with us in a few clicks.</p>

        <form className="grid gap-4 md:grid-cols-2 lg:grid-cols-5" onSubmit={handleReservation}>
          <input
            type="text"
            name="guestName"
            value={reservation.guestName}
            onChange={handleChange}
            placeholder="Your name"
            className="rounded-xl border border-coffee-600 bg-coffee-700 px-3 py-2 placeholder:text-coffee-300"
          />
          <select
            name="guests"
            value={reservation.guests}
            onChange={handleChange}
            className="rounded-xl border border-coffee-600 bg-coffee-700 px-3 py-2"
          >
            <option value="2">2 Guests</option>
            <option value="4">4 Guests</option>
            <option value="6">6 Guests</option>
            <option value="8">8 Guests</option>
          </select>
          <input
            type="date"
            name="date"
            value={reservation.date}
            onChange={handleChange}
            className="rounded-xl border border-coffee-600 bg-coffee-700 px-3 py-2"
          />
          <input
            type="time"
            name="time"
            value={reservation.time}
            onChange={handleChange}
            className="rounded-xl border border-coffee-600 bg-coffee-700 px-3 py-2"
          />
          <button
            type="submit"
            className="rounded-xl bg-coffee-500 px-4 py-2 font-semibold transition hover:bg-coffee-400"
          >
            Reserve
          </button>
        </form>

        {reservationStatus ? <p className="mt-4 text-sm text-coffee-100">{reservationStatus}</p> : null}
      </div>
    </section>
  )
}

export default Reservation
