package com.example.Database.Controller;

import com.example.Database.Models.Startup;
import com.example.Database.Service.StartupService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/startups")
public class StartupController {

    @Autowired
    private StartupService startupService;

    // Get all startups
    @GetMapping
    public List<Startup> getAllStartups() {
        return startupService.getAllStartups();
    }

    // Get a startup by its ID
    @GetMapping("/{id}")
    public Startup getStartupById(@PathVariable Long id) {
        return startupService.getStartupById(id);
    }

    // Add a new startup
    @PostMapping
    public Startup addStartup(@RequestBody Startup startup) {
        return startupService.createStartup(startup);
    }

    // Update an existing startup
    @PutMapping("/{id}")
    public Startup updateStartup(@PathVariable Long id, @RequestBody Startup startup) {
        return startupService.updateStartup(id, startup);
    }

    // Delete a startup by its ID
    @DeleteMapping("/{id}")
    public void deleteStartup(@PathVariable Long id) {
        startupService.deleteStartup(id);
    }
}
