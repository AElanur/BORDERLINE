package asd.technischleerdoel.spotitube.businessLayer

import asd.technischleerdoel.spotitube.models.Playlist
import asd.technischleerdoel.spotitube.testData.TestData
import org.springframework.stereotype.Service

@Service
class PlaylistService {
    private val testData = TestData()
    fun getPlaylists(): List<Playlist> {
        return  testData.getDummyPlaylists()
    }
}