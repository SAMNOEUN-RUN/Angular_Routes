import { Component } from '@angular/core'; // Importing necessary Angular core module
import { RouterLink, RouterOutlet, RouterModule } from '@angular/router';


@Component({
  selector: 'app-root', // Defining the selector for the component
  standalone: true, // Indicating that this component is standalone
  imports: [RouterOutlet, RouterLink, RouterModule],
  templateUrl: './app.html', // Linking to the component's HTML template
  styleUrls: ['./app.scss'], // Linking to the component's CSS file
})
export class AppComponent {} // Exporting the AppComponent class
   