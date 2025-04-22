package asd.technischleerdoel.spotitube.businessLayer

import asd.technischleerdoel.spotitube.models.Token
import org.springframework.stereotype.Service

@Service
class LoginService {
    fun generateToken(username: String, password: String): Token {
        val token = "1234-1234-1234"
        return Token(token = token, username = username)
    }
}