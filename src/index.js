import * as serviceWorker from './serviceWorker';
import { registerApplication, start } from "single-spa";

registerApplication(
  'root',          // Name of this single-spa application
  () => import("./root.app"), // Our loading function
  () => true // Our activity function
);

start();

serviceWorker.unregister();
