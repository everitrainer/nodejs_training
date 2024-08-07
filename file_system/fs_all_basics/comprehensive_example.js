const fs = require('fs');

// Writing to a file
fs.writeFile('example.txt', 'Hello, world!', (err) => {
    if (err) throw err;
    console.log('File has been written');

    // Appending to the file
    fs.appendFile('example.txt', ' Appended content', (err) => {
        if (err) throw err;
        console.log('Content has been appended');

        // Reading the file
        fs.readFile('example.txt', 'utf8', (err, data) => {
            if (err) throw err;
            console.log('File content:', data);

            // Renaming the file
            fs.rename('example.txt', 'example_renamed.txt', (err) => {
                if (err) throw err;
                console.log('File has been renamed');

                // Getting file stats
                fs.stat('example_renamed.txt', (err, stats) => {
                    if (err) throw err;
                    console.log('File stats:', stats);

                    // Deleting the file
                    fs.unlink('example_renamed.txt', (err) => {
                        if (err) throw err;
                        console.log('File has been deleted');
                    });
                });
            });
        });
    });
});
