# Just Jokes

Just Jokes is a simple joke generating app built using React to fetch and manipulate data from multiple APIs.

The APIs that were used for this project were:

- https://rapidapi.com/anton12341/api/yo-mama-jokes
- https://icanhazdadjoke.com/

# Technologies Used

JavaScript, React Js, CSS, and Bootstrap

# Run Locally

npm install to install the necessary dependancies.

Create a .env file in the root folder of the project and add the following line: REACT_APP_API_TOKEN= Place API Here (Navigate to rapidapi.com, create an account, then navigate to the API linked above to get an API Key).

npm start to launch server

** _redirects file may be necessary to render page if using React Router **


# Routes
- Available Routes:
    - Home: "/"
    - Dad Jokes: "/dadjokes"
    - Yo Mama Jokes: "/yomamajokes"
    - Search Jokes: "/searchjokes"


# Challenges

- The search bar
 - The API was actually down when I intially started the project.
 - Actully had forgot to pass the state for the search field.
- APIs with endpoints behind paywalls

# Check it Out Here:

https://rococo-caramel-aa7d55.netlify.app/

# License

MIT License

Copyright (c) [2022] [Nathan Crawford]

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