let myPromise = new Promise((resolve, reject) => {
    let success = true;

    setTimeout(() => {
        if (success) {
            resolve("Success: The operation was completed!");
        } else {
            reject("Failure: There was an error.");
        }
    }, 2000);
});

// Handling the resolved or rejected promise
myPromise
    .then(result => {
        console.log(result); // Logs the success message
    })
    .catch(error => {
        console.log(error); // Logs the error message
    });