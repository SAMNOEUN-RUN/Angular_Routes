import { Component } from '@angular/core'; // Importing necessary Angular core module
import { RouterLink, RouterOutlet, RouterModule } from '@angular/router'; // Importing RouterOutlet for routing functionality


@Component({
  selector: 'app-root', // Defining the selector for the component
  standalone: true, // Indicating that this component is standalone
  imports: [RouterOutlet, RouterLink, RouterModule], // Importing RouterLink and RouterOutlet for routing
  templateUrl: './app.component.html', // Linking to the component's HTML template
  styleUrls: ['./app.component.scss'], // Linking to the component's CSS file 
  template: `<h2>Welcome to the Home Page</h2>
<p>This is the home page of our Angular learning project.</p>`

})
export class AppComponent {} // Exporting the AppComponent class
   