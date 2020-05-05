// Practice: Doctors

// Lightning Exercise 1: Write a factory function that creates an object that represents a doctor. The function should accept three arguments.
// Doctor's name
// Specialty (Oncologist, pediatrician, etc...)
// Address of practice

const createDoctor = (name, specialty, address) => ({
  "doctorName": name,
  "doctorSpecialty": specialty,
  "doctorAddress": address
})

// Lightning Exercise 2: Write a factory function that creates an object that represents a pet. The function should accept two arguments.
// Pet name
// Pet breed
// Invoke the factory function 3 times and place each animal in an array stored in a variable named BowWowKennels

const petObj = (name, breed) => ({
  "petName": name,
  "petBreed": breed
})

const BowWowKennels = []

BowWowKennels.push(petObj("Kopi", "Pug"))
BowWowKennels.push(petObj("Thrasher", "Pitbull"))
BowWowKennels.push(petObj("Guiness", "Pug"))

