package com.txthub.usersystem.user;

import lombok.Data;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.annotation.Id;

@Data
@Document("users")
public class User {
    @Id
    private String id;
}
