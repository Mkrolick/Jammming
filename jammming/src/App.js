import './App.css';


const header = (
  <div>
    <h1 class="headerText">Ja<span class="highlight">mmm</span>ing</h1>
  </div>
)


const searchChunk = (
  <form id="searchChunk">
    <input id="searchBar" placeholder="Enter A Song, Album, or Artist" />
    <br></br>
    <button id="searchButton">SEARCH</button>
  </form>
)

const searchResults = (
  <div id="searchResults">
    <h2>Results</h2>
    <div class="tracklist">
      {/* <!-- Results will go here --> */}
    </div>
  </div>
)

const playlist = (
  <div id="playlist">
    <input defaultValue="New Playlist" />
    <div class="tracklist">
      {/* <!-- Playlist tracks will go here --> */}
    </div>
    <button class="playlistButton">SAVE TO SPOTIFY</button>
  </div>
)



const bottomChunk = (
  <div id="bottomChunk">
    {searchResults}
    {playlist}
  </div>
)









function App() {
  return (
    <div className="App">
      {header}
      {searchChunk}
      {bottomChunk}




      <div id="body">

      </div>
    </div>
  );
}

export default App;
