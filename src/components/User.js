import React from "react";

const User = ({ userdata }) => {
  console.log(userdata);
  return (
    <div className="user">
      <div className="image">
        <img src={userdata.avatar_url} alt="" width="200" />
      </div>

      <table>
        <tbody>
          <tr>
            <td>Name:{userdata.login}</td>
            <td>
              Location:{" "}
              {userdata.location ? userdata.location : "No location found"}
            </td>
          </tr>
          <tr>
            <td>Followers:{userdata.followers}</td>
            <td>Following:{userdata.following}</td>
          </tr>
          <tr>
            <td>Repository:{userdata.public_repos}</td>
            <td>Repo URL:{userdata.url}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default User;
