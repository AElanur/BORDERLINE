package asd.technischleerdoel.spotitube.controllers

import asd.technischleerdoel.spotitube.models.Playlist
import asd.technischleerdoel.spotitube.businessLayer.PlaylistService
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/playlists")
class Playlists {
    private val playlistService = PlaylistService()

    @ExceptionHandler
    @GetMapping("/")
    fun login(@RequestBody username:String, password:String) : List<Playlist> {
        println("does this even work?????")
        return playlistService.getPlaylists()
    }
}