import React from "react";

export default ({ streamsData, filter }) => {
  let StreamersList = streamsData
    // Filter through filter word
    .filter(s => {
      if (filter !== "all") return s.status === filter;
      return s;
    })
    // map and return relevant ui
    .map(streamer => {
      return (
        <li key={streamer._id} className="media stream">
          <div className=" media-left">
            <figure className="image is-64x64">
              <img
                src={streamer.logo ? streamer.logo : "https://via.placeholder.com/64x64"}
                alt={streamer.name}
              />
            </figure>
          </div>
          <div className="media-content">
            <div className="content ">
              <p className="title is-4">{streamer.name}</p>
              <p>{streamer.bio ? streamer.bio : "No bio saved!"}</p>

              {streamer.status === "online"
                ? <div>
                    <p><strong>Game: </strong>{streamer.game}</p>
                    <p><strong>Language: </strong>{streamer.language} </p>
                    <p><strong>Status: </strong>{streamer.currentStatus}</p>
                    <p><strong>Viewers: </strong>{streamer.viewers} watching now!</p>
                    <p><strong>Followers: </strong>{streamer.followers} follower</p>

                    <p>
                      <a href={streamer.url} target="_blank">
                        <img src={streamer.mediumPreview} alt="" />
                      </a>
                    </p>

                  </div>
                : null}
            </div>
          </div>
          <div className="stream__status">
            {streamer.status === "online"
              ? <a href={streamer.url} target="_blank">
                  <span><i className="stream__status-icon online" />Online</span>
                </a>
              : <span><i className="stream__status-icon offline" />Offline</span>}
          </div>
        </li>
      );
    });

  return (
    <ul>
      {StreamersList}
    </ul>
  );
};
