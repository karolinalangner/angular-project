package com.karolinalangner.d.basic.auth;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins="http://localhost:4201")
@RestController
public class BasicAuthenticationController {

	@GetMapping(path="/basicauth")
	public AuthenticationBean authenticationBean() {
		return new AuthenticationBean("You are authenticated ");
	}
	
}
