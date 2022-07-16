import React from "react";
import { useDialog } from "react-st-modal";
import "../App.css";

const DetailDialog = ({ info }) => {
  const { description, git, features, element, youtube } = info;
  const dialog = useDialog();
  return (
    <div className="detailDialog mx-5">
      <p className="font-bold">{description} </p>
      <ol>
        <li>
          {" "}
          <span className="font-bold">1| </span> {features?.one}
        </li>
        <li>
          {" "}
          <span className="font-bold">2| </span> {features?.two}
        </li>
        <li>
          {" "}
          <span className="font-bold">3| </span> {features?.three}
        </li>
        <li>
          {" "}
          <span className="font-bold">4| </span> {features?.four}
        </li>
        <li>
          {" "}
          <span className="font-bold">5| </span> {features?.five}
        </li>
        <li>
          {" "}
          <span className="font-bold">6| </span> {features?.six}
        </li>
      </ol>
      <p className="mt-5">{element}</p>
      <div className="mt-5">
        <a href={git?.live} className="btn btn-primary mb-5">
          Live Site
        </a>
        {youtube && (
          <a href={youtube} className="btn btn-accent mb-5 ml-5 text-white">
            Watch on youtube
          </a>
        )}

        <br />
        <a href={git?.client} className="btn btn-secondary mb-5">
          Client-Side code
        </a>
        {git.server && (
          <a href={git.server} className="btn btn-secondary ml-5 mb-5">
            Server-Side code
          </a>
        )}
      </div>
    </div>
  );
};

export default DetailDialog;
