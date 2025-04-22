package asd.technischleerdoel.spotitube.testData

import asd.technischleerdoel.spotitube.models.Playlist
import asd.technischleerdoel.spotitube.models.Track
import java.util.*

class TestData {
    val playlists = mutableListOf<Playlist>()
    companion object {
        fun createDummyTrack(
            id: Int = 1,
            title: String = "Default Title",
            performer: String = "Default Performer",
            duration: Long = 180,
            album: String = "Default Album",
            playcount: Long = 0,
            publicationDate: Date = Date(),
            description: String = "Default Description",
            offlineAvailable: Boolean = false
        ) = Track(id, title, performer, duration, album, playcount, publicationDate, description, offlineAvailable)
    }

    fun getDummyPlaylists(
        id: Int = 1,
        name: String = "Default Playlist",
        owner: Boolean = true,
        tracks: List<Track> = listOf(createDummyTrack(), createDummyTrack(id = 2))
    ) : List<Playlist> {
        playlists.add(Playlist(id, name, owner, tracks))
        return playlists
    }
}