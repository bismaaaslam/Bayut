import React from "react";
const Gist = ({ gist }) => {
  const { owner, description, files, forks_url, comments_url } = gist;
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };
  return (
    <>
      <div style={{ width: "600px" }}>
        <div className="">
          <div className="container ">
            <div className="row">
              <div className="col">
                {" "}
                <img
                  src={owner.avatar_url}
                  alt={owner.login}
                  className="rounded-circle mb-3"
                  style={{ width: "40px" }}
                />
              </div>
              <div className="col"> {owner.login}</div>
              <div className="col">
                {" "}
                <a href={"#"}>Files</a>
              </div>
              <div className="col">
                {" "}
                <a href={forks_url}>Forks</a>
              </div>
              <div className="col">
                {" "}
                <a href={comments_url}>Comments</a>
              </div>
            </div>
          </div>
          <strong>Created at:</strong> {formatDate(gist.created_at)}{" "}
          <strong>Last updated:</strong> {formatDate(gist.updated_at)}
          <p>
            <b>{description}</b>
          </p>
          <p>
            {Object.values(files).map((file) => {
              return <>{file.filenames}</>;
            })}
          </p>
          <hr />
        </div>
      </div>
    </>
  );
};

export default Gist;
