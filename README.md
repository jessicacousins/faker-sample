# Faker Sample

## Description

This is a simple Node.js project demonstrating the usage of the @faker-js/faker library to generate random data.

## Features

- Node.js
- Faker

## Run Server

`node index.js`

## Guide to Building Project:

- Create project folder: `mkdir fakersample`
- Bring in node: `npm init -y` and `npm install`
- Bring in faker: `npm install @faker-js/faker --save-dev`
- Create index.js file in the root of the project:

  ```
  const { faker } = require("@faker-js/faker");
  const company = faker.company.buzzPhrase();
  const catchphrase = faker.company.catchPhrase();
  const avatar = faker.image.avatar();

  console.log("Company:", company);
  console.log("Catchphrase:", catchphrase);
  console.log("Avatar:", avatar);
  ```

- Run the server: `node index.js`

## License Info

[MIT](https://choosealicense.com/licenses/mit/)
_Copyright (c) 2023 Jessica Cousins_

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Contributing

Contributions to this project are welcome. If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

```

```
