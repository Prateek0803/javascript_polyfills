let promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("resolved 1");
  }, 3000);
});

let promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("resolved 2");
  }, 3000);
});

let promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("resolved 3");
  }, 3000);
});

let promise4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("resolved 4");
  }, 3000);
});

const arr = [promise1, promise2, promise3, promise4];

function promisesAll(promises){
    const output = []
    let promiseCounter = 0
    return new Promise((resolve,reject) => {
        promises.forEach(async(promise,index) => {
            try {
                const response = await promise
                promiseCounter += 1
                output.push(response)
                if (promiseCounter === promises.length){
                    resolve(output)
                }
            } catch (error) {
                reject(error)
            }
        });
    })
}


promisesAll(arr).then((res) => {
    console.log(res)
})
.catch(err => {
    console.log(err)
})