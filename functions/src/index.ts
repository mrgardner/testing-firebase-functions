import * as functions from 'firebase-functions';
const cors = require('cors')({origin: true});
const Client = require('node-rest-client').Client
const client = new Client()

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const helloWorld = functions.https.onRequest((request, response) => {
  cors(request, response, () => {
    console.log('request ', request);
    console.log('response ', response);
    response.send(client.get('https://api.spotify.com/v1/me', {
      headers: {'Content-Type': 'application/json', Authorization: 'BQBsU5rC4q62IpF5731h_DhYfGNUBj7_76EDpK59OsXEGVYugmGBaML29NyqFcJAa2KML2suDeHTQ8wGzDilRtmXdowXHzwH58IUY0xtkYhiMCd0Ik_TMBcSFY9d0UKerJO1wgToVhUElHsU6ueHunuYxLqIuV9ReTcKjT6Zb3G8Un5b7gUsZ-JMeRP_9fvCDnETu4TI9P_42Fwyj5R1RvDUNO1OE3iY6lveomm35Rcyy99Y72PY7Z7Pi2wzcm_dodeD3wUQdXLzo7T60P79l2pm1m51'}
  }, function (data: any, res:any) {
      res.status(201)
          .type('application/json')
          .send(data)
    }));
    // fetch('https://api.spotify.com/v1/me', {
    //         method: 'get',
    //         headers: {'Content-Type': 'application/json', Authorization: 'BQBsU5rC4q62IpF5731h_DhYfGNUBj7_76EDpK59OsXEGVYugmGBaML29NyqFcJAa2KML2suDeHTQ8wGzDilRtmXdowXHzwH58IUY0xtkYhiMCd0Ik_TMBcSFY9d0UKerJO1wgToVhUElHsU6ueHunuYxLqIuV9ReTcKjT6Zb3G8Un5b7gUsZ-JMeRP_9fvCDnETu4TI9P_42Fwyj5R1RvDUNO1OE3iY6lveomm35Rcyy99Y72PY7Z7Pi2wzcm_dodeD3wUQdXLzo7T60P79l2pm1m51'}
    //     }).then((res: any) => console.log(res.json()));
    // response.send({test: 'hello world'});
  });
});
