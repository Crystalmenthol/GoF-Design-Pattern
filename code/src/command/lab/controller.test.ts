import {
  GarageDoorDownCommand,
  GarageDoorLightOffCommand,
  GarageDoorLightOnCommand,
  GarageDoorStopCommand,
  GarageDoorUpCommand,
} from './command/garageDoorCommand';
import { LightOffCommand, LightOnCommand } from './command/lightCommand';
import { Controller } from './controller';
import { GarageDoor, Light } from './devices';

describe('[Command - lab] Controller', () => {
  it('should execute device that wrapped with command object', () => {
    const controller = new Controller();
    const light = new Light();
    light.on = jest.fn();
    light.off = jest.fn();
    const lightOnCommand = new LightOnCommand(light);
    const lightOffCommand = new LightOffCommand(light);

    controller.execute(lightOnCommand);
    expect(light.on).toHaveBeenCalledTimes(1);

    controller.execute(lightOffCommand);
    expect(light.off).toHaveBeenCalledTimes(1);
  });

  it('should execute garage door that wrapped with command object', () => {
    const controller = new Controller();
    const garageDoor = new GarageDoor();
    garageDoor.up = jest.fn();
    garageDoor.down = jest.fn();
    garageDoor.stop = jest.fn();
    garageDoor.lightOn = jest.fn();
    garageDoor.lightOff = jest.fn();
    const garageDoorUpCommand = new GarageDoorUpCommand(garageDoor);
    const garageDoorDownCommand = new GarageDoorDownCommand(garageDoor);
    const garageDoorStopCommand = new GarageDoorStopCommand(garageDoor);
    const garageDoorLightOnCommand = new GarageDoorLightOnCommand(garageDoor);
    const garageDoorLightOffCommand = new GarageDoorLightOffCommand(garageDoor);

    controller.execute(garageDoorUpCommand);
    expect(garageDoor.up).toHaveBeenCalledTimes(1);

    controller.execute(garageDoorDownCommand);
    expect(garageDoor.down).toHaveBeenCalledTimes(1);

    controller.execute(garageDoorStopCommand);
    expect(garageDoor.stop).toHaveBeenCalledTimes(1);

    controller.execute(garageDoorLightOnCommand);
    expect(garageDoor.lightOn).toHaveBeenCalledTimes(1);

    controller.execute(garageDoorLightOffCommand);
    expect(garageDoor.lightOff).toHaveBeenCalledTimes(1);
  });
});
