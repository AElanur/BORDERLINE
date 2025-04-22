package asd.technischleerdoel.spotitube.controllers

import asd.technischleerdoel.spotitube.models.Token
import asd.technischleerdoel.spotitube.models.User
import asd.technischleerdoel.spotitube.businessLayer.LoginService
import org.springframework.web.bind.annotation.ExceptionHandler
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RestController

@RestController
class Login {
   private val loginService = LoginService()

    @ExceptionHandler
    @PostMapping("/login")
    fun login(@RequestBody user: User) : Token {
        return loginService.generateToken(user.user, user.password)
    }
}