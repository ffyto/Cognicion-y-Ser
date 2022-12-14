import NonAvailabeHour from './nonAvailableHours.model';

export function getAllNonAvailableHours() {
  return NonAvailabeHour.find({});
}

export function createNonAvailableHour(user) {
  return NonAvailabeHour.create(user);
}

export function deleteNonAvailableHour(id) {
  return NonAvailabeHour.findByIdAndRemove(id);
}
