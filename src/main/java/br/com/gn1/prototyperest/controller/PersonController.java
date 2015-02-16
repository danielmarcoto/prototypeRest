/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.com.gn1.prototyperest.controller;

import br.com.gn1.prototyperest.model.Person;
import br.com.gn1.prototyperest.model.ServerResponse;
import java.util.ArrayList;
import java.util.List;
import org.springframework.web.bind.annotation.*;

/**
 *
 * @author danielmarcoto
 */
@RestController
public class PersonController {
    
    @RequestMapping(value = "/person", method = RequestMethod.GET)
    public List<Person> getPeople(){
        // It should be retrieved from database
        List<Person> model;
        model = new ArrayList<Person>();
        model.add(new Person(1, "Daniel", "Marcoto"));
        model.add(new Person(2, "Eliana", "Marcoto"));
        model.add(new Person(3, "Christian", "Marcoto"));
        model.add(new Person(4, "Raimundo", "do Espírito Santo"));
        return model;
    }
    
    @RequestMapping(value = "/person/{id}", method = RequestMethod.GET)
    public Person getPerson(@PathVariable long id){
        // It should be retrieved from database
        return new Person(1, "Daniel", "Marcoto");
    }
    
    @RequestMapping(value = "/person", method = RequestMethod.POST)
    public ServerResponse postPerson(@RequestBody Person person){
        
        // Do some stuff for inserting
        
        return new ServerResponse(true, "Successfull inserted: " + 
                person.getFullName());        
    }
    
    @RequestMapping(value = "/person", method = RequestMethod.PUT)
    public ServerResponse putPerson(@RequestBody Person person){
        
        // Do some stuff for updating
        
        return new ServerResponse(true, "Successfull updated: " + 
                person.getFullName());  
    }
    
    @RequestMapping(value = "/person", method = RequestMethod.DELETE)
    public ServerResponse deletePerson(@RequestBody Person person){
        
        // Do some stuff for deleting
        
        return new ServerResponse(true, "Successfull deleted: " + 
                person.getFullName());  
    }
}
