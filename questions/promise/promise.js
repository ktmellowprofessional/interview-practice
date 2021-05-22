class CustomPromise {
  state = "PENDING"
  value = undefined
  thenCallbacks = []
  errorCallbacks = []

  constructor(action) {
    action(this.resolve.bind(this), this.reject.bind(this))
  }

  resolve(value) {
    this.state = "RESOLVED"
    this.value = value
    this.thenCallbacks.forEach((callback) => {
      callback(this.value)
    })
  }

  reject(value) {
    this.state = "REJECTED"
    this.value = value
    this.errorCallbacks.forEach((callback) => {
      callback(this.value)
    })
  }

  then(callback) {
    this.thenCallbacks.push(callback)
    return this
  }

  catch (callback) {
    this.errorCallbacks.push(callback)
    return this
  }
}

// test case
let promise = new CustomPromise((resolve, reject) => {
  setTimeout(() => {
    const rand = Math.ceil(Math.random(1 * 1 + 6) * 6)
    if (rand > 2) {
      resolve("Success")
    } else {
      reject("Error")
    }
  }, 1000)
})

let realPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const rand = Math.ceil(Math.random(1 * 1 + 6) * 6)
    if (rand > 2) {
      resolve("Success")
    } else {
      reject("Error")
    }
  }, 1000)
})

promise
  .then((response) => {
    console.log(response)
  })
  .catch((error) => {
    console.log(error)
  })

// realPromise
//   .then((response) => {
//     console.log(response)
//   })
//   .catch((error) => {
//     console.log(error)
//   })
