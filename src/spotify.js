import { SpotifyApi } from '@spotify/web-api-ts-sdk';



export async function spotifySearch() {
    const spotify = await connectWithSpotify()
    spotify.search()
    const items = await spotify.search("The Beatles", ["artist"]);
    console.table(items.artists.items.map((item) => ({
        name: item.name,
        followers: item.followers.total,
        popularity: item.popularity,
    })));
    return items
}


/**
 * 
 **/

export async function connectWithSpotify() {
    const sdk = SpotifyApi.withUserAuthorization(
        import.meta.env.VITE_SPOTIFY_CLIENT_ID,
        "http://localhost:3000",
        [
            "user-library-read",
            "user-top-read",
            "playlist-read-private",
            "user-modify-playback-state",
            "user-read-playback-state"
        ]
    );
    await new Promise(resolve => setTimeout(resolve, 50));
    return sdk
}

export function disconnectFromSpotify() {
    localStorage.clear("spotify-sdk:AuthorizationCodeWithPKCEStrategy:token")
    window.location.reload()
}
