import React from "react";

export default ({ streamers = [] }) => {
  const StreamersList = streamers.map(streamer => {
    return (
      <li key={streamer._id} className="media stream">
        <div className=" media-left">
          <figure className=" image is-64x64">
            <img src={streamer.logo} alt={streamer.name} />
          </figure>
        </div>
        <div className="media-content">
          <div className="content ">
            <p className="title is-4">{streamer.name}</p>
            <p>{streamer.bio}</p>
          </div>
        </div>
        <div className="stream__status">
          {streamer.stream
            ? <a href={streamer.stream.channel.url} target="_blank">
                <span><i className="stream__status-icon online" />Online</span>
              </a>
            : <span><i className="stream__status-icon offline" />Offline</span>}
        </div>
      </li>
    );
  });

  return (
    <div className="container ">
      <div className="columns" style={{ paddingTop: "40px" }}>
        <ul className="column is-offset-2 is-6">
          {StreamersList}
        </ul>

      </div>
    </div>
  );
};
