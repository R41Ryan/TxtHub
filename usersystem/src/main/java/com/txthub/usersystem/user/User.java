package com.txthub.usersystem.user;

import lombok.Data;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.annotation.Id;

@Data
@Document("users")
public class User {
    @Id
    private String id;
    private String username;
    private String password;
    private float anagramRating;
    private float wordleRating;
    private float tbaRating; // tba = txtbased advanture

    //create new user
    public User(String username, String password){
        this.id = new ObjectId().toString();
        this.username = username;
        this.password = password;
        //default rating is 1000
        anagramRating = 1000;
        wordleRating = 1000;
        tbaRating = 1000;

    }

    public User(ObjectId id, String username, String password, float anagramRating, float wordleRating, float tbaRating) {
        this.id = id.toString();
        this.username = username;
        this.password = password;
        this.anagramRating = anagramRating;
        this.wordleRating = wordleRating;
        this.tbaRating = tbaRating;
    }
    public User(){

    }
}
