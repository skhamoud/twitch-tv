import React from "react";
import Streamer from "./Streamer";
export default ({ streamsData, filter }) => {
  // Filter through filter word
  let StreamersList = streamsData
    .filter(s => {
      if (filter !== "all") return s.status === filter;
      return s;
    })
    // map and return relevant ui
    .map(streamer => {
      return <Streamer key={streamer._id} {...streamer} />;
    });

  return (
    <ul>
      {StreamersList}
    </ul>
  );
};
