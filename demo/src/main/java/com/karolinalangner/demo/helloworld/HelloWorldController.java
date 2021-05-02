package com.karolinalangner.demo.helloworld;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins="http://localhost:4201")
@RestController
public class HelloWorldController {

	@GetMapping(path= "/hello-world")
	public HelloWorldBean helloWorldBean() {
		return new HelloWorldBean("Hello World");
	}
	
	@GetMapping(path= "/hello-world/{name}")
	public HelloWorldBean helloWorldName(@PathVariable String name) {
		return new HelloWorldBean(String.format("Hello World, %s", name));
	}
}
