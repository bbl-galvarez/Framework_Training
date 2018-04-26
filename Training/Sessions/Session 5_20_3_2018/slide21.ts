interface ClockConstructor{
    new(hour: number, minute: number):ClockInterface;
}

interface ClockInterface{
    tick();
}

function createClock(ctor: ClockConstructor, hour:number, ): ClockInterface{

}

class DigitalClock implements 