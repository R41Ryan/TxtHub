package com.txthub.usersystem.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping(path = "user/api/v1")
@CrossOrigin(origins = {"http://localhost:3000"})
public class UserController {

    private final UserService userService;


    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/test")
    @ResponseBody
    public String test(){
        System.out.println("Testing system");
        return "hello world!";
    }



    @GetMapping("/login")
    @ResponseBody
    public User login(@RequestBody UserForm userForm){
        System.out.println("Login request received");
        return userService.login(userForm.getUsername(), userForm.getPassword());
    }

    @PostMapping("/register")
    @ResponseBody
    public User register(@RequestBody UserForm userForm){
        System.out.println("Create request received");
        return userService.createUser(userForm.getUsername(), userForm.getPassword());
    }

}
