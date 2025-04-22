package asd.technischleerdoel.spotitube.models

import java.util.Date

data class Track (
    val id: Int,
    val title: String,
    val performer: String,
    val duration: Int,
    val album: String,
    val playcount: Int,
    val publicationDate: Date,
    val description: String,
    val offlineAvailable: Boolean
)