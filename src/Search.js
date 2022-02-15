import React from "react";
import axios from "axios";
import "./index.css";

export default function Search() {
  return (
    <div>
      <form id="search-bar">
        <input
          type="search"
          placeholder="Search for a city"
          autocomplete="off"
          className="searchBar col-10"
          id="city-search"
        />
        <input
          type="submit"
          value="🔎"
          className="magnifier col-1"
          id="magnifier"
          title="Search"
        />
        <button
          className="locationButton col-1"
          id="location-button"
          title="Current Location"
        >
          <i className="fas fa-map-marker-alt"></i>
        </button>
      </form>
    </div>
  );
}
