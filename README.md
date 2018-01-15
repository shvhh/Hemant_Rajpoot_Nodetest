# Hemant Rajpoot node test

### Pre-Requiste

1. Run command
   `git clone https://github.com/shvhh/Hemant_Rajpoot_Nodetest.git` to clone the repository.

2. Then run `cd Hemant_Rajpoot_Nodetest` to go into project directory.

3. Run `npm install` to install all dependencies.

4. Run `npm start` to start the server.

5. Run `npm test` to run tests.

---

## URL details -

1. `http://localhost:5000/` - select appropriate choice

2. `http://localhost:5000/marcopolo` - to get string of marcopolo according to given condition from 1-100000.

3. `http://localhost:5000/parsenumber` upload a file on this page and in response it give file as required.

---

## Qusestion - When is it a good idea to not use NodeJs? Why?

Answer - Node.js is not good for CPU intensive task(like Image processing, file compression/decompression) .Its because Nodejs only run on single thread if any cpu intensive operation (Sync task) arrive to execute than it will block that single thread and server won't be able to take any request at that time which is bad for our website.Although we can use cluster(on multi-core processor) and child-Process to use threading concept on nodeJs but those are not that efficient as other web technologies which works on multi threading concept.The only processes run parallel in nodeJs are I/O processes because of there Async nature in nodeJS.
