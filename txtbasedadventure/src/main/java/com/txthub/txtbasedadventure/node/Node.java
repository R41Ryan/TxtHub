package com.txthub.txtbasedadventure.node;

import lombok.Data;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.annotation.Id;

@Data
@Document("nodes")
public class Node {
    static int autoId = 1;
    @Id
    private int nodeId;
    private String text; // Text displayed on node (i.e. the story/scenario)
    private String imagePath; // Path to image located on local server/host

    public Node() {
        nodeId = autoId++;
    }

    public Node(int id) {
        nodeId = id;
    }
}
