import axios from "axios";
import Noty from "noty";

const ID = "a8toalazbnt8nau1t9lirm3m6pe2lz";

var streamers = [
  "ESL_SC2",
  "OgamingSC2",
  "cretetion",
  "freecodecamp",
  "storbeck",
  "habathcx",
  "RobotCaleb",
  "noobs2ninjas",
  "tommey"
];
var endpoint = "https://api.twitch.tv/kraken";

export function getUsersData() {
  return axios.get(endpoint + `/users?login=${streamers.join(",")}`, {
    headers: {
      Accept: "application/vnd.twitchtv.v5+json",
      "Client-ID": ID
    }
  });
  // return new Promise(resolve => resolve(usersDummy))
}
export function getUserStream(id) {
  return axios.get(endpoint + `/streams/${id}`, {
    headers: {
      Accept: "application/vnd.twitchtv.v5+json",
      "Client-ID": ID
    }
  });
}
function notify(text) {
  new Noty({
    timeout: 1000,
    text,
    type: "info"
  }).show();
}

const usersDummy = {
  data: {
    _total: 9,
    users: [
      {
        display_name: "ESL_SC2",
        _id: "30220059",
        name: "esl_sc2",
        type: "user",
        bio:
          "For standings, schedule, and results, visit http://www.intelextrememasters.com/",
        created_at: "2012-05-02T09:59:20.784112Z",
        updated_at: "2017-06-13T11:03:52.750626Z",
        logo:
          "https://static-cdn.jtvnw.net/jtv_user_pictures/esl_sc2-profile_image-d6db9488cec97125-300x300.jpeg"
      },
      {
        display_name: "OgamingSC2",
        _id: "71852806",
        name: "ogamingsc2",
        type: "user",
        bio: null,
        created_at: "2014-09-24T15:06:58.315907Z",
        updated_at: "2017-06-13T11:04:14.416363Z",
        logo:
          "https://static-cdn.jtvnw.net/jtv_user_pictures/ogamingsc2-profile_image-9021dccf9399929e-300x300.jpeg"
      },
      {
        display_name: "cretetion",
        _id: "90401618",
        name: "cretetion",
        type: "user",
        bio:
          "I am a retired Police Officer.  I believe in the Thin Blue Line.  I support Law Enforcement, Firefighters, and EMS.  I am a Sheep Dog and I am part of a Pack.  I want you to join my Pack.  We can fight the Evil in the world together.",
        created_at: "2015-05-06T15:57:39.971766Z",
        updated_at: "2017-06-13T10:01:17.166759Z",
        logo:
          "https://static-cdn.jtvnw.net/jtv_user_pictures/cretetion-profile_image-12bae34d9765f222-300x300.jpeg"
      },
      {
        display_name: "FreeCodeCamp",
        _id: "79776140",
        name: "freecodecamp",
        type: "user",
        bio:
          "We help you learn to code, then practice by building projects for nonprofits. Learn Full-stack JavaScript, build a portfolio, and get a coding job by joining our open source community at https://freecodecamp.com",
        created_at: "2015-01-14T03:36:47.619045Z",
        updated_at: "2017-06-13T11:01:08.163874Z",
        logo:
          "https://static-cdn.jtvnw.net/jtv_user_pictures/freecodecamp-profile_image-d9514f2df0962329-300x300.png"
      },
      {
        display_name: "storbeck",
        _id: "152475255",
        name: "storbeck",
        type: "user",
        bio: null,
        created_at: "2017-04-05T20:20:03.969304Z",
        updated_at: "2017-06-12T19:37:09.531484Z",
        logo: null
      },
      {
        display_name: "habathcx",
        _id: "6726509",
        name: "habathcx",
        type: "user",
        bio: "League of Legends, Music, Nerd Stuff, Chat.. blah blah blah",
        created_at: "2009-06-07T15:04:54.729673Z",
        updated_at: "2017-06-12T15:30:40.805793Z",
        logo:
          "https://static-cdn.jtvnw.net/jtv_user_pictures/habathcx-profile_image-d75385dbe4f42a66-300x300.jpeg"
      },
      {
        display_name: "RobotCaleb",
        _id: "54925078",
        name: "robotcaleb",
        type: "user",
        bio: null,
        created_at: "2014-01-13T04:07:33.805841Z",
        updated_at: "2017-06-13T09:30:32.850669Z",
        logo:
          "https://static-cdn.jtvnw.net/jtv_user_pictures/robotcaleb-profile_image-9422645f2f0f093c-300x300.png"
      },
      {
        display_name: "noobs2ninjas",
        _id: "82534701",
        name: "noobs2ninjas",
        type: "user",
        bio:
          "Live Programming my face off while hanging out with some of the most kick ass programmers on the planet.",
        created_at: "2015-02-13T08:13:10.981617Z",
        updated_at: "2017-06-13T01:04:39.073569Z",
        logo:
          "https://static-cdn.jtvnw.net/jtv_user_pictures/noobs2ninjas-profile_image-34707f847a73d934-300x300.png"
      },
      {
        display_name: "Tommey",
        _id: "25736477",
        name: "tommey",
        type: "user",
        bio: "Professional Call of Duty Player for FNATIC. Amateur streamer. ",
        created_at: "2011-10-27T00:42:04.076057Z",
        updated_at: "2017-06-13T11:01:13.965836Z",
        logo:
          "https://static-cdn.jtvnw.net/jtv_user_pictures/tommey-profile_image-60ad151959bcc962-300x300.jpeg"
      }
    ]
  }
};
