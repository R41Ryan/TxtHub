package com.txthub.usersystem.user;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
public class UserService {

    private final UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository){
        this.userRepository = userRepository;
    }

    public User createUser(String username, String password){
        if(getUserByUsername(username).isEmpty()) {
            System.out.println("user not found, creating a user");
            User user = new User(new ObjectId(), username, password);
            userRepository.save(user);
            return user;
        }
        System.out.println("user found");

        return null;

    }

    public User login(String username, String password){
        Optional<User> userOptional = getUserByUsername(username);
        if(userOptional.isPresent()){
            User user = userOptional.get();
            if(user.getPassword().equals(password)){
                return user;
            }
        }
        return null;
    }


    public Optional<User> getUserByUsername(String username){
        System.out.println(username);
        return Optional.ofNullable(userRepository.findByUsername(username));



    }


}
