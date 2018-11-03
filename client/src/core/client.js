// @flow

export function fetchTrip (tripId: number) {
  return window.fetch('/trip/' + tripId)
    .then(response => response.json())
}
