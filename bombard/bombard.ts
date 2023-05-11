import { Command, flags } from "@oclif/command";
import * as http from "http";

class bombard extends Command {
  static description = "describe the command here";

  async run() {
    // add your command logic here
    this.log("Hello, world!");
  }
}

// add your command flags here
bombard.flags = {
  name: flags.string({ char: "n", description: "name to print" }),
};
export default bombard;
