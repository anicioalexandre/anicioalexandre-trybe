function onSuccess () {
  console.log('Success!')
}

function onError () {
  console.log('Breaking Bad')
}

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject()
  }, 2000)
})

promise.then(onSuccess)
promise.catch(onError)