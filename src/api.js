import axios from "axios";

const ID = "a8toalazbnt8nau1t9lirm3m6pe2lz";

var streamers = [
  "cretetion",
  "freecodecamp",
  "ESL_SC2",
  "habathcx",
  "storbeck",
  "RobotCaleb",
  "noobs2ninjas",
  "OgamingSC2",
  "brunofin",
  "tommey",
  "comster404"
];
var endpoint = "https://api.twitch.tv/kraken";

/**
 * Append each stream (if available) to streamer
 * returns Array of Promises
 */
export function fetchData() {
  return fetchStreamers().then(res => {
    const streamers = res.data.users;
    return streamers.map(streamer => {
      return fetchStream(streamer._id).then(res => {
        const stream = res.data.stream;
        if (stream) {
          const { game, viewers, preview: { medium }, channel: { url } } = stream;
          const streamData = {
            game,
            viewers,
            mediumPreview: medium,
            url,
            status: "online"
          };
          return Object.assign({}, streamer, streamData);
        } else {
          return Object.assign({}, streamer, { status: "offline" });
        }
      });
    });
  });
}

/**
 * Fetch Array of streamers from their names
 */
function fetchStreamers() {
  return axios.get(endpoint + `/users?login=${streamers.join(",")}`, {
    headers: {
      Accept: "application/vnd.twitchtv.v5+json",
      "Client-ID": ID
    }
  });
}

/**
 * Fetch individual Stream by user Id
 */
function fetchStream(streamerId) {
  return axios.get(endpoint + `/streams/${streamerId}`, {
    headers: {
      Accept: "application/vnd.twitchtv.v5+json",
      "Client-ID": ID
    }
  });
}
