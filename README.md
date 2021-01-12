To run the suite:

Please first "npm install" to ensure you've got all the required dependencies and so your node_modules builds.

To run in headless simply run "npm test"

To run with Cypresses viewable mode execute "node_modules\\.bin\\cypress open"  into the terminal > select a test under tests --, this will open up a real time capture of the tests, allowing you to break down step by step to see what has happened.

To view cypress dashboard -- node_modules\\.bin\\cypress run --record --key d7add66b-64a6-46c8-ab5a-62fc63292d7c


_______________________________________________________________________________________________________________________________


Intermitent Potential bug:

Given A user signs up with all details correct
When User clicks submit
Then Alert will pop up stating the browser or application has had its password exposed and chrome recommends changing it
______________________________________________________________________________________________________________________________