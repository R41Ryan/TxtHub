package com.txthub.txtbasedadventure.story.node;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface NodeRepository extends MongoRepository<Node, Integer> {
    
    List<Node> findById(int id);
}
