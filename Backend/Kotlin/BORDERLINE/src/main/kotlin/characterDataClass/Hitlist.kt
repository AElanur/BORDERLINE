package characterDataClass

data class Hitlist(
    val id : Int,
    val type: String,
    val punch_name : String,
    val punch_hitpoints : Int,
    val kick_name : String,
    val kick_hitpoints : Int,
    val character_id : Int
)