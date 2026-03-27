import TimeInput from './TimeInput'
import TimerPresets from './TimerPresets';
import ClockDisplay from './ClockDisplay';
export default function ClockArea() {
    return (
        <div>
            <TimerPresets />
            <TimeInput />
            <ClockDisplay />
        </div>
    )
}