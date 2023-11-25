import { GarageDoor } from '../devices';
import { Command } from './command';

export class GarageDoorUpCommand implements Command {
  constructor(private garageDoor: GarageDoor) {}
  execute(): void {
    this.garageDoor.up();
  }
}

export class GarageDoorDownCommand implements Command {
  constructor(private garageDoor: GarageDoor) {}
  execute(): void {
    this.garageDoor.down();
  }
}

export class GarageDoorStopCommand implements Command {
  constructor(private garageDoor: GarageDoor) {}
  execute(): void {
    this.garageDoor.stop();
  }
}

export class GarageDoorLightOnCommand implements Command {
  constructor(private garageDoor: GarageDoor) {}
  execute(): void {
    this.garageDoor.lightOn();
  }
}

export class GarageDoorLightOffCommand implements Command {
  constructor(private garageDoor: GarageDoor) {}
  execute(): void {
    this.garageDoor.lightOff();
  }
}
