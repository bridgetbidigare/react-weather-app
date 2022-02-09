import React from "react";
import "./index.css";

export default function Search() {
  return (
    <div>
      <form id="search-bar">
        <input
          type="search"
          placeholder="Search for a city"
          autocomplete="off"
          class="searchBar col-10"
          id="city-search"
        />
        <input
          type="submit"
          value="🔎"
          class="magnifier col-1"
          id="magnifier"
          title="Search"
        />
        <button
          class="locationButton col-1"
          id="location-button"
          title="Current Location"
        >
          <i class="fas fa-map-marker-alt"></i>
        </button>
      </form>
    </div>
  );
}
