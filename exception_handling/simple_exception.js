const emps = [{ "name": "Serena" }]

try {
    console.log(emps[2].name)
} catch (err) {
    console.log(`Error name ${err.name} \nmessage ${err.message}`)
} finally {

}

console.log("Continue")